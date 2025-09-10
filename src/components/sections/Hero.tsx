import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { heroBackgrounds } from '../../constants/images';
import { useImageSlider } from '../../hooks/useImageSlider';
import { useScrollToSection } from '../../hooks/useScrollEffect';

interface HeroProps {
  onVideoModalOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVideoModalOpen }) => {
  const scrollToSection = useScrollToSection();
  const { currentIndex, goToSlide, currentImage } = useImageSlider({
    images: heroBackgrounds,
    autoPlay: true,
    interval: 5000
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentImage?.src})` }}
      />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/60"></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        {/* Welcome Text */}
        <div className="mb-6">
          <p className="text-sm md:text-base font-sans font-bold tracking-[0.3em] uppercase text-white/90 mb-8">
            Chào mừng đến với
          </p>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none tracking-tight">
            La Tiên Villa
          </h1>
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-normal mb-8 tracking-wide">
            Đất tiên vịnh ngọc
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="font-sans text-lg md:text-xl text-white/95 leading-relaxed">
              Bạn có từng mơ nơi đất Tiên giao hoà vịnh Ngọc
            </p>
            <p className="font-sans text-lg md:text-xl text-white/95 leading-relaxed">
              Những ngôi nhà thở nhịp thiên nhiên
            </p>
            <p className="font-sans text-base md:text-lg italic text-white/90 leading-relaxed">
              "Đủ sôi động để sống đời rực rỡ - Đủ yên bình để sống trọn riêng tư"
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
            <span className="font-sans text-sm font-bold tracking-[0.15em] uppercase text-primary-800">
              Tìm hiểu thêm
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
