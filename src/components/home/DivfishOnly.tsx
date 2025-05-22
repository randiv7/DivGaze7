// src/components/home/DivfishOnly.tsx
import React, { useEffect, useRef, useState } from 'react';
import { DivFish } from './divfish/types';
import { createDivFish, updateDivFish } from './divfish/controller';
import { drawDivFish } from './divfish/renderer';
import { drawWaterTexture } from './fish/renderer';

const DivfishOnly: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  
  // References to maintain state across renders
  const divfishRef = useRef<DivFish | null>(null);
  const animationRef = useRef<number | null>(null);
  
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
    
    // Set canvas dimensions
    canvas.width = windowSize.width;
    canvas.height = Math.min(windowSize.height * 0.7, 600);
    
    // Initialize divfish
    divfishRef.current = createDivFish(canvas.width, canvas.height);
    
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
      
      // Update and draw divfish
      if (divfishRef.current) {
        updateDivFish(divfishRef.current, canvas.width, canvas.height, deltaTime);
        drawDivFish(ctx, divfishRef.current);
      }
      
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

export default DivfishOnly;