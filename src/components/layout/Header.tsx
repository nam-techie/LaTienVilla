import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { navItems } from '../../constants/data';
import { useScrollToSection } from '../../hooks/useScrollEffect';
import Button from '../ui/Button';
import iconImage from '../../assets/icons/iconPage-removebg-preview.png';

const Header: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700">
      <div className={`transition-all duration-700 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#623e2a]/20 shadow-lg'
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Elegant Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src={iconImage}
                  alt="La Tiên Villa Icon"
                  className="w-10 h-10 object-contain transition-all duration-300"
                />
              </div>
              <div>
                <span className={`font-serif text-xl font-bold transition-all duration-700 ${
                  isScrolled ? 'text-primary-800' : 'text-white drop-shadow-lg'
                }`}>
                  La Tiên Villa
                </span>
                <div className={`font-sans text-xs font-medium tracking-wide transition-all duration-700 ${
                  isScrolled ? 'text-primary-600' : 'text-white/90 drop-shadow-md'
                }`}>Đất tiên vịnh ngọc</div>
              </div>
            </div>

            {/* Elegant Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative font-sans font-medium transition-all duration-700 group px-3 py-2 text-sm uppercase tracking-wide ${
                    isScrolled
                      ? 'text-primary-700 hover:text-primary-800'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 ${
                    isScrolled ? 'bg-primary-50/80' : 'bg-white/20'
                  }`}></div>
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  }`}></div>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-primary-700 p-2">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-primary-700"></div>
                <div className="w-6 h-0.5 bg-primary-700"></div>
                <div className="w-6 h-0.5 bg-primary-700"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
