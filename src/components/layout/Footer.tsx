
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-navy-blue border-t border-grid-purple/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">
                Divgaze
              </span>
            </Link>
            <p className="text-soft-blue-gray max-w-md mb-4">
              "We don't build, we create." Delivering cutting-edge digital solutions through 
              software development, AI, design, and strategy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-soft-blue-gray hover:text-neon-blue transition-colors transform hover:scale-110" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-soft-blue-gray hover:text-electric-violet transition-colors transform hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-soft-blue-gray hover:text-cyber-pink transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-soft-blue-gray hover:text-neon-lime transition-colors transform hover:scale-110" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-neon-blue">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-soft-blue-gray hover:text-neon-blue transition-colors">About</Link></li>
              <li><Link to="/services" className="text-soft-blue-gray hover:text-neon-blue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-soft-blue-gray hover:text-neon-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-soft-blue-gray hover:text-neon-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-electric-violet">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-soft-blue-gray hover:text-electric-violet transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-soft-blue-gray hover:text-electric-violet transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-grid-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft-blue-gray text-sm">
            &copy; {new Date().getFullYear()} Divgaze. All rights reserved.
          </p>
          <p className="text-soft-blue-gray text-sm mt-2 md:mt-0">
            Created with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
