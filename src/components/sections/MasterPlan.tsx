import React from 'react';
import { ArrowRight } from 'lucide-react';
import { villaTypes } from '../../constants/data';
import { useScrollToSection } from '../../hooks/useScrollEffect';
import Button from '../ui/Button';
import Card from '../ui/Card';

const MasterPlan: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="masterplan" className="relative py-20 overflow-hidden">
      {/* Section Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-800/75 to-purple-900/70 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
                  Những ngôi nhà
                </h2>
                <h3 className="text-3xl md:text-4xl font-light italic opacity-90 mb-6">
                  Biết Thở
                </h3>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed opacity-90">
                <p>Thiết kế "Lost in Nature",</p>
                <p>Nằm lặng cây xanh ôm trọn hiên nhà,</p>
                <p>Gần 14.000m² mặt nước len lỏi khắp không gian,</p>
                <p>Ba bãi tắm riêng tư, trải rộng giữa vịnh trời.</p>
              </div>

              <div className="pt-6">
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-3"
                >
                  Tải chi tiết mặt bằng & mã căn PDF
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Villa Types */}
            <div className="space-y-6">
              {villaTypes.map((villa, index) => (
                <Card 
                  key={index}
                  gradient
                  hover
                  className="p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">{villa.name}</h4>
                    <div className="text-white/80">
                      <villa.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">
                    {villa.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Diện tích: {villa.area}</span>
                    <span className="text-yellow-400 font-semibold">{villa.price}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
