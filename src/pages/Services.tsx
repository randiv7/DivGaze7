
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";

const Services: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-16">
        <h1 
          ref={headingRef} 
          className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
        >
          Our Services
        </h1>
        
        <div ref={contentRef} className="opacity-0">
          <p className="text-muted-foreground mb-8">
            Coming soon: Detailed services page with categories and descriptions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className="p-6 bg-slate-blue-gray/30 rounded-lg border border-electric-blue/10 hover:border-electric-blue/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">Service Category {i}</h3>
                <p className="text-muted-foreground">Description coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
