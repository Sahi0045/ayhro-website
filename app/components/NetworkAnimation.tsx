"use client"

import { useEffect, useRef, useState } from "react"

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Track scroll position to determine visibility
    const handleScroll = () => {
      // Get the position of the "Why Ayhro Is The Best Choice?" section
      const bestChoiceSection = document.getElementById('best-choice-section')
      if (bestChoiceSection) {
        const sectionTop = bestChoiceSection.offsetTop
        const scrollPosition = window.scrollY
        
        // Hide animation when scrolled past the section
        setIsVisible(scrollPosition < sectionTop)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      offsetX: number
      offsetY: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.originalX = this.x
        this.originalY = this.y
        this.size = Math.random() * 1.2 + 0.3 // Even smaller particles
        this.speedX = (Math.random() - 0.5) * 0.2 // Even slower speed
        this.speedY = (Math.random() - 0.5) * 0.2
        this.color = "rgba(0, 255, 133, 0.7)" // More transparent particles
        this.offsetX = Math.random() * 80 - 40 // Reduced offset for less instability
        this.offsetY = Math.random() * 80 - 40
      }

      update(canvasWidth: number, canvasHeight: number, scrollX: number, scrollY: number) {
        // Add some instability to the movement
        this.offsetX += (Math.random() - 0.5) * 0.3 // Reduced instability
        this.offsetY += (Math.random() - 0.5) * 0.3
        
        // Limit the offset to prevent extreme movement
        this.offsetX = Math.max(Math.min(this.offsetX, 80), -80)
        this.offsetY = Math.max(Math.min(this.offsetY, 80), -80)
        
        // Update position with scroll and offset
        this.x = this.originalX + scrollX + this.offsetX
        this.y = this.originalY + scrollY + this.offsetY
        
        // Add slight random movement
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges with a small buffer
        if (this.x > canvasWidth || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
      }
    }

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    function init() {
      if (!canvas) return
      
      particlesRef.current = []
      const numberOfParticles = Math.min(120, Math.floor((canvas.width * canvas.height) / 10000)) // Even fewer particles
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle(canvas.width, canvas.height))
      }
    }

    function connect() {
      if (!ctx) return
      
      const maxDistance = 120 // Even shorter connection distance
      
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x
          const dy = particlesRef.current[a].y - particlesRef.current[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance)
            ctx.strokeStyle = `rgba(0, 255, 133, ${opacity * 0.4})` // Even more transparent
            ctx.lineWidth = 0.6 // Even thinner lines
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y)
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Only animate if visible
      if (isVisible) {
        // Get current scroll position
        const scrollX = window.scrollX * 0.05 // Further reduced scroll effect
        const scrollY = window.scrollY * 0.05
        
        for (let i = 0; i < particlesRef.current.length; i++) {
          particlesRef.current[i].update(canvas.width, canvas.height, scrollX, scrollY)
          particlesRef.current[i].draw(ctx)
        }
        
        connect()
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    init()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-10 pointer-events-none"
      style={{ 
        opacity: isVisible ? 0.4 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  )
}