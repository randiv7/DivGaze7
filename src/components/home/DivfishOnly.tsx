// src/components/home/DivfishOnly.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Particle } from './fish/types';
import { DivFish } from './divfish/types';
import { createDivFish, updateDivFish } from './divfish/controller';
import { drawDivFish } from './divfish/renderer';
import { drawWaterTexture, drawParticles } from './fish/renderer';
import { createBubble } from './fish/controller';

// Bubble release interval (8 seconds = 8000ms)
const BUBBLE_RELEASE_INTERVAL = 8000;

const DivfishOnly: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  
  // References to maintain state across renders
  const divfishRef = useRef<DivFish | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastBubbleTimeRef = useRef<number>(0);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Main animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match hero section proportions
    canvas.width = windowSize.width;
    canvas.height = Math.min(windowSize.height * 0.7, 600);
    
    // Initialize divfish
    divfishRef.current = createDivFish(canvas.width, canvas.height);
    
    // Initialize particles
    particlesRef.current = [];
    
    // Reset bubble timer
    lastBubbleTimeRef.current = Date.now();
    
    // Animation timing
    let lastTime = 0;
    
    // Main animation loop
    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animations at any frame rate
      const deltaTime = lastTime ? timestamp - lastTime : 0;
      lastTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw tank background
      ctx.fillStyle = '#0A0F2C';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw water texture effects
      drawWaterTexture(ctx, canvas.width, canvas.height);
      
      // Divfish bubble release every 8 seconds
      const currentTime = Date.now();
      if (divfishRef.current && currentTime - lastBubbleTimeRef.current > BUBBLE_RELEASE_INTERVAL) {
        // Release 6 bubbles from divfish position
        for (let i = 0; i < 6; i++) {
          particlesRef.current.push(createBubble(
            divfishRef.current.x,
            divfishRef.current.y,
            canvas.width,
            canvas.height
          ));
        }
        lastBubbleTimeRef.current = currentTime;
      }
      
      // Update and filter out dead particles
      particlesRef.current = particlesRef.current
        .filter(particle => {
          // Update particle position based on type
          if (particle.type === 'bubble') {
            // Bubbles float upward
            particle.y -= particle.speed * (deltaTime / 16);
            particle.x += Math.sin(timestamp / 800 + particle.x) * 0.3; // Slight wobble
          }
          
          particle.lifetime--;
          particle.pulse = (Math.sin(timestamp / 500 * particle.pulseSpeed) + 1) / 2; // For glow pulsing
          
          // Remove particles that are out of bounds or expired
          return (
            particle.y > -10 && 
            particle.y < canvas.height + 10 &&
            particle.x > -10 && 
            particle.x < canvas.width + 10 &&
            particle.lifetime > 0
          );
        });
      
      // Update and draw divfish
      if (divfishRef.current) {
        updateDivFish(divfishRef.current, canvas.width, canvas.height, deltaTime);
        drawDivFish(ctx, divfishRef.current);
      }
      
      // Draw particles
      drawParticles(ctx, particlesRef.current);
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [windowSize]);
  
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default DivfishOnly;