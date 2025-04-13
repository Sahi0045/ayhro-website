"use client"

import { useEffect, useRef } from "react"

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Get canvas element
    const canvas = canvasRef.current
    if (!canvas) return

    // Get rendering context
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Define Particle class outside to avoid TypeScript errors
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 2.5 + 1
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.color = "#00FF85"
      }

      // Update particle position
      update(canvasWidth: number, canvasHeight: number) {
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

      // Draw particle
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
      // Reinitialize particles when canvas is resized
      init()
    }

    // Initialize canvas size
    resizeCanvas()
    
    // Add resize event listener
    window.addEventListener("resize", resizeCanvas)

    // Particle properties
    const particlesArray: Particle[] = []
    
    // Create particles
    function init() {
      if (!canvas) return;
      
      particlesArray.length = 0
      const numberOfParticles = Math.min(150, Math.floor((canvas.width * canvas.height) / 7000))
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height))
      }
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return;
      
      const maxDistance = 180
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance)
            ctx.strokeStyle = `rgba(0, 255, 133, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return requestAnimationFrame(animate);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height)
        particlesArray[i].draw(ctx)
      }
      
      // Connect particles
      connect()
      
      // Continue animation
      requestAnimationFrame(animate)
    }

    // Initialize particles
    init()
    
    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}