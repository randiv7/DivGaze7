import React, { useEffect, useRef } from "react";
import { ArrowRight, Zap, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyDivgazeSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="text-center mb-12 relative z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
        >
          Why Choose Divgaze?
        </h2>
        <p 
          ref={descriptionRef}
          className="text-soft-blue-gray max-w-3xl mx-auto opacity-0 text-lg"
        >
          We don't just build digital solutions – we craft experiences that transform businesses 
          and connect brands with their audiences in meaningful ways. Here's why forward-thinking 
          companies choose Divgaze as their digital solution partner.
        </p>
      </div>
      
      <div 
        ref={contentRef} 
        className="opacity-0 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Innovation & Technology */}
          <div className="bg-grid-purple/20 p-8 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-neon-blue/20 rounded-lg mr-4 group-hover:bg-neon-blue/30 transition-colors">
                <Zap className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent">
                Cutting-Edge Innovation
              </h3>
            </div>
            <p className="text-soft-blue-gray mb-4">
              We stay ahead of the curve with the latest technologies, from AI and machine learning 
              to advanced web frameworks. Our team doesn't just follow trends – we create them.
            </p>
            <ul className="space-y-2 text-soft-blue-gray">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                AI-powered solutions and automation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                Modern development frameworks
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                Cloud-native architectures
              </li>
            </ul>
          </div>

          {/* Client-Centric Approach */}
          <div className="bg-grid-purple/20 p-8 rounded-lg border border-electric-violet/10 hover:border-electric-violet/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.2)] group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-electric-violet/20 rounded-lg mr-4 group-hover:bg-electric-violet/30 transition-colors">
                <Users className="h-6 w-6 text-electric-violet" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-electric-violet to-cyber-pink bg-clip-text text-transparent">
                Partnership, Not Just Service
              </h3>
            </div>
            <p className="text-soft-blue-gray mb-4">
              We believe in building long-term partnerships. Your success is our success, and we're 
              committed to understanding your unique challenges and goals.
            </p>
            <ul className="space-y-2 text-soft-blue-gray">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                Dedicated project managers
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                Transparent communication
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                Ongoing support and optimization
              </li>
            </ul>
          </div>

          {/* Proven Excellence */}
          <div className="bg-grid-purple/20 p-8 rounded-lg border border-cyber-pink/10 hover:border-cyber-pink/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,46,245,0.2)] group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyber-pink/20 rounded-lg mr-4 group-hover:bg-cyber-pink/30 transition-colors">
                <Award className="h-6 w-6 text-cyber-pink" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyber-pink to-neon-blue bg-clip-text text-transparent">
                Proven Track Record
              </h3>
            </div>
            <p className="text-soft-blue-gray mb-4">
              Our portfolio speaks for itself. We've delivered exceptional results for startups 
              to enterprise clients, consistently exceeding expectations and driving growth.
            </p>
            <ul className="space-y-2 text-soft-blue-gray">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-pink rounded-full mr-3"></div>
                98% client satisfaction rate
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-pink rounded-full mr-3"></div>
                On-time project delivery
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyber-pink rounded-full mr-3"></div>
                Measurable business results
              </li>
            </ul>
          </div>

          {/* Global Perspective */}
          <div className="bg-grid-purple/20 p-8 rounded-lg border border-neon-lime/10 hover:border-neon-lime/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-neon-lime/20 rounded-lg mr-4 group-hover:bg-neon-lime/30 transition-colors">
                <Globe className="h-6 w-6 text-neon-lime" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-neon-lime to-neon-blue bg-clip-text text-transparent">
                Global Vision, Local Understanding
              </h3>
            </div>
            <p className="text-soft-blue-gray mb-4">
              Based in Sri Lanka with a global mindset, we combine international best practices 
              with deep local market understanding to deliver solutions that work everywhere.
            </p>
            <ul className="space-y-2 text-soft-blue-gray">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-lime rounded-full mr-3"></div>
                Multi-cultural team expertise
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-lime rounded-full mr-3"></div>
                24/7 global support coverage
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-lime rounded-full mr-3"></div>
                Cross-border market insights
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-grid-purple/30 to-grid-purple/10 p-8 rounded-lg border border-neon-blue/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-soft-blue-gray mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Divgaze to bring their digital visions to life. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-electric-violet text-electric-violet hover:bg-electric-violet/10 group">
              <Link to="/portfolio" className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDivgazeSection;