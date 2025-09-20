import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Small delay to trigger animation
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      if (duration > 0) {
        const timer = setTimeout(() => {
          setIsAnimating(false);
          setTimeout(() => {
            setShouldRender(false);
            onClose();
          }, 300); // Wait for exit animation
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isVisible, duration, onClose]);

  if (!shouldRender) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <div
        className={`
        flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border
        ${type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}
        min-w-[300px] max-w-md
        transform transition-all duration-300 ease-in-out
        ${isAnimating ? "translate-y-0 opacity-100 scale-100" : "-translate-y-2 opacity-0 scale-95"}
      `}
      >
        {type === "success" && (
          <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
        )}
        <span className="flex-1 text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setIsAnimating(false);
            setTimeout(() => {
              setShouldRender(false);
              onClose();
            }, 300);
          }}
          className={`
            flex-shrink-0 rounded-full p-1 transition-colors
            ${type === "success" ? "hover:bg-green-100 text-green-600" : "hover:bg-red-100 text-red-600"}
          `}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const showToast = (
    message: string,
    type: "success" | "error" = "success",
  ) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return { toast, showToast, hideToast };
}
