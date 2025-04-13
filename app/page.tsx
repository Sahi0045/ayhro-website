// 'use client'

// import Image from "next/image"
// import Link from "next/link"
// import { fontSans } from "./fonts"
// import { Mail, ChevronLeft, ChevronRight, Linkedin, Instagram, Menu } from "lucide-react"
// import ContactForm from "./components/contact-form"
// import AIChatBot from "./components/AIChatBot"
// import Footer from "./components/Footer"
// import { useState, useEffect } from "react"
// import NetworkAnimation from "@/app/components/NetworkAnimation"
// import { motion, AnimatePresence } from "framer-motion"
// import TestimonialCard from "./components/testimonial-card"

// // Testimonial data
// const testimonials = [
//   {
//     id: 1,
//     name: "Hannah Schmitt",
//     position: "Lead designer",
//     image: "/testimonials/avatar1.jpg",
//     quote:
//       "Their blockchain expertise is next-level. They designed our dApp with such clarity that even our non-technical users found it intuitive. A perfect blend of design, functionality, and Web3 knowledge.",
//   },
//   {
//     id: 2,
//     name: "Jeetesh",
//     position: "Project Head - JetSettrs",
//     image: "/testimonials/avatar2.jpg",
//     quote:
//       "Working with the team was seamless. From user flow to final deployment, they nailed the UI/UX and delivered a stunning mobile and web app for JetSettrs. These guys get startup speed and design thinking — a rare combo.",
//   },
//   {
//     id: 3,
//     name: "Hannah Schmitt",
//     position: "Lead designer",
//     image: "/testimonials/avatar3.jpg",
//     quote:
//       "We were stuck between Web2 and Web3 — until we found them. Their hybrid knowledge helped us design and deploy a blockchain-based credentialing system in record time.",
//   },
//   {
//     id: 4,
//     name: "Michael Chen",
//     position: "CTO - BlockFin",
//     image: "/testimonials/avatar4.jpg",
//     quote:
//       "The team's ability to translate complex blockchain concepts into intuitive interfaces is unmatched. Our DeFi platform saw a 40% increase in user engagement after their redesign.",
//   },
//   {
//     id: 5,
//     name: "Sarah Johnson",
//     position: "Founder - MetaVerse Studios",
//     image: "/testimonials/avatar5.jpg",
//     quote:
//       "From concept to execution, they delivered our NFT marketplace with precision and creativity. Their deep understanding of both design principles and blockchain technology made all the difference.",
//   },
// ]

// export default function Home() {
//   const [isChatOpen, setIsChatOpen] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [autoplay, setAutoplay] = useState(true)
//   const [direction, setDirection] = useState(0)

//   // Calculate indices for visible cards
//   const visibleIndices = [
//     currentIndex,
//     (currentIndex + 1) % testimonials.length,
//     (currentIndex + 2) % testimonials.length,
//   ]

//   // Handle navigation
//   const handlePrev = () => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
//     setAutoplay(false)
//   }

//   const handleNext = () => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//     setAutoplay(false)
//   }

//   // Autoplay functionality
//   useEffect(() => {
//     if (!autoplay) return

//     const interval = setInterval(() => {
//       setDirection(1)
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [autoplay, testimonials.length])

