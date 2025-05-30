import React from "react";

interface LocationRippleProps {
  x: number; // X position as percentage (0-100)
  y: number; // Y position as percentage (0-100)
  city: string; // City name for debugging
  delay?: number; // Animation delay in milliseconds
}

const LocationRipple: React.FC<LocationRippleProps> = ({ x, y, city, delay = 0 }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)', // Center the ripple on the coordinates
        animationDelay: `${delay}ms`
      }}
    >
      {/* Central Glowing Dot */}
      <div 
        className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000',
          zIndex: 10
        }}
      />

      {/* Ripple 1 - Fastest */}
      <div 
        className="absolute rounded-full border-2 border-red-500 animate-ripple-1"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          boxShadow: '0 0 5px rgba(255, 0, 0, 0.6)',
        }}
      />

      {/* Ripple 2 - Medium */}
      <div 
        className="absolute rounded-full border-2 border-red-400 animate-ripple-2"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          boxShadow: '0 0 5px rgba(255, 0, 0, 0.4)',
          animationDelay: '0.5s'
        }}
      />

      {/* Ripple 3 - Slowest */}
      <div 
        className="absolute rounded-full border-2 border-red-300 animate-ripple-3"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          boxShadow: '0 0 5px rgba(255, 0, 0, 0.2)',
          animationDelay: '1s'
        }}
      />
    </div>
  );
};

export default LocationRipple;