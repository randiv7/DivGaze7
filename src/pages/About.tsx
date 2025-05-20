
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";

const About: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-16">
        <h1 
          ref={headingRef} 
          className="text-3xl md:text-4xl font-bold mb-6 opacity-0 bg-gradient-to-r from-pure-white to-neon-blue bg-clip-text text-transparent"
        >
          About Divgaze
        </h1>
        
        <div ref={contentRef} className="opacity-0 space-y-6 text-soft-blue-gray mb-12">
          <p>
            Divgaze was founded on a simple yet powerful idea: to create digital experiences that transcend
            the ordinary and embrace the extraordinary. Our journey began with a passionate team of 
            developers, designers, and strategists who share a common vision - to help businesses 
            thrive in the digital landscape through innovative solutions.
          </p>
          
          <p>
            Today, we continue to push boundaries and challenge conventions, leveraging cutting-edge
            technologies like AI, machine learning, and immersive design to craft digital experiences
            that don't just build businesses, but create lasting impressions.
          </p>
        </div>
        
        <div ref={imageRef} className="opacity-0 mb-16">
          <div className="w-full h-64 md:h-80 bg-grid-purple/30 rounded-lg flex items-center justify-center border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-electric-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-soft-blue-gray relative z-10 group-hover:text-neon-blue transition-colors duration-300">Team photo placeholder</p>
          </div>
        </div>
        
        <div ref={valuesRef} className="opacity-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-grid-purple/20 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              <h3 className="text-xl font-semibold mb-3 text-neon-blue">Innovation</h3>
              <p className="text-soft-blue-gray">We constantly explore new technologies and methodologies to stay at the cutting edge of digital solutions.</p>
            </div>
            
            <div className="p-6 bg-grid-purple/20 rounded-lg border border-electric-violet/10 hover:border-electric-violet/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)]">
              <h3 className="text-xl font-semibold mb-3 text-electric-violet">Creativity</h3>
              <p className="text-soft-blue-gray">We approach every project with fresh eyes and creative thinking to deliver unique, impactful solutions.</p>
            </div>
            
            <div className="p-6 bg-grid-purple/20 rounded-lg border border-cyber-pink/10 hover:border-cyber-pink/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,46,245,0.2)]">
              <h3 className="text-xl font-semibold mb-3 text-cyber-pink">Excellence</h3>
              <p className="text-soft-blue-gray">We are committed to delivering excellence in every aspect of our work, from code quality to user experience.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