//   return (
//     <div className="relative min-h-screen bg-[#0A1621]">
//       <NetworkAnimation />
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0A1621]/95 via-[#0F1923]/95 to-[#020606]/95" />
      
//       {/* Navbar - Static position with increased top padding */}
//       <nav className="relative z-50 pt-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Image 
//                 src="/images/logo.png"
//                 alt="Ayhro Logo"
//                 width={129}
//                 height={129}
//               />
//               <span className="text-[#00FF85] text-xl font-medium" style={{ marginLeft: '-28px', fontSize: '28px' }}>ayhro</span>
//             </div>

//             {/* Navigation Links - Center */}
//             <div className="hidden md:flex items-center space-x-12">
//               <Link href="#services" className="text-white hover:text-[#00FF85] transition-colors">Services</Link>
//               <Link href="#projects" className="text-white hover:text-[#00FF85] transition-colors">Projects</Link>
//               <Link href="#reviews" className="text-white hover:text-[#00FF85] transition-colors">Reviews</Link>
//               <Link href="#contact" className="text-white hover:text-[#00FF85] border-b-2 border-[#00FF85] pb-1">Contact us</Link>
//             </div>

//             {/* Get Quote Button */}
//             <div className="hidden md:block">
//               <Link href="/quote">
//                 <button className="bg-[#00FF85] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium">
//                   Get Quote
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className={`relative z-10 text-white overflow-x-hidden ${fontSans.className}`}>
//         {/* Hero Section */}
//         <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
//           {/* Vector Arrow - Updated with specific margins and larger size */}
//           <motion.div 
//             className="absolute hidden md:block" 
//             style={{ 
//               right: '265px',
//               top: '70px',
//               marginLeft:'350px',
//               marginRight:'195px',
//               transformOrigin: 'center center',
//               zIndex: 20
//             }}
//             initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
//             animate={{ 
//               opacity: 1, 
//               scale: 1,
//               rotate: -9.58,
//               y: [0, 5, 0],
//             }}
//             transition={{
//               duration: 0.8,
//               y: {
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }
//             }}
//           >
//             <Image 
//               src="/images/Vector.png" 
//               alt="Vector Arrow" 
//               width={180}
//               height={270}
//               style={{ 
//                 maxWidth: '100%',
//                 height: 'auto',
//                 filter: 'drop-shadow(0 0 8px rgba(0, 255, 133, 0.2))'
//               }}
//               priority
//             />
//           </motion.div>

//           <div className="max-w-[1200px] mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h1 className="font-black text-4xl md:text-[64px] leading-[1.1] md:leading-[1.1] tracking-[-0.02em] mb-6">
//                 Designing intuitive journeys
//                 <br />
//                 We build the digital <span className="text-[#00FF85]">tomorrow</span>
//               </h1>

//               <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12">
//                 Get your desired design services from our talented designers,
//                 <br className="hidden md:block" />
//                 at a reasonable cost
//               </p>

//               <div className="flex flex-col items-center justify-center gap-4 max-w-[520px] mx-auto mb-12">
//                 <div className="relative w-full bg-[#1A2530] rounded-full flex items-center">
//                   <input
//                     type="email"
//                     placeholder="Your work email"
//                     className="w-full bg-transparent px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none text-base"
//                   />
//                   <button 
//                     className="absolute right-2 bg-[#00FF85] text-black px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors font-medium text-base whitespace-nowrap"
//                   >
//                     Book a call
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center justify-center gap-2 text-base text-gray-400">
//                 <div className="flex">
//                   {'★★★★☆'.split('').map((star, i) => (
//                     <span key={i} className="text-[#00FF85] text-lg">{star}</span>
//                   ))}
//                 </div>
//                 <span>4.6/5.0</span>
//                 <span className="mx-2">•</span>
//                 <span>10+ Happy clients.</span>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section - Why Ayhro Is The Best Choice */}
//         <section className="mt-12 mb-20 max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-20">
//             Why Ayhro Is The Best Choice?
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
//             {/* Design-First, Tech-Driven */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#2D1E69]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">Design-First, Tech-Driven</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 We don't just build — we craft stunning, intuitive experiences that feel just right for your users.
//               </p>
//             </div>

//             {/* End-to-End Expertise */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#69231E]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M2 17L12 22L22 17M2 12L12 17L22 12M2 7L12 12L22 7L12 2L2 7Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">End-to-End Expertise</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 From wireframes to Web3, we cover everything: UX/UI design, responsive web dev, mobile apps, and blockchain integration.
//               </p>
//             </div>

//             {/* Agile, Fast, Reliable */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#5E691E]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">Agile, Fast, Reliable</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 Startups and founders love us because we move fast without breaking things. You get weekly updates and pixel-perfect deliveries.
//               </p>
//             </div>

