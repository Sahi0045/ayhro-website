import Link from 'next/link'
import Image from 'next/image'

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="hover:scale-110 transition-transform"
  >
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
      stroke="#00FF85"
      strokeWidth="1.5"
    />
    <path
      d="M17.5 6.51L17.51 6.49889"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="hover:scale-110 transition-transform"
  >
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke="#00FF85"
      strokeWidth="1.5"
    />
    <path
      d="M7 17V13.5V10"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7.01L7.01 6.99889"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="hover:scale-110 transition-transform"
  >
    <path
      d="M21 11.5C21 16.75 16.75 21 11.5 21C9.59001 21 7.82001 20.4 6.37001 19.38L3 21L4.62001 17.63C3.60001 16.18 3 14.41 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21.5 7.25 21.5 12.5"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 14.75L11.75 16L9.5 11.75L11.75 8.75L14.75 10.25C15.75 10.75 16.25 11.75 15.75 12.75L15.25 13.75C14.75 14.75 13.75 15.25 12.75 14.75"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0A1621] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/images/logo.png"
              alt="Ayhro Logo"
              width={50}
              height={50}
            />
            <span className="text-[#00FF85] ml-2 text-lg">ayhro</span>
            <span className="text-gray-400 ml-4 text-sm">© Copyright 2025, All right reserved</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/privacy" className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm">
              Terms
            </Link>
            <div className="flex items-center gap-2">
              <Link 
                href="https://wa.me/918121716969" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm flex items-center gap-2"
              >
                Get in Touch
                <WhatsAppIcon />
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="https://www.linkedin.com/company/ayhro" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <LinkedInIcon />
              </Link>
              <Link 
                href="https://www.instagram.com/ayhro" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 