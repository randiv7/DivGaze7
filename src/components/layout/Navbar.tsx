import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only run scroll spy on home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      } else {
        // On other pages, clear active section
        setActiveSection('');
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initialize scroll state when location changes
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Haptic feedback function
  const triggerHaptic = () => {
    // Standard vibration API
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // 50ms light vibration
    }
  };

  // Enhanced toggle with haptic feedback
  const toggleSidebar = () => {
    triggerHaptic();
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar function with haptic feedback
  const closeSidebar = () => {
    triggerHaptic();
    setSidebarOpen(false);
  };

  // Handle navigation with haptic feedback
  const handleNavigation = (sectionId: string) => {
    triggerHaptic();
    scrollToSection(sectionId);
    setSidebarOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setActiveSection(sectionId);
      }
    } else {
      // We're on another page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { name: "Home", id: "home", icon: "→" },
    { name: "Services", id: "services", icon: "→" },
    { name: "About", id: "about", icon: "→" },
    { name: "Contact", id: "contact", icon: "→" },
  ];

  const isActiveLink = (id: string) => {
    // Only show active state on home page
    return location.pathname === '/' && activeSection === id;
  };

  const handleSocialClick = (platform: string) => {
    triggerHaptic();
    // Add your actual social media URLs here
    console.log(`${platform} clicked`);
  };

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-deep-navy-blue/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center relative"
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

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden relative min-h-[48px] min-w-[48px] z-50"
            aria-label="Toggle menu"
          >
            <Menu className="text-neon-blue h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
              sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeSidebar}
          />
          
          {/* Sidebar */}
          <div 
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-deep-navy-blue/95 backdrop-blur-xl border-l border-neon-blue/20 shadow-2xl transform transition-transform duration-300 ease-out z-50 ${
              sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              boxShadow: '0 0 50px rgba(0, 255, 255, 0.1)',
            }}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-neon-blue/20">
              <span className="text-xl font-bold text-gradient">
                DivGaze
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeSidebar();
                }}
                className="min-h-[48px] min-w-[48px] rounded-full hover:bg-neon-blue/10 bg-transparent border-none p-2 flex items-center justify-center transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-neon-blue" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-6 py-8 overflow-y-auto">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.id)}
                    className={`
                      w-full text-left px-4 py-4 text-lg font-medium rounded-lg
                      transition-all duration-200 min-h-[56px] flex items-center
                      relative group touch-manipulation
                      ${isActiveLink(link.id) 
                        ? "text-neon-blue bg-neon-blue/10 border-l-4 border-neon-blue" 
                        : "text-white hover:text-neon-blue hover:bg-neon-blue/5"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="flex items-center justify-between w-full">
                      <span className="relative">
                        {link.name}
                      </span>
                      <ArrowRight className={`h-5 w-5 transition-all duration-200 ${
                        isActiveLink(link.id) ? 'text-neon-blue' : 'text-soft-blue-gray group-hover:text-neon-blue group-hover:translate-x-1'
                      }`} />
                    </span>
                    
                    {/* Touch feedback */}
                    <div className="absolute inset-0 bg-neon-blue/10 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                  </button>
                ))}
                
                {/* AI Services Link */}
                <Link
                  to="/why-ai"
                  onClick={() => {
                    triggerHaptic();
                    setSidebarOpen(false);
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-medium rounded-lg
                    transition-all duration-200 min-h-[56px] flex items-center
                    relative group touch-manipulation text-white hover:text-electric-violet hover:bg-electric-violet/5"
                >
                  <span className="flex items-center justify-between w-full">
                    <span>AI Services</span>
                    <ArrowRight className="h-5 w-5 text-soft-blue-gray group-hover:text-electric-violet group-hover:translate-x-1 transition-all duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-electric-violet/10 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                </Link>
              </nav>
            </div>

            {/* Safe area padding for devices with notches */}
            <div className="h-[env(safe-area-inset-bottom)]" />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;