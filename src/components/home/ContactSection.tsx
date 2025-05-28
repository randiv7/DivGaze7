import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-grid-purple/20 py-20 pt-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-soft-blue-gray max-w-2xl mx-auto mb-12">
          Ready to transform your vision into reality? Let's collaborate to create innovative digital solutions that elevate your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Email */}
          <div className="bg-grid-purple/30 p-6 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <Mail className="h-8 w-8 text-neon-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-soft-blue-gray text-sm mb-3">For project inquiries</p>
            <a href="mailto:projects@divgaze.com" className="text-neon-blue hover:text-electric-violet transition-colors">
              projects@divgaze.com
            </a>
          </div>
          
          {/* Chat */}
          <div className="bg-grid-purple/30 p-6 rounded-lg border border-electric-violet/10 hover:border-electric-violet/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <MessageCircle className="h-8 w-8 text-electric-violet mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-soft-blue-gray text-sm mb-3">Instant support available</p>
            <p className="text-electric-violet">Use our chatbot below</p>
          </div>
          
          {/* Phone */}
          <div className="bg-grid-purple/30 p-6 rounded-lg border border-cyber-pink/10 hover:border-cyber-pink/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <Phone className="h-8 w-8 text-cyber-pink mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-soft-blue-gray text-sm mb-3">Speak with our team</p>
            <a href="tel:+1234567890" className="text-cyber-pink hover:text-electric-violet transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <Button 
          onClick={() => {
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          size="lg" 
          variant="outline" 
          className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group"
        >
          <span className="flex items-center gap-2">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;