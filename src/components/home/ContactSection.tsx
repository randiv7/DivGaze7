import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = (number: string, country: string) => {
    const message = encodeURIComponent(`Hello Divgaze! I'm interested in your services from ${country}.`);
    window.open(`https://wa.me/${number.replace(/\s+/g, '')}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Service Inquiry - Divgaze');
    const body = encodeURIComponent('Hello Divgaze,\n\nI am interested in your digital services. Please get in touch with me.\n\nBest regards,');
    window.open(`mailto:divgaze@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-grid-purple/20 py-20 pt-32 relative overflow-hidden">
      {/* Background elements - mobile optimized */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Contact Us</h2>
        <p className="text-soft-blue-gray max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-2">
          Ready to transform your vision into reality? Let's collaborate to create innovative digital solutions that elevate your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* WhatsApp Card */}
          <div className="bg-grid-purple/30 p-4 md:p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-green-500">WhatsApp</h3>
            <div className="space-y-2 md:space-y-3">
              <button
                onClick={() => handleWhatsAppClick('94707616554', 'Sri Lanka')}
                className="w-full bg-green-600/20 hover:bg-green-600/40 text-green-400 hover:text-green-300 transition-all duration-300 py-2.5 md:py-2 px-3 md:px-4 rounded-lg font-medium text-sm md:text-base min-h-[44px]"
              >
                🇱🇰 Chat Sri Lanka
              </button>
              <button
                onClick={() => handleWhatsAppClick('61408840996', 'Australia')}
                className="w-full bg-green-600/20 hover:bg-green-600/40 text-green-400 hover:text-green-300 transition-all duration-300 py-2.5 md:py-2 px-3 md:px-4 rounded-lg font-medium text-sm md:text-base min-h-[44px]"
              >
                🇦🇺 Chat Australia
              </button>
            </div>
            <p className="text-soft-blue-gray text-xs mt-2 md:mt-3">Click to chat directly</p>
          </div>
          
          {/* Email Card */}
          <div className="bg-grid-purple/30 p-4 md:p-6 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <Mail className="h-6 w-6 md:h-8 md:w-8 text-neon-blue mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-base md:text-lg font-semibold mb-2 text-neon-blue">Email</h3>
            <p className="text-soft-blue-gray text-xs md:text-sm mb-2 md:mb-3">Get in touch directly</p>
            <button
              onClick={handleEmailClick}
              className="text-neon-blue hover:text-electric-violet transition-colors font-medium text-sm md:text-base break-all md:break-normal"
            >
              divgaze@gmail.com
            </button>
          </div>
          
          {/* Social Media Card */}
          <div className="bg-grid-purple/30 p-4 md:p-6 rounded-lg border border-electric-violet/10 hover:border-electric-violet/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="p-2 bg-electric-violet/20 rounded-full">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-electric-violet" />
              </div>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-electric-violet">Follow Us</h3>
            <p className="text-soft-blue-gray text-xs md:text-sm mb-3 md:mb-4">Connect on social media</p>
            <div className="flex justify-center gap-2 md:gap-3">
              {/* Facebook */}
              <button 
                className="p-1.5 md:p-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-all duration-300 hover:scale-110 group/icon min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center"
                onClick={() => console.log('Facebook clicked')}
              >
                <Facebook className="h-3 w-3 md:h-4 md:w-4 text-blue-400 group-hover/icon:text-blue-300" />
              </button>
              
              {/* TikTok */}  
              <button 
                className="p-1.5 md:p-2 bg-gray-800/20 hover:bg-gray-800/40 rounded-full transition-all duration-300 hover:scale-110 group/icon min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center"
                onClick={() => console.log('TikTok clicked')}
              >
                <svg className="h-3 w-3 md:h-4 md:w-4 text-white group-hover/icon:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
              
              {/* Instagram */}
              <button 
                className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 rounded-full transition-all duration-300 hover:scale-110 group/icon min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center"
                onClick={() => console.log('Instagram clicked')}
              >
                <Instagram className="h-3 w-3 md:h-4 md:w-4 text-pink-400 group-hover/icon:text-pink-300" />
              </button>
              
              {/* LinkedIn */}
              <button 
                className="p-1.5 md:p-2 bg-blue-700/20 hover:bg-blue-700/40 rounded-full transition-all duration-300 hover:scale-110 group/icon min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="h-3 w-3 md:h-4 md:w-4 text-blue-400 group-hover/icon:text-blue-300" />
              </button>
              
              {/* YouTube */}
              <button 
                className="p-1.5 md:p-2 bg-red-600/20 hover:bg-red-600/40 rounded-full transition-all duration-300 hover:scale-110 group/icon min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center"
                onClick={() => console.log('YouTube clicked')}
              >
                <Youtube className="h-3 w-3 md:h-4 md:w-4 text-red-400 group-hover/icon:text-red-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;