"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import NetworkBackground from "../components/network-background"
import AIChatBot from "../components/AIChatBot"
import { supabase } from '@/lib/supabase'
import { toast, Toaster } from 'sonner'

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('chat_submissions')
        .insert([{
          name: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
          service: formData.budget,
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
            name: formData.fullName,
            email: formData.email,
            message: `
Phone: ${formData.mobile}
Service: ${formData.budget}
Timeline: ${formData.timeline}
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
        duration: 1750, // 1.75 seconds
      })
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        budget: "",
        timeline: "",
        message: "",
      })
    } catch (error: any) {
      console.error('Submission error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#1a232e] text-white relative overflow-hidden">
      <Toaster position="top-center" />
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>
      
      {/* Navbar */}
      <nav className="relative z-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <Image 
                    src="/images/logo.png"
                    alt="Ayhro Logo"
                    width={129}
                    height={129}
                  />
                  <span className="text-[#00FF85] text-xl font-medium" style={{ marginLeft: '-28px', fontSize: '28px' }}>ayhro</span>
                </div>
              </Link>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#services" className="text-white hover:text-[#00FF85] transition-colors">Services</Link>
              <Link href="/#projects" className="text-white hover:text-[#00FF85] transition-colors">Projects</Link>
              <Link href="/#reviews" className="text-white hover:text-[#00FF85] transition-colors">Reviews</Link>
              <Link href="/#contact" className="text-white hover:text-[#00FF85] transition-colors">Contact us</Link>
            </div>

            {/* Get Quote Button - Highlighted since we're on the quote page */}
            <div className="hidden md:block">
              <Link href="/quote">
                <button className="bg-[#00FF85] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium">
                  Get Quote
                </button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-[#00FF85] transition-all p-2 rounded-full hover:bg-[#00FF85]/10"
              >
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <motion.div 
            className="md:hidden fixed inset-0 z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              className="absolute top-[80px] inset-x-4 bg-gradient-to-b from-[#0F1923] to-[#0A1621] border border-gray-800/50 rounded-xl overflow-hidden shadow-2xl shadow-[#00FF85]/5"
              initial={{ y: -50, opacity: 0 }}
              animate={{ 
                y: mobileMenuOpen ? 0 : -50, 
                opacity: mobileMenuOpen ? 1 : 0 
              }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                delay: 0.1
              }}
            >
              <div className="flex flex-col p-2">
                {[
                  { href: "/#services", label: "Services" },
                  { href: "/#projects", label: "Projects" },
                  { href: "/#reviews", label: "Reviews" },
                  { href: "/#contact", label: "Contact us" }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      className="flex items-center text-white hover:text-[#00FF85] transition-all px-4 py-3 rounded-lg hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-4 px-4 pb-4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: mobileMenuOpen ? 0 : 10, opacity: mobileMenuOpen ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    <button className="bg-[#00FF85] text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium w-full shadow-lg shadow-[#00FF85]/20 hover:shadow-[#00FF85]/30 hover:scale-[1.02]">
                      Get Quote
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Illustration */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/collab/collaboration-illustration.png"
            alt="Designer working with dog illustration"
            width={600}
            height={600}
            priority
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 md:pl-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-[#00FF85] uppercase font-medium mb-2">Get a Quote</div>
          <h1 className="text-[#00FF85] text-4xl md:text-5xl font-bold mb-8">Let's Bring Your Vision to Life!</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Input Your Name"
                className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Input Your Email"
                  className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="91+"
                  className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block mb-2">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors appearance-none"
                  required
                >
                  <option value="" disabled>
                    Select Budget
                  </option>
                  <option value="Web Design - Crafting websites that convert and grow your business">Web Design</option>
                  <option value="App Design - Beautifully designed apps that users love">App Design</option>
                  <option value="UI/UX Design - Best UI/UX for website and mobile apps">UI/UX Design</option>
                  <option value="Blockchain Development - Smart contracts & dApps development">Blockchain Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors appearance-none"
                  required
                >
                  <option value="" disabled>
                    Select Timeline
                  </option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write Message..."
                className="w-full p-3 bg-[#0F1923] backdrop-blur-sm border border-[#00FF85]/20 text-white rounded-md focus:border-[#00FF85] focus:ring-2 focus:ring-[#00FF85]/20 transition-colors"
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
            
            <div className="mt-8 pt-6 border-t border-[#00FF85]/20">
              <p className="text-center text-gray-400 mb-2">Prefer to chat directly?</p>
              <div className="flex justify-center items-center">
                <a 
                  href="tel:+918121716969"
                  className="flex items-center text-[#00FF85] hover:text-white transition-colors mx-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 8121716969
                </a>
                <span className="text-gray-500 mx-2">|</span>
                <a 
                  href="https://wa.me/918121716969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#00FF85] hover:text-white transition-colors mx-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      {/* AI ChatBot */}
      <AIChatBot />
    </main>
  )
} 