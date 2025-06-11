import React from "react";
import { useLocation } from "react-router-dom";
import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // We're on another page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:divgaze@gmail.com', '_self');
  };

  return (
    <footer className="bg-deep-navy-blue border-t border-grid-purple/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0"></div>
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          
          {/* Column 1: Company Branding */}
          <div className="space-y-4 md:space-y-4">
            <div className="inline-block">
              <span className="text-2xl md:text-2xl font-bold text-white">
                Divgaze
              </span>
            </div>
            <p className="text-soft-blue-gray text-base md:text-sm leading-relaxed">
              We Take Care of Your Digital Presence.
            </p>
            
            {/* Country flags */}
            <div className="flex gap-4">
              <img 
                src="/assets/sl.png" 
                alt="Sri Lanka Office" 
                className="w-12 h-10 md:w-12 md:h-10 object-cover rounded shadow-sm hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="/assets/aus.png" 
                alt="Australia Office" 
                className="w-12 h-10 md:w-12 md:h-10 object-cover rounded shadow-sm hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-5 md:space-y-4">
            <h3 className="font-semibold text-neon-blue text-lg md:text-base lg:text-lg">Contact</h3>
            
            {/* Sri Lanka Contact - NOT clickable */}
            <div className="space-y-3 md:space-y-2">
              <div className="flex items-center gap-2 text-soft-blue-gray text-base md:text-sm">
                <MapPin className="w-4 h-4 text-neon-blue flex-shrink-0" />
                <span className="text-neon-blue font-medium">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-soft-blue-gray text-base md:text-sm ml-6">
                <Phone className="w-4 h-4" />
                <span>+94 707 616 554</span>
              </div>
            </div>
            
            {/* Australia Contact - clickable */}
            <div className="space-y-3 md:space-y-2">
              <div className="flex items-center gap-2 text-soft-blue-gray text-base md:text-sm">
                <MapPin className="w-4 h-4 text-neon-blue flex-shrink-0" />
                <span className="text-neon-blue font-medium">Melbourne, Australia</span>
              </div>
              <button
                onClick={() => handlePhoneClick('+61408840996')}
                className="flex items-center gap-2 text-soft-blue-gray hover:text-neon-blue transition-colors text-base md:text-sm ml-6 min-h-[48px] md:min-h-0 py-1"
              >
                <Phone className="w-4 h-4" />
                +61 408 840 996
              </button>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-soft-blue-gray hover:text-neon-blue transition-colors text-base md:text-sm min-h-[48px] md:min-h-0 py-1 break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">divgaze@gmail.com</span>
              </button>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-5 md:space-y-4">
            <h3 className="font-semibold text-neon-blue text-lg md:text-base lg:text-lg">Follow Us</h3>
            
            {/* Mobile: Horizontal layout, Desktop: 2x2 grid */}
            <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 md:gap-3 md:max-w-32">
              {/* Facebook */}
              <button 
                onClick={() => handleSocialClick('https://www.facebook.com/profile.php?id=61577558630387')}
                className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              </button>
              
              {/* TikTok */}
              <button 
                onClick={() => handleSocialClick('http://www.tiktok.com/@divgaze')}
                className="w-12 h-12 bg-gray-800/20 hover:bg-gray-800/40 rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5 text-white group-hover:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
              
              {/* Instagram */}
              <button 
                onClick={() => handleSocialClick('https://www.instagram.com/divgaze/profilecard/?igsh=dmtsNDIxNzYzOW8x')}
                className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
              </button>
              
              {/* X (Twitter) */}
              <button 
                onClick={() => handleSocialClick('https://x.com/DivGaze')}
                className="w-12 h-12 bg-gray-900/20 hover:bg-gray-900/40 rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                aria-label="Follow us on X"
              >
                <svg className="w-5 h-5 text-white group-hover:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neon-blue text-base md:text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/privacy" 
                  className="text-soft-blue-gray hover:text-neon-blue transition-colors text-sm py-1 min-h-[44px] md:min-h-0 flex items-center"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-soft-blue-gray hover:text-neon-blue transition-colors text-sm py-1 min-h-[44px] md:min-h-0 flex items-center"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-grid-purple/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-soft-blue-gray text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Divgaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;