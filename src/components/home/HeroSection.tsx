import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CyberFishTank from "./CyberFishTank";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              titleRef.current.classList.add("animate-fade-in");
            } else if (entry.target === subtitleRef.current) {
              setTimeout(() => {
                subtitleRef.current?.classList.add("animate-fade-in");
              }, 300);
            } else if (entry.target === ctaRef.current) {
              setTimeout(() => {
                ctaRef.current?.classList.add("animate-fade-in");
              }, 600);
            } else if (entry.target === decorationRef.current) {
              setTimeout(() => {
                decorationRef.current?.classList.add("animate-fade-in");
              }, 900);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (decorationRef.current) observer.observe(decorationRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Cyber Fish Tank Animation */}
      <CyberFishTank />

      {/* Background animation - still keeping this for additional effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-blue/5 to-transparent opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-violet/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-700"
          style={{ textShadow: "0 0 40px rgba(0, 255, 255, 0.4)" }}
        >
          <span className="bg-gradient-to-r from-pure-white to-neon-blue text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">
            We don't build,
          </span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue to-electric-violet text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">
            we create.
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-soft-blue-gray opacity-0 transition-opacity duration-700"
        >
          Delivering cutting-edge digital solutions through software development, 
          AI, design, and strategy that transforms your business.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 transition-opacity duration-700"
        >
          <Button asChild size="lg" className="bg-neon-blue hover:bg-cyber-pink text-white glow-on-hover group">
            <Link to="/contact" className="flex items-center gap-2">
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group">
            <Link to="/portfolio" className="flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div 
          ref={decorationRef} 
          className="absolute -bottom-10 left-0 right-0 opacity-0"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -top-20 -left-10 w-32 h-32 border border-neon-blue/20 rounded-full animate-float"></div>
            <div className="absolute -top-40 right-20 w-48 h-48 border border-electric-violet/20 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-0 right-0 w-24 h-24 border border-cyber-pink/20 rounded-full animate-float" style={{animationDelay: "1.5s"}}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-soft-blue-gray mb-2">Scroll</span>
        <div className="h-8 w-0.5 bg-neon-blue/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;