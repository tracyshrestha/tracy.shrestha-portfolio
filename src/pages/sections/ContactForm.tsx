"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import { Toast, useToast } from "../../components/ui/Toast";
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
  const { toast, showToast, hideToast } = useToast();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                className=" text-[12px] text-gray-500 cursor-pointer"
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
                Name <span className="text-red-400 text-lg">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#46376d] focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email <span className="text-red-400 text-lg">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#46376d] focus:border-transparent"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Message <span className="text-red-400 text-lg">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-20 rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#46376d] focus:border-transparent"
                placeholder="Your Message"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white bg-[#46376d] hover:bg-[#372b56] py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
