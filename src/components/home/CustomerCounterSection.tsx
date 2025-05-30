import React, { useEffect, useRef, useState } from "react";

const CustomerCounterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const hasAnimatedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          console.log('Starting animation...');
          
          // Start animation immediately
          let currentCount = 0;
          
          intervalRef.current = setInterval(() => {
            currentCount++;
            console.log('Counting:', currentCount);
            setCount(currentCount);
            
            if (currentCount >= 50) {
              console.log('Reached 50, stopping...');
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
              
              // Show plus and particles
              setTimeout(() => {
                setShowPlus(true);
                setShowParticles(true);
                console.log('Showing plus and particles');
              }, 300);
            }
          }, 80); // 80ms per count = 4 seconds total
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // No dependencies - runs once

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      style={{ backgroundColor: '#000b22' }}
    >
      {/* Simple Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(0,255,255,0.03) 50%, transparent 51%)`
        }}
      />

      {/* Smooth Particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="particle-container">
            <div className="particle particle-1" />
            <div className="particle particle-2" />
            <div className="particle particle-3" />
            <div className="particle particle-4" />
            <div className="particle particle-5" />
            <div className="particle particle-6" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-soft-blue-gray text-lg">
            Building digital success stories across the globe
          </p>
        </div>

        {/* STABLE Counter Box */}
        <div className="text-center mb-16">
          <div 
            className="relative inline-block p-12 md:p-16 rounded-3xl backdrop-blur-sm transition-shadow duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(40, 43, 72, 0.4) 0%, rgba(10, 15, 44, 0.6) 100%)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              boxShadow: showPlus 
                ? '0 0 60px rgba(0, 255, 255, 0.4), 0 0 120px rgba(138, 43, 226, 0.2)' 
                : '0 0 30px rgba(0, 255, 255, 0.2)',
              width: '500px', // FIXED WIDTH
              height: 'auto'
            }}
          >
            <div className="relative z-10">
              {/* COMPLETELY FIXED NUMBER DISPLAY */}
              <div 
                style={{ 
                  fontSize: 'clamp(4rem, 12vw, 14rem)',
                  fontFamily: 'Courier New, monospace', // Monospace font
                  lineHeight: '1.1',
                  height: '1.2em', // FIXED HEIGHT
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* FIXED WIDTH CONTAINER */}
                <div 
                  style={{
                    width: '400px', // EXACT FIXED WIDTH
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  {/* NUMBER - FIXED WIDTH */}
                  <span 
                    className="bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))',
                      width: '250px', // FIXED WIDTH FOR NUMBERS
                      display: 'inline-block',
                      textAlign: 'center',
                      fontFamily: 'Courier New, monospace'
                    }}
                  >
                    {count}
                  </span>
                  
                  {/* PLUS SIGN - FIXED WIDTH */}
                  <span 
                    className="bg-gradient-to-r from-electric-violet to-neon-blue bg-clip-text text-transparent"
                    style={{
                      opacity: showPlus ? 1 : 0,
                      transform: showPlus ? 'scale(1)' : 'scale(0.3)',
                      transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      filter: showPlus ? 'drop-shadow(0 0 20px rgba(138, 43, 226, 0.8))' : 'none',
                      width: '150px', // FIXED WIDTH FOR PLUS
                      display: 'inline-block',
                      textAlign: 'center',
                      fontFamily: 'Courier New, monospace'
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
                  Satisfied Customers
                </h3>
                <p className="text-soft-blue-gray text-lg md:text-xl">
                  Around the World
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Debug */}
        
      </div>
    </section>
  );
};

export default CustomerCounterSection; 