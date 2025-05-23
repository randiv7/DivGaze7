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
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 opacity-0 bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent"
        >
          Why Choose Divgaze?
        </h2>
        <p 
          ref={descriptionRef}
          className="text-soft-blue-gray mx-auto opacity-0 text-xl md:text-2xl leading-relaxed"
        >
          We don't just build digital solutions – we craft experiences that transform businesses 
          and connect brands with their audiences in meaningful ways. Here's why forward-thinking 
          companies choose Divgaze as their digital solution partner.
        </p>
      </div>
    </section>
  );
};

export default WhyDivgazeSection;