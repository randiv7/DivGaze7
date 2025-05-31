import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CyberFishTank from "./CyberFishTank";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              titleRef.current.classList.add("animate-fade-in");
            } else if (entry.target === ctaRef.current) {
              setTimeout(() => {
                ctaRef.current?.classList.add("animate-fade-in");
              }, 600);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Cyber Fish Tank Animation */}
      <CyberFishTank />

      {/* Background animation - mobile optimized */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-blue/5 to-transparent opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-electric-violet/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-10 opacity-0 transition-opacity duration-700"
          style={{ 
            textShadow: "0 0 40px rgba(0, 255, 255, 0.4)",
            lineHeight: "1.1" 
          }}
        >
          {/* Mobile optimized gradient text */}
          <span className="bg-gradient-to-r from-cyber-pink to-neon-blue text-transparent bg-clip-text block">
            Beyond boundaries
          </span>
        </h1>
        
        <div 
          ref={ctaRef}
          className="flex justify-center opacity-0 transition-opacity duration-700"
        >
        
        </div>
      </div>

      {/* Mobile optimized scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-soft-blue-gray mb-2">Scroll</span>
        <div className="h-6 md:h-8 w-0.5 bg-neon-blue/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;