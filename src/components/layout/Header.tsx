import React from 'react';
import { Phone } from 'lucide-react';
import { navItems } from '../../constants/data';
import { useScrollToSection } from '../../hooks/useScrollEffect';
import Button from '../ui/Button';
import iconImage from '../../assets/icons/iconPage-removebg-preview.png';

const Header: React.FC = () => {
  const scrollToSection = useScrollToSection();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="bg-white/95 backdrop-blur-xl border-b border-primary-200/50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Elegant Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src={iconImage}
                  alt="La Tiên Villa Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary-800">
                  La Tiên Villa
                </span>
                <div className="font-sans text-xs text-primary-600 font-medium tracking-wide">Đất tiên vịnh ngọc</div>
              </div>
            </div>

            {/* Elegant Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="relative font-sans text-primary-700 hover:text-primary-800 font-medium transition-all duration-300 group px-3 py-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-primary-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-800 text-white px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-primary-900 transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>0896.68.66.68</span>
              </button>
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
