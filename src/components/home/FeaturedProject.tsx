
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProject: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current || entry.target === descriptionRef.current) {
              entry.target.classList.add("animate-fade-in");
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("animate-slide-in-left");
            } else if (entry.target === mediaRef.current) {
              entry.target.classList.add("animate-slide-in-right");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (mediaRef.current) observer.observe(mediaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-grid-purple/20 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Featured Project
          </h2>
          <p 
            ref={descriptionRef}
            className="text-soft-blue-gray max-w-2xl mx-auto opacity-0"
          >
            Meet our revolutionary AI influencer, changing the landscape of digital marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            ref={contentRef}
            className="order-2 md:order-1 opacity-0"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent">Raini - AI Influencer</h3>
            <p className="text-soft-blue-gray mb-4">
              Raini is our AI-powered digital influencer who creates authentic connections with audiences
              across social media platforms. With her unique personality and engaging content, she helps 
              brands reach new demographics with unprecedented engagement rates.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 group">
                <div className="h-1 w-1 bg-neon-blue rounded-full group-hover:w-2 transition-all duration-300"></div>
                <p className="group-hover:text-neon-blue transition-colors duration-300">Over 1M+ followers across platforms</p>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="h-1 w-1 bg-neon-blue rounded-full group-hover:w-2 transition-all duration-300"></div>
                <p className="group-hover:text-neon-blue transition-colors duration-300">Custom brand partnerships</p>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="h-1 w-1 bg-neon-blue rounded-full group-hover:w-2 transition-all duration-300"></div>
                <p className="group-hover:text-neon-blue transition-colors duration-300">Multilingual content creation</p>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="h-1 w-1 bg-neon-blue rounded-full group-hover:w-2 transition-all duration-300"></div>
                <p className="group-hover:text-neon-blue transition-colors duration-300">Real-time market trend adaptation</p>
              </div>
            </div>
            
            <Button asChild className="group glow-on-hover bg-neon-blue hover:bg-cyber-pink">
              <Link to="/portfolio" className="flex items-center gap-2">
                View Project Details
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div 
            ref={mediaRef}
            className="order-1 md:order-2 relative opacity-0"
          >
            {/* This would be replaced with actual content from Raini */}
            <div className="aspect-video bg-grid-purple/40 rounded-lg overflow-hidden relative border border-neon-blue/20 hover:border-neon-blue/50 transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-soft-blue-gray">TikTok Video Embed</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="aspect-square bg-grid-purple/40 rounded-lg border border-neon-blue/20 hover:border-neon-blue/50 transition-colors duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"></div>
              <div className="aspect-square bg-grid-purple/40 rounded-lg border border-electric-violet/20 hover:border-electric-violet/50 transition-colors duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
