// 'use client'

// import { useState, useCallback, useEffect } from 'react'
// import { toast, Toaster } from 'sonner'
// import { Mail, Phone } from 'lucide-react'
// import { supabase } from '@/lib/supabase'

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

//   const handleViewportResize = useCallback(() => {
//     const viewport = window.visualViewport
//     const windowHeight = window.innerHeight
//     const viewportHeight = viewport?.height
//     const visualViewportScale = viewport?.scale || 1

//     // More reliable keyboard detection across all Android and iOS devices
//     if (viewportHeight !== undefined) {
//       const heightDiff = windowHeight - viewportHeight
//       const minKeyboardHeight = 100 // Lower threshold for detection
//       const isKeyboard = heightDiff > minKeyboardHeight && visualViewportScale <= 1 && viewportHeight < windowHeight * 0.8
//       setIsKeyboardVisible(isKeyboard)

//       // Prevent overscroll and bounce effects
//       document.documentElement.style.overflow = isKeyboard ? 'hidden' : ''
//       document.body.style.overflow = isKeyboard ? 'hidden' : ''
//       document.body.style.position = isKeyboard ? 'fixed' : ''
//       document.body.style.width = isKeyboard ? '100%' : ''
//     }
//   }, [])

//   useEffect(() => {
//     const viewport = window.visualViewport
//     if (viewport) {
//       viewport.addEventListener('resize', handleViewportResize)
//       viewport.addEventListener('scroll', handleViewportResize)
//     }
//     return () => {
//       if (viewport) {
//         viewport.removeEventListener('resize', handleViewportResize)
//         viewport.removeEventListener('scroll', handleViewportResize)
//       }
//     }
//   }, [handleViewportResize])

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // Save to Supabase database
//       const { error: dbError } = await supabase
//         .from('contact_messages')
//         .insert([{
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//           status: 'new',
//           created_at: new Date().toISOString()
//         }])

//       if (dbError) {
//         throw dbError
//       }
      
//       // Send email notification
//       try {
//         const emailResponse = await fetch('/api/send-email', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             message: `New Contact Form Submission

// Contact Details:
// - Name: ${formData.name}
// - Email: ${formData.email}
// - Phone: ${formData.phone}

// Message:
// ${formData.message}

// This message has been saved to your Supabase database in the contact_messages table.`
//           }),
//         })
        
//         if (!emailResponse.ok) {
//           throw new Error('Failed to send email notification')
//         }
//       } catch (emailError) {
//         console.error('Error sending email notification:', emailError)
//         // Continue with success flow even if email fails
//       }

//       toast.success('Message sent successfully!', {
//         duration: 1750,
//       })
//       setFormData({ name: '', email: '', phone: '', message: '' })
//     } catch (error: any) {
//       console.error('Submission error:', error)
//       toast.error('Failed to send message. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Handle input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   return (
//     <div className="p-6 md:p-8 md:pr-12">
//       <Toaster position="top-center" />
//       <p className="text-[#00FF85] text-sm font-medium mb-2">CONTACT US</p>
//       <h2 className="text-[#00FF85] text-2xl md:text-3xl font-bold mb-6 md:mb-8">Let's Collaborate Now!</h2>
      
//       {/* Contact Information */}
//       <div className="mb-8 space-y-3">
//         <div className="flex items-center gap-2">
//           <Mail className="w-5 h-5 text-[#00FF85]" />
//           <a href="mailto:ayhrotech@gmail.com" className="text-white hover:text-[#00FF85] transition-colors">
//           ayhrotech@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center gap-2">
//           <Phone className="w-5 h-5 text-[#00FF85]" />
//           <a href="tel:+919392954474" className="text-white hover:text-[#00FF85] transition-colors">
//             +91 9392954474
//           </a>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 form-container">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
//             placeholder="Enter your full name"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
//             placeholder="Enter your email address"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
//             placeholder="Enter your phone number"
//             pattern="[0-9]{10}"
//             title="Please enter a valid 10-digit phone number"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
//             placeholder="Write your message here..."
//             required
//           ></textarea>
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-[#00FF85] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium disabled:opacity-50"
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// } 



'use client'

import { useState, useCallback, useEffect } from 'react'
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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  const handleViewportResize = useCallback(() => {
    const viewport = window.visualViewport
    const windowHeight = window.innerHeight
    const viewportHeight = viewport?.height
    const visualViewportScale = viewport?.scale || 1

    // More reliable keyboard detection across all Android and iOS devices
    if (viewportHeight !== undefined) {
      const heightDiff = windowHeight - viewportHeight
      const minKeyboardHeight = 100 // Lower threshold for detection
      const isKeyboard = heightDiff > minKeyboardHeight && visualViewportScale <= 1 && viewportHeight < windowHeight * 0.8
      setIsKeyboardVisible(isKeyboard)

      // IMPORTANT: Remove all the styles that were causing issues
      if (isKeyboard) {
        // Don't set any styles that would interfere with normal scrolling
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
      }
    }
  }, [])

  useEffect(() => {
    const viewport = window.visualViewport
    if (viewport) {
      viewport.addEventListener('resize', handleViewportResize)
      viewport.addEventListener('scroll', handleViewportResize)
    }
    return () => {
      if (viewport) {
        viewport.removeEventListener('resize', handleViewportResize)
        viewport.removeEventListener('scroll', handleViewportResize)
      }
    }
  }, [handleViewportResize])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Supabase database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
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
            message: `New Contact Form Submission

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Message:
${formData.message}

This message has been saved to your Supabase database in the contact_messages table.`
          }),
        })
        
        if (!emailResponse.ok) {
          throw new Error('Failed to send email notification')
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

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 form-container">
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
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
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
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
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
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
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
            className="bg-white text-gray-900 text-sm rounded-md block w-full p-3" style={{ WebkitAppearance: 'none', fontSize: '16px', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
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