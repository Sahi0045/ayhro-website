'use client'

import { useState } from 'react'
import { toast, Toaster } from 'sonner'
import { Mail, Phone } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Supabase database
      const { error: dbError } = await supabase
        .from('chat_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_details: formData.message,
          status: 'new',
          created_at: new Date().toISOString()
        }])

      if (dbError) {
        throw dbError
      }
      
      // Send email notification
      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: `
Phone: ${formData.phone}
Message: ${formData.message}
            `
          }),
        })
        
        if (!emailResponse.ok) {
          console.error('Email notification failed to send')
        }
      } catch (emailError) {
        console.error('Error sending email notification:', emailError)
        // Continue with success flow even if email fails
      }

      toast.success('Message sent successfully!', {
        duration: 1750,
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error: any) {
      console.error('Submission error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="p-6 md:p-8 md:pr-12">
      <Toaster position="top-center" />
      <p className="text-[#00FF85] text-sm font-medium mb-2">CONTACT US</p>
      <h2 className="text-[#00FF85] text-2xl md:text-3xl font-bold mb-6 md:mb-8">Let's Collaborate Now!</h2>
      
      {/* Contact Information */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#00FF85]" />
          <a href="mailto:ayhrotech@gmail.com" className="text-white hover:text-[#00FF85] transition-colors">
          ayhrotech@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#00FF85]" />
          <a href="tel:+919392954474" className="text-white hover:text-[#00FF85] transition-colors">
            +91 9392954474
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#00FF85] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
} 