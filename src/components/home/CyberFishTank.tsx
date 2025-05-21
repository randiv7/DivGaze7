// src/components/home/CyberFishTank.tsx
import React, { useEffect, useRef, useState } from 'react';
import { CursorState, Fish, Particle } from './fish/types';
import { drawFish, drawWaterTexture, drawParticles } from './fish/renderer';
import { initFishes, updateFish, createParticle } from './fish/controller';

// Number of fish to show in the tank
const FISH_COUNT = 4;
// Number of initial particles
const INITIAL_PARTICLES = 50;
// Cyber pink color
const CYBER_PINK = '#FF2EF5';

const CyberFishTank: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  
  // References to maintain state across renders
  const isMobileRef = useRef(typeof window !== 'undefined' && window.innerWidth < 768);
  const cursorRef = useRef<CursorState>({ 
    x: null, 
    y: null, 
    lastMoved: 0,
    isActive: false
  });
  const fishesRef = useRef<Fish[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      isMobileRef.current = window.innerWidth < 768;
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
    
    // Set canvas dimensions
    canvas.width = windowSize.width;
    canvas.height = Math.min(windowSize.height * 0.7, 600);
    
    // Initialize fish on first render or when window resizes
    fishesRef.current = initFishes(FISH_COUNT, canvas.width, canvas.height);
    
    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < INITIAL_PARTICLES; i++) {
      // Create initial floating particles
      particlesRef.current.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'floater',
        CYBER_PINK,
        canvas.width,
        canvas.height
      ));
    }
    
    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        lastMoved: Date.now(),
        isActive: true
      };
    };
    
    const handleMouseLeave = () => {
      cursorRef.current.isActive = false;
    };
    
    const handleMouseEnter = () => {
      if (cursorRef.current.x !== null) {
        cursorRef.current.isActive = true;
      }
    };
    
    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    
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
      
      // Create new floating particles occasionally
      if (Math.random() < 0.07) {
        particlesRef.current.push(createParticle(
          Math.random() * canvas.width,
          canvas.height - 10,
          'floater',
          CYBER_PINK,
          canvas.width,
          canvas.height
        ));
      }
      
      // Update and filter out dead particles
      particlesRef.current = particlesRef.current
        .filter(particle => {
          // Update particle position based on type
          particle.y -= particle.speed * (deltaTime / 16);
          particle.x += Math.sin(timestamp / 1000 + particle.x) * 0.2;
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
      
      // Update and draw each fish
      fishesRef.current.forEach(fish => {
        updateFish(fish, canvas.width, canvas.height, cursorRef.current, isMobileRef.current, deltaTime);
        drawFish(ctx, fish);
      });
      
      // Draw particles
      drawParticles(ctx, particlesRef.current);
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [windowSize]);
  
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto" style={{ zIndex: 5 }}>
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

export default CyberFishTank;