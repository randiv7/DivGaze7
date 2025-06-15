// src/components/home/CyberAquariumSection.tsx
import React, { useEffect, useRef } from "react";
import CyberFishTank from "./CyberFishTank";

const CyberAquariumSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ backgroundColor: '#000b22' }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-electric-violet/10 rounded-full filter blur-3xl"></div>
      
      {/* Cyber Fish Tank Background */}
      <div className="absolute inset-0">
        <CyberFishTank />
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center">
          {/* Title */}
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold opacity-0 text-neon-blue drop-shadow-lg"
            style={{ 
              lineHeight: "1.1"
            }}
          >
            Dive Into Digital Innovation
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CyberAquariumSection;