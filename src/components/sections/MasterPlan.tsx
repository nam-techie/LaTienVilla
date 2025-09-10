import React from 'react';
import { ArrowRight } from 'lucide-react';
import { villaTypes } from '../../constants/data';
import { useScrollToSection } from '../../hooks/useScrollEffect';
import Button from '../ui/Button';
import Card from '../ui/Card';

const MasterPlan: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="masterplan" className="relative py-20 overflow-hidden" style={{backgroundColor: '#623e2a'}}>
      {/* Section Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            <div className="space-y-3">
              {villaTypes.map((villa, index) => (
                <Card
                  key={index}
                  gradient
                  hover
                  className="p-5 hover:bg-white/15 transition-all duration-300 h-[130px] flex flex-col justify-between border border-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-3">
                      <h4 className="text-lg font-bold text-white mb-2 leading-tight">{villa.name}</h4>
                      <p className="text-white/85 text-sm leading-relaxed overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        height: '2.5rem'
                      }}>
                        {villa.description}
                      </p>
                    </div>
                    <div className="text-white/70 flex-shrink-0">
                      <villa.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="text-white/75 text-xs">Diện tích: {villa.area}</span>
                    <span className="text-yellow-400 font-bold text-sm">{villa.price}</span>
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
