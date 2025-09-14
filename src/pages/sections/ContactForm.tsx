"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { X } from "lucide-react"
import { Toast, useToast } from "../../components/ui/Toast"

interface EmailFormProps {
  onClose?: () => void
}

function EmailForm({ onClose }: EmailFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

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
      )

      showToast("Message Sent!", "success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => {
        onClose?.()
      }, 2000)
    } catch (err) {
      console.error("Error sending email:", err)
      showToast("Error sending message", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="w-full p-6">
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="flex justify-between items-center w-full mb-4">
            <h1 className="text-lg font-semibold text-gray-900">Send Me A Message!</h1>
            {onClose && (
              <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
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

      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onClose={hideToast} />
    </>
  )
}

export default EmailForm
