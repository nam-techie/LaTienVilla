import React from 'react';
import { useScrollEffect } from '../../hooks/useScrollEffect';
import { mainBackground } from '../../constants/images';

const ParallaxBackground: React.FC = () => {
  const scrollY = useScrollEffect();

  return (
    <div 
      className="parallax-bg parallax-container"
      style={{
        backgroundImage: `url(${mainBackground})`,
        transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
      }}
    />
  );
};

export default ParallaxBackground;
