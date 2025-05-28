import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Scroll spy functionality
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const isActiveLink = (id: string) => {
    return activeSection === id;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-deep-navy-blue/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center"
        >
          <span className="text-3xl font-bold text-gradient">
            DivGaze
          </span>
        </button>

        {/* Desktop Navigation - Centered */}
        {!isMobile && (
          <>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-colors hover:text-neon-blue relative group ${
                      isActiveLink(link.id) ? "text-neon-blue" : ""
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-neon-blue rounded-full transition-transform duration-300 origin-left ${
                      isActiveLink(link.id) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group"
              >
                Get a Quote
              </Button>
            </div>
          </>
        )}

        {/* Mobile Navigation Toggle */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="text-neon-blue" /> : <Menu className="text-neon-blue" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-deep-navy-blue/95 backdrop-blur-md z-40 pt-20 animate-fade-in">
          <div className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-xl font-medium transition-colors relative ${
                  isActiveLink(link.id) ? "text-neon-blue" : "hover:text-neon-blue"
                }`}
              >
                {link.name}
                {isActiveLink(link.id) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-neon-blue rounded-full" />
                )}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10 group"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;