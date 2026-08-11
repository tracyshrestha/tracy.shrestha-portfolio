import type React from "react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { X, Mic, MicOff } from "lucide-react";
import { Toast, useToast } from "@/components/ui/Toast";
import { useSpeechToText } from "@/hooks/useSpeechToText";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface EmailFormProps {
  onClose?: () => void;
}

function EmailForm({ onClose }: EmailFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showMicTip, setShowMicTip] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  const popupRef = useRef<HTMLDivElement>(null);

  const {
    isListening,
    listenSecondsLeft,
    stopListening,
    toggleListening,
  } = useSpeechToText({
    onTranscript: (text) =>
      setFormData((prev) => ({ ...prev, message: text })),
    onError: (message) => showToast(message, "error"),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Soft prompt for the mic when the modal first opens
  useEffect(() => {
    const showTimer = setTimeout(() => setShowMicTip(true), 450);
    const hideTimer = setTimeout(() => setShowMicTip(false), 450 + 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowInfoPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isListening) stopListening();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_gcinelg", // your actual EmailJS service ID
        "template_lmbz3q8", //  your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "kx1Z0-yXeYcOVv9A-", // Replace with your EmailJS public key
      );

      showToast("Message Sent!", "success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        onClose?.();
      }, 2000);
    } catch (err) {
      console.error("Error sending email:", err);
      showToast("Error sending message", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full p-6">
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center relative">
              <h1 className="text-lg font-semibold text-gray-900">
                Send Me A Message!
              </h1>{" "}
              &nbsp;
              <BsFillInfoCircleFill
                className=" text-[12px] text-brand cursor-pointer"
                onClick={() => setShowInfoPopup(!showInfoPopup)}
              />
              {/* Info Popup */}
              {showInfoPopup && (
                <div
                  ref={popupRef}
                  className="absolute top-8 left-0 mt-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                >
                  <p className="text-sm text-gray-600">
                    Fill out this form to send me a message directly to my
                    email. I'll get back to you as soon as possible!
                  </p>
                  <div className="absolute -top-1.5 left-32 w-3 h-3 rotate-45 bg-white border-t border-l border-gray-200"></div>
                </div>
              )}
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Name <span className="text-[#9F438A] text-lg">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9F438A] focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email <span className="text-brand text-lg">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9F438A] focus:border-transparent"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Message <span className="text-brand text-lg">*</span>
              </label>
              <div
                className={`group relative rounded-lg border bg-white transition-shadow ${
                  isListening
                    ? "border-[#9F438A] shadow-[0_0_0_3px_rgba(159, 67, 138,0.12)]"
                    : "border-gray-300 focus-within:border-[#9F438A] focus-within:shadow-[0_0_0_3px_rgba(159, 67, 138,0.12)]"
                }`}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32 rounded-t-lg border-0 px-3 py-2.5 bg-transparent text-gray-900 resize-none focus:outline-none focus:ring-0"
                  placeholder="Type your message, or use the mic to speak…"
                />

                <div className="flex items-center justify-between gap-2 border-t border-gray-100 px-2.5 py-1.5 rounded-b-lg bg-gradient-to-r from-gray-50/80 to-white">
                  <div className="flex items-center gap-2 min-h-[28px] min-w-0">
                    {isListening && (
                      <>
                        <span
                          className="flex items-end gap-[3px] h-3.5"
                          aria-hidden
                        >
                          {[0, 1, 2, 3].map((i) => (
                            <span
                              key={i}
                              className="w-[3px] rounded-full bg-[#9F438A] animate-pulse"
                              style={{
                                height: `${8 + (i % 3) * 4}px`,
                                animationDelay: `${i * 120}ms`,
                                animationDuration: "0.8s",
                              }}
                            />
                          ))}
                        </span>
                        <span className="text-xs font-medium text-[#9F438A] truncate">
                          Listening
                          <span className="text-gray-400 font-normal">
                            {" "}
                            · {listenSecondsLeft}s left
                          </span>
                        </span>
                      </>
                    )}
                  </div>

                  <div className="relative shrink-0">
                    {showMicTip && !isListening && (
                      <div
                        role="tooltip"
                        className="absolute bottom-full right-0 z-20 mb-2"
                      >
                        <div className="relative whitespace-nowrap rounded-md bg-[#9F438A]/90 py-2 pl-3 pr-7 text-[12px] leading-snug text-white shadow-md">
                          Try speaking aloud…
                          <button
                            type="button"
                            onClick={() => setShowMicTip(false)}
                            aria-label="Dismiss tip"
                            className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-sm text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                          >
                            <X size={11} strokeWidth={2.5} />
                          </button>
                          <span
                            className="absolute right-3 top-full h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-[#9F438A]/90"
                            aria-hidden
                          />
                        </div>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setShowMicTip(false);
                        toggleListening(formData.message);
                      }}
                      aria-pressed={isListening}
                      aria-label={
                        isListening
                          ? "Stop speech to text"
                          : "Start speech to text"
                      }
                      title={
                        isListening
                          ? "Stop listening"
                          : "Speak to type your message"
                      }
                      className={`flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-all active:scale-[0.97] ${
                        isListening
                          ? "bg-[#9F438A] text-white shadow-sm hover:bg-[#8A3878]"
                          : "text-[#9F438A] hover:bg-[#9F438A]/18"
                      }`}
                    >
                      {isListening ? (
                        <>
                          <MicOff size={14} strokeWidth={2.25} />
                          <span>Stop</span>
                        </>
                      ) : (
                        <Mic size={14} strokeWidth={2.25} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white bg-[#9F438A] hover:bg-[#8A3878] py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send  Message"}
          </button>
        </form>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}

export default EmailForm;
