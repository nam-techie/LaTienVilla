import React from 'react';
import { Waves, Building2, TreePine } from 'lucide-react';
import Card from '../ui/Card';
import villa1 from '../../assets/pictures/output-171.jpg';
import villa2 from '../../assets/pictures/output-174.jpg';
import villa3 from '../../assets/pictures/output-177.jpg';

const Features: React.FC = () => {
  const accommodations = [
    {
      image: villa1,
      title: "Oceanview Villa",
      guests: "Diện tích: 120-150m²",
      price: "Từ 3.2 tỷ/căn",
      description: "View biển trực diện, thiết kế hiện đại",
      icon: Waves
    },
    {
      image: villa2,
      title: "Central Villa",
      guests: "Diện tích: 100-120m²",
      price: "Từ 2.8 tỷ/căn",
      description: "Vị trí trung tâm, tiện ích đầy đủ",
      icon: Building2
    },
    {
      image: villa3,
      title: "Garden Villa",
      guests: "Diện tích: 80-100m²",
      price: "Từ 2.4 tỷ/căn",
      description: "Không gian xanh, yên tĩnh",
      icon: TreePine
    }
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Section Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-800/75 to-purple-900/70 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Các loại Villa
            </h2>
            <p className="font-sans text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Lựa chọn hoàn hảo cho mọi nhu cầu nghỉ dưỡng
            </p>
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <Card
                key={index}
                gradient
                hover
                className="overflow-hidden hover:bg-white/15 transition-all duration-300"
              >
                {/* Room Image */}
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide border border-white/30 hover:bg-white/30 transition-colors duration-300">
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>

                {/* Villa Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-sans text-xl font-bold text-white">
                      {room.title}
                    </h3>
                    <div className="text-white/80">
                      <room.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="font-sans text-sm font-bold text-white/90 mb-2">
                    {room.guests}
                  </p>
                  <p className="font-sans text-lg font-bold text-yellow-400 mb-3">
                    {room.price}
                  </p>
                  <p className="font-sans text-sm text-white/80 leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
