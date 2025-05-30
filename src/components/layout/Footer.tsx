import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-deep-navy-blue border-t border-grid-purple/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">
                Divgaze
              </span>
            </div>
            <p className="text-soft-blue-gray max-w-md mb-4">
              "We don't build, we create." Delivering cutting-edge digital solutions through 
              software development, AI, design, and strategy.
            </p>
            <div className="flex gap-5">
              <img 
                src="/assets/sl.png" 
                alt="Sri Lanka" 
                className="w-18 h-16 object-cover rounded shadow-sm hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="/assets/aus.png" 
                alt="Australia" 
                className="w-18 h-16 object-cover rounded shadow-sm hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-neon-blue">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-soft-blue-gray hover:text-neon-blue transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-soft-blue-gray hover:text-neon-blue transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-soft-blue-gray hover:text-neon-blue transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-electric-violet">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-soft-blue-gray hover:text-electric-violet transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-soft-blue-gray hover:text-electric-violet transition-colors">Terms of Service</a></li>
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