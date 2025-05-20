import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-deep-navy-blue/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">
            DivGaze
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        {!isMobile && (
          <>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-neon-blue relative group ${
                      isActiveLink(link.path) ? "text-neon-blue" : ""
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-neon-blue rounded-full transition-transform duration-300 origin-left ${
                      isActiveLink(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group">
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
                </Link>
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
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-medium transition-colors relative ${
                  isActiveLink(link.path) ? "text-neon-blue" : "hover:text-neon-blue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {isActiveLink(link.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-neon-blue rounded-full" />
                )}
              </Link>
            ))}
            <Button asChild variant="outline" className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10 group">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;