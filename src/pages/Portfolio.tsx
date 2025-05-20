
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";

const Portfolio: React.FC = () => {
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
          Our Portfolio
        </h1>
        
        <div ref={contentRef} className="opacity-0">
          <p className="text-muted-foreground mb-8">
            Coming soon: Portfolio page with project showcase and case studies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div 
                key={i} 
                className="aspect-video bg-slate-blue-gray/30 rounded-lg overflow-hidden relative hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Project {i}</p>
                </div>
                <div className="absolute inset-0 bg-electric-blue/0 group-hover:bg-electric-blue/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