//             {/* Built for Gen Z Brands */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#5E691E]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M16 4H8V20H16V4ZM4 8H8M4 16H8M16 12H20" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">Built for Gen Z Brands</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 We speak clean UI, bold visuals, and modern flows. Perfect for brands targeting digital-native users.
//               </p>
//             </div>

//             {/* Modular & Scalable */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#1E3569]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M21 16V8C21 7.45 20.8 6.979 20.4 6.59C20.021 6.197 19.55 6 19 6L12 2L5 6C4.45 6 3.979 6.2 3.59 6.59C3.197 6.979 3 7.45 3 8V16C3 16.55 3.197 17.021 3.59 17.41C3.979 17.8 4.45 18 5 18L12 22L19 18C19.55 18 20.021 17.8 20.4 17.41C20.8 17.021 21 16.55 21 16ZM12 12L3.27 7L12 2L20.73 7L12 12ZM12 22V12" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">Modular & Scalable</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 Everything we build is future-proof. Want to add features later or scale to millions? We've got you covered.
//               </p>
//             </div>

//             {/* Blockchain-Ready */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-[64px] h-[64px] rounded-full bg-[#691E5E]/20 flex items-center justify-center mb-6">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M16 8L2 22M17.5 15H9" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-semibold mb-3">Blockchain-Ready</h3>
//               <p className="text-[#94A3B8] text-base max-w-[280px]">
//                 We build smart contracts, dApps, and token-based systems with seamless wallet integration — you dream, we deploy.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-12 md:py-20">
//           <div className="max-w-6xl mx-auto px-4 relative z-10">
//             <h2 className="text-4xl font-bold text-center mb-20">The Service We Provide For You</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {/* Web Design Service */}
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M7 18h10M8 6h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-[#00FF85] font-semibold text-xl mb-2">Web Design</h3>
//                 <p className="text-white/80 text-base">Crafting websites that convert and grow your business</p>
//               </div>

//               {/* App Design Service */}
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 18V6M8.5 8.5h7M8.5 15.5h7M10 20h4M9 3h6" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-[#00FF85] font-semibold text-xl mb-2">App Design</h3>
//                 <p className="text-white/80 text-base">Beautifully designed apps that your users will love to use</p>
//               </div>

//               {/* UI & UX Service */}
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-[#00FF85] font-semibold text-xl mb-2">UI&UX</h3>
//                 <p className="text-white/80 text-base">Get a best UI&UX for website mobile app</p>
//               </div>

//               {/* Blockchain Service */}
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-[#00FF85] font-semibold text-xl mb-2">Blockchain</h3>
//                 <p className="text-white/80 text-base">Write and deploy smart contracts & Dapps</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Portfolio Section */}
//         <section id="portfolio" className="py-12 md:py-20 max-w-7xl mx-auto px-4 relative">
//           <h2 className="text-4xl font-bold text-center mb-20">
//             Our Awesome Portfolio
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {/* Mobile App */}
//             <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
//               <div className="aspect-[16/10] relative">
//                 <Image
//                   src="/portfolio/mobile-app.png"
//                   alt="Mobile App Portfolio"
//                   fill
//                   className="object-cover rounded-2xl"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium">Mobile App Design</span>
//                 </div>
//               </div>
//             </div>

//             {/* Cruise Search */}
//             <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden md:translate-y-12 transform transition-all duration-300 hover:scale-[1.02]">
//               <div className="aspect-[16/10] relative">
//                 <Image
//                   src="/portfolio/cruise-search.png"
//                   alt="Cruise Search Website"
//                   fill
//                   className="object-cover rounded-2xl"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium">Cruise Search Platform</span>
//                 </div>
//               </div>
//             </div>

//             {/* Luxury Experience */}
//             <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden md:translate-y-24 transform transition-all duration-300 hover:scale-[1.02]">
//               <div className="aspect-[16/10] relative">
//                 <Image
//                   src="/portfolio/luxury-experience.png"
//                   alt="Luxury Experience Website"
//                   fill
//                   className="object-cover rounded-2xl"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium">Luxury Experience</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-12 md:py-20 max-w-6xl mx-auto px-4 relative">
//           <div className="flex items-center justify-center mb-16 relative">
//             <motion.button
//               className="absolute left-0 md:left-10 text-[#00e389] hover:text-[#00e389]/80 transition-colors"
//               onClick={handlePrev}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronLeft size={36} />
//             </motion.button>

//             <motion.h2
//               className={`${fontSans.className} text-3xl md:text-5xl font-bold text-center`}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               What Our Clients Say About Us
//             </motion.h2>

//             <motion.button
//               className="absolute right-0 md:right-10 text-[#00e389] hover:text-[#00e389]/80 transition-colors"
//               onClick={handleNext}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronRight size={36} />
//             </motion.button>
//           </div>

//           {/* Testimonial cards */}
//           <div className="relative h-[500px] w-full">
//             <AnimatePresence initial={false} custom={direction}>
//               {visibleIndices.map((index, i) => (
//                 <TestimonialCard
//                   key={`${testimonials[index].id}-${i}`}
//                   testimonial={testimonials[index]}
//                   position={i}
//                   direction={direction}
//                   isActive={i === 1}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Pagination dots */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > currentIndex ? 1 : -1)
//                   setCurrentIndex(index)
//                   setAutoplay(false)
//                 }}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   visibleIndices.includes(index) ? "bg-[#00e389] scale-100" : "bg-white/30 scale-75"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Collaboration Section */}
//         <section id="contact" className="py-12 md:py-20 max-w-6xl mx-auto px-4">
//           <div className="border border-gray-700 rounded-xl overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Left side - Illustration */}
//               <div className="flex items-center justify-center p-8">
//                 <Image
//                   src="/collab/collaboration-illustration.png"
//                   alt="Let's Collaborate"
//                   width={700}
//                   height={700}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Right side - Form */}
//               <ContactForm />
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <Footer />
//       </main>

//       <AIChatBot />
//     </div>
//   )
// }



'use client'

import Image from "next/image"
import Link from "next/link"
import { fontSans } from "./fonts"
import { supabase } from '@/lib/supabase'
import { toast, Toaster } from 'sonner'
import { Mail, ChevronLeft, ChevronRight, Linkedin, Instagram, Menu } from "lucide-react"
import ContactForm from "./components/contact-form"
import AIChatBot from "./components/AIChatBot"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import NetworkAnimation from "./components/NetworkAnimation"
import { motion, AnimatePresence } from "framer-motion"
import TestimonialCard from "./components/testimonial-card"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ajay",
    position: "Lead designer",
    image: "/testimonials/avatar1.jpg",
    quote:
      "Their blockchain expertise is next-level. They designed our dApp with such clarity that even our non-technical users found it intuitive. A perfect blend of design, functionality, and Web3 knowledge.",
  },
  {
    id: 2,
    name: "Deepak Narayan",
    position: "Founder - Itoby",
    image: "/testimonials/avatar2.jpg",
    quote:
      "Working with the team was seamless. From user flow to final deployment, they nailed the UI/UX and delivered a stunning Design. These guys get startup speed and design thinking — a rare combo.",
  },
  {
    id: 3,
    name: "Akant",
    position: "Founder -Jetsetter",
    image: "/testimonials/avatar3.jpg",
    quote:
      "Working with the team was seamless. From user flow to final deployment, they nailed the UI/UX and delivered a stunning mobile and web app for JetSettrs. These guys get startup speed and design thinking — a rare combo.",
  },
  {
    id: 4,
    name: "Karthik",
    position: "Marketing Head - Student",
    image: "/testimonials/avatar4.jpg",
    quote:
      "Builds on the 40% engagement increase by proving ease of use to new users.",
  },
  {
    id: 5,
    name: "Jyothsna",
    position: "CEO & Student, Our IT Crew",
    image: "/testimonials/avatar5.jpg",
    quote: "I’m a student running our IT consultancy, and I’m so proud of my team for building an amazing system for [Your Agency]. They made everything work smoothly and helped your agency grow fast. Honestly, they’re the best at what they do!"
  },
]

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Calculate indices for visible cards
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % testimonials.length,
    (currentIndex + 2) % testimonials.length,
  ]

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setAutoplay(false)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setAutoplay(false)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  return (
    <div className="relative min-h-screen bg-[#0A1621] overflow-hidden">
      <NetworkAnimation />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1621]/95 via-[#0F1923]/95 to-[#020606]/95" style={{ zIndex: 0 }} />
      
      {/* Navbar - Static position with increased top padding */}
      <nav className="relative z-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/images/logo.png"
                alt="Ayhro Logo"
                width={129}
                height={129}
              />
              <span className="text-[#00FF85] text-xl font-medium" style={{ marginLeft: '-28px', fontSize: '28px' }}>ayhro</span>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-12">
              <div className="relative group">
                <Link href="#services" className="text-white group-hover:text-[#00FF85] transition-colors py-2 px-1">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF85] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <div className="relative group">
                <Link href="#portfolio" className="text-white group-hover:text-[#00FF85] transition-colors py-2 px-1">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF85] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <div className="relative group">
                <Link href="#testimonials" className="text-white group-hover:text-[#00FF85] transition-colors py-2 px-1">
                  Reviews
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF85] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <div className="relative group">
                <Link href="#contact" className="text-white group-hover:text-[#00FF85] transition-colors py-2 px-1">
                  Contact us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF85] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Get Quote Button - Desktop */}
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
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#testimonials", label: "Testimonials" },
                  { href: "#contact", label: "Contact us" }
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

      <main className={`relative z-10 text-white overflow-x-hidden ${fontSans.className}`}>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
          {/* Vector Arrow - Positioned between journeys and Get Quote button */}
          <div className="absolute top-0 w-full pointer-events-none">
            <motion.div 
              className="hidden lg:block absolute" 
              style={{ 
                right: 'clamp(120px, 15vw, 200px)',
                top: '35px',
                transformOrigin: 'center center',
                zIndex: 20
              }}
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: -9.58,
              y: [0, 5, 0],
              x: [0, 3, 0]
            }}
            transition={{
              duration: 0.8,
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image 
              src="/images/Vector.png" 
              alt="Vector Arrow" 
              width={120}
              height={120}
              className="xl:w-[150px] xl:h-[150px] 2xl:w-[180px] 2xl:h-[180px]"
              priority={true}
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 133, 0.2))'
              }}
            />
          </motion.div>
          </div>

          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-black text-4xl md:text-[64px] leading-[1.1] md:leading-[1.1] tracking-[-0.02em] mb-6">
                Designing intuitive journeys
                <br />
                We build the digital <span className="text-[#00FF85]">tomorrow</span>
              </h1>

              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12">
                Get your desired design services from our talented designers,
                <br className="hidden md:block" />
                at a reasonable cost
              </p>

              <div className="flex flex-col items-center justify-center gap-4 max-w-[520px] mx-auto mb-12">
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  if (!phoneNumber) return;
                  
                  setIsSubmitting(true);
                  try {
                    // Save to Supabase database
                    const { error: dbError } = await supabase
                      .from('chat_submissions')
                      .insert({
                        name: 'Website Visitor',
                        email: 'no-email@provided.com', // Required field in database
                        phone: phoneNumber,
                        service: 'Phone Call Request', // Required field in database
                        project_details: 'Requesting a call',
                        status: 'new',
                        created_at: new Date().toISOString()
                      });

                    if (dbError) {
                      throw dbError;
                    }
                    
                    // Store phone number for WhatsApp redirect
                    const enteredPhoneNumber = phoneNumber;
                    
                    // Send email notification
                    try {
                      const emailResponse = await fetch('/api/send-email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name: 'Website Visitor',
                          email: 'no-email@provided.com',
                          message: `A visitor wants to book a call. Phone number: ${enteredPhoneNumber}`
                        }),
                      });
                      
                      if (!emailResponse.ok) {
                        console.error('Email notification failed to send');
                      }
                    } catch (emailError) {
                      console.error('Error sending email notification:', emailError);
                      // Continue with success flow even if email fails
                    }

                    toast.success('Number saved! Redirecting to WhatsApp...', {
                      duration: 1750,
                    });
                    setPhoneNumber('');
                    
                    // Redirect to WhatsApp after a short delay to show the success message
                    setTimeout(() => {
                      window.open(`https://wa.me/918121716969?text=Hi%20Ayhro,%20I'd%20like%20to%20book%20a%20call%20with%20you.%20My%20number%20is%20${enteredPhoneNumber}`, '_blank');
                    }, 1500);
                  } catch (error) {
                    console.error('Submission error:', error);
                    toast.error('Failed to save your number. Please try again.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }} className="w-full">
                  <div className="relative w-full bg-[#1A2530] rounded-full flex items-center">
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none text-base"
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting || !phoneNumber}
                      className="absolute right-2 bg-[#00FF85] text-black px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors font-medium text-base whitespace-nowrap flex items-center gap-1"
                    >
                      <span>{isSubmitting ? 'Saving...' : 'Book a call'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center gap-2 text-base text-gray-400">
                <div className="flex">
                  {'★★★★☆'.split('').map((star, i) => (
                    <span key={i} className="text-[#FFD700] text-lg">{star}</span>
                  ))}
                </div>
                <span>4.6/5.0</span>
                <span className="mx-2">•</span>
                <span>10+ Happy clients.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Why Ayhro Is The Best Choice */}
        <section id="best-choice-section" className="mt-12 mb-20 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
            Why Ayhro Is The Best Choice?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Design-First, Tech-Driven */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#2D1E69]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V17.5C3 19.7091 4.79086 21.5 7 21.5H17C19.2091 21.5 21 19.7091 21 17.5V7.5C21 5.29086 19.2091 3.5 17 3.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8.5C10.3431 8.5 9 9.84315 9 11.5C9 13.1569 10.3431 14.5 12 14.5C13.6569 14.5 15 13.1569 15 11.5C15 9.84315 13.6569 8.5 12 8.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21.5C7 18.7386 9.23858 16.5 12 16.5C14.7614 16.5 17 18.7386 17 21.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Design-First, Tech-Driven</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                We don't just build — we craft stunning, intuitive experiences that feel just right for your users.
              </p>
            </div>

            {/* End-to-End Expertise */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#69231E]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 3.5C14.5 3.5 14.5 7.5 18.5 7.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 21.5L7.5 17.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 21.5L18.5 17.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 21.5L11.5 17.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 17.5L7.5 13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 17.5L14.5 13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 17.5L11.5 13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 17.5L18.5 13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 7.5C18.5 7.5 14.5 7.5 14.5 3.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 3.5L10.5 7.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 7.5L14.5 11.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">End-to-End Expertise</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                From wireframes to Web3, we cover everything: UX/UI design, responsive web dev, mobile apps, and blockchain integration.
              </p>
            </div>

            {/* Agile, Fast, Reliable */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#5E691E]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7.5L12 3L3 7.5L12 12L21 7.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 16.5L12 21L21 16.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12L12 16.5L21 12" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Agile, Fast, Reliable</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                Startups and founders love us because we move fast without breaking things. You get weekly updates and pixel-perfect deliveries.
              </p>
            </div>

            {/* Built for Gen Z Brands */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#5E691E]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3.5L3 8.5L12 13.5L21 8.5L12 3.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 13.5L12 18.5L21 13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Built for Gen Z Brands</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                We speak clean UI, bold visuals, and modern flows. Perfect for brands targeting digital-native users.
              </p>
            </div>

            {/* Modular & Scalable */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#1E3569]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.5L21 16.5V6.5L12 11.5V21.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21.5L3 16.5V6.5L12 11.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3.5L3 8.5L12 13.5L21 8.5L12 3.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Modular & Scalable</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                Everything we build is future-proof. Want to add features later or scale to millions? We've got you covered.
              </p>
            </div>

            {/* Blockchain-Ready */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#691E5E]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 16.5V8.5C20.5 7.96957 20.2893 7.46086 19.9142 7.08579C19.5391 6.71071 19.0304 6.5 18.5 6.5H5.5C4.96957 6.5 4.46086 6.71071 4.08579 7.08579C3.71071 7.46086 3.5 7.96957 3.5 8.5V16.5C3.5 17.0304 3.71071 17.5391 4.08579 17.9142C4.46086 18.2893 4.96957 18.5 5.5 18.5H18.5C19.0304 18.5 19.5391 18.2893 19.9142 17.9142C20.2893 17.5391 20.5 17.0304 20.5 16.5Z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12.5H16.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 15.5H13.5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5 9.5H15.51" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 9.5H12.51" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 9.5H9.51" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Blockchain-Ready</h3>
              <p className="text-[#94A3B8] text-base max-w-[280px]">
                We build smart contracts, dApps, and token-based systems with seamless wallet integration — you dream, we deploy.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-20">The Service We Provide For You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Web Design Service */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18h10M8 6h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#00FF85] font-semibold text-xl mb-2">Web Design</h3>
                <p className="text-white/80 text-base">Crafting websites that convert and grow your business</p>
              </div>

              {/* App Design Service */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18V6M8.5 8.5h7M8.5 15.5h7M10 20h4M9 3h6" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#00FF85] font-semibold text-xl mb-2">App Design</h3>
                <p className="text-white/80 text-base">Beautifully designed apps that your users will love to use</p>
              </div>

              {/* UI & UX Service */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#00FF85] font-semibold text-xl mb-2">UI&UX</h3>
                <p className="text-white/80 text-base">Get a best UI&UX for website mobile app</p>
              </div>

              {/* Blockchain Service */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-[56px] h-[56px] mb-6 bg-[#00FF85]/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00FF85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#00FF85] font-semibold text-xl mb-2">Blockchain</h3>
                <p className="text-white/80 text-base">Write and deploy smart contracts & Dapps</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-20 max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our Awesome Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Mobile App */}
            <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/portfolio/mobile-app.png"
                  alt="Mobile App Portfolio"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Mobile App Design</span>
                </div>
              </div>
            </div>

            {/* Cruise Search */}
            <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden md:translate-y-12 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/portfolio/cruise-search.png"
                  alt="Cruise Search Website"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Cruise Search Platform</span>
                </div>
              </div>
            </div>

            {/* Luxury Experience */}
            <div className="group relative bg-[#0F1923] rounded-2xl overflow-hidden md:translate-y-24 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/portfolio/luxury-experience.png"
                  alt="Luxury Experience Website"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Luxury Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 max-w-6xl mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-16 relative">
            <motion.button
              className="absolute left-0 md:left-10 text-[#00e389] hover:text-[#00e389]/80 transition-colors"
              onClick={handlePrev}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={36} />
            </motion.button>

            <motion.h2
              className={`${fontSans.className} text-3xl md:text-5xl font-bold text-center`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What Our Clients Say About Us
            </motion.h2>

            <motion.button
              className="absolute right-0 md:right-10 text-[#00e389] hover:text-[#00e389]/80 transition-colors"
              onClick={handleNext}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={36} />
            </motion.button>
          </div>

          {/* Testimonial cards */}
          <div className="relative h-[500px] w-full">
            <AnimatePresence initial={false} custom={direction}>
              {visibleIndices.map((index, i) => (
                <TestimonialCard
                  key={`${testimonials[index].id}-${i}`}
                  testimonial={testimonials[index]}
                  position={i}
                  direction={direction}
                  isActive={i === 1}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  visibleIndices.includes(index) ? "bg-[#00e389] scale-100" : "bg-white/30 scale-75"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Collaboration Section */}
        <section id="contact" className="py-12 md:py-20 max-w-6xl mx-auto px-4">
          <div className="border border-gray-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - Illustration */}
              <div className="flex items-center justify-center p-8">
                <Image
                  src="/collab/collaboration-illustration.png"
                  alt="Let's Collaborate"
                  width={700}
                  height={700}
                  className="object-contain"
                />
              </div>

              {/* Right side - Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      <AIChatBot />
    </div>
  )
}
