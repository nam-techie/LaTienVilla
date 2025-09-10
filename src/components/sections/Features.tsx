import React from 'react';
import { Waves, Building2, TreePine } from 'lucide-react';
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
    <section id="features" className="relative py-20" style={{backgroundColor: '#efebe5'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{color: '#623e2a'}}>
              Các loại Villa
            </h2>
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Room Image */}
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: 'rgba(98, 62, 42, 0.2)'}}>
                    <button className="text-white px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide" style={{backgroundColor: '#623e2a'}}>
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>

                {/* Villa Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-sans text-xl font-bold mb-3" style={{color: '#623e2a'}}>
                      {room.title}
                    </h3>
                    <div style={{color: '#623e2a'}}>
                      <room.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="font-sans text-sm font-bold mb-2" style={{color: '#623e2a'}}>
                    {room.guests}
                  </p>
                  <p className="font-sans text-sm mb-2" style={{color: '#623e2a'}}>
                    {room.price}
                  </p>
                  <p className="font-sans text-xs" style={{color: 'rgba(98, 62, 42, 0.8)'}}>
                    {room.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
