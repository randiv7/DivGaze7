import React, { useEffect, useRef } from "react";
import DivfishOnly from "./DivfishOnly";

const WhyDivgazeSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Divfish Only Animation */}
      <DivfishOnly />

      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 opacity-0 bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent"
          style={{ marginTop: '-8rem' }}
        >
          Why Choose Divgaze?
        </h2>
        
        <div 
          ref={descriptionRef}
          className="relative inline-block p-12 md:p-16 rounded-3xl backdrop-blur-sm transition-shadow duration-700 opacity-0 w-full max-w-5xl"
          style={{
            background: 'linear-gradient(135deg, rgba(40, 43, 72, 0.4) 0%, rgba(10, 15, 44, 0.6) 100%)',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
          }}
        >
          <div className="text-soft-blue-gray text-base md:text-lg leading-relaxed text-left space-y-6">
            <p className="transition-all duration-300 hover:text-neon-blue hover:scale-105 cursor-pointer">
              We don't just deliver projects — we craft digital experiences driven by purpose, emotion, and imagination. We believe great work begins by asking better questions, challenging assumptions, and creating with clear intent.
            </p>
            
            <p className="transition-all duration-300 hover:text-neon-blue hover:scale-105 cursor-pointer">
              We're not interested in building just another product. We push boundaries — both creatively and technically — to build work that's meaningful, lasting, and made for the future. Above all, we're deeply passionate about what we do.
            </p>
            
            <p className="transition-all duration-300 hover:text-neon-blue hover:scale-105 cursor-pointer">
              We blend intuition with research, creativity with data, and storytelling with code — because the best ideas live where art meets logic.
            </p>
            
            <p className="transition-all duration-300 hover:text-neon-blue hover:scale-105 cursor-pointer">
              It's how we think. It's how we work. And it's why those who work with Divgaze return — not just for what we create, but how we create it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDivgazeSection;