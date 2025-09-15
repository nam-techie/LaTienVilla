import React from 'react';
import { Waves, Building2, TreePine, Home } from 'lucide-react';
// Temporary using one image for all villas until actual images are added
import villa1 from '../../assets/pictures/output-171.jpg';
import central from '../../assets/pictures/central-villa.jpg';
import garden from '../../assets/pictures/garden-villa.jpg';
import hidden from '../../assets/pictures/hidden-villa.jpg';
import mature from '../../assets/pictures/nhature-villa.jpg';
import villaDocHoa from '../../assets/pictures/villa-doc-hoa.jpg';
import oceanView from '../../assets/pictures/oceanview-villa-4-tang.jpg';
// NOTE: Please add the following images to assets/pictures/ directory:
// - central-villa.jpg
// - garden-villa.jpg
// - hidden-villa.jpg
// - mature-villa.jpg
// - oceanview-villa-4-tang.jpg
// - villa-doc-hoa.jpg

const Features: React.FC = () => {
  const accommodations = [
    {
      image: oceanView,
      title: "Ocean View Villa 4 Tầng",
      guests: "Diện tích: 300-350m²",
      price: "Liên hệ để biết giá",
      description: "View biển trực diện, thiết kế sang trọng",
      icon: Waves,
      link: "/villas/ocean-view"
    },
    {
      image: central,
      title: "Central Villa",
      guests: "Diện tích: 200-250m²",
      price: "Liên hệ để biết giá",
      description: "Vị trí trung tâm, tiện ích đầy đủ",
      icon: Building2,
      link: "/villas/central"
    },
    {
      image: garden, // Replace with garden-villa.jpg
      title: "Garden Villa",
      guests: "Diện tích: 180-220m²",
      price: "Liên hệ để biết giá",
      description: "Không gian xanh, yên tĩnh",
      icon: TreePine,
      link: "/villas/garden"
    },
    {
      image: hidden, // Replace with hidden-villa.jpg
      title: "Hidden Villa",
      guests: "Diện tích: 220-260m²",
      price: "Liên hệ để biết giá",
      description: "Thiết kế riêng tư, độc đáo",
      icon: Home,
      link: "/villas/hidden"
    },
    {
      image: mature, // Replace with mature-villa.jpg
      title: "Nature Villa",
      guests: "Diện tích: 240-280m²",
      price: "Liên hệ để biết giá",
      description: "Thiết kế trưởng thành, đẳng cấp",
      icon: Building2,
      link: "/villas/nature"
    },
    {
      image: villaDocHoa, // Replace with villa-doc-hoa.jpg
      title: "Villa Dốc Hoa",
      guests: "Diện tích: 260-300m²",
      price: "Liên hệ để biết giá",
      description: "Thiết kế độc đáo, sang trọng",
      icon: Home,
      link: "/villas/doc-hoa"
    }
  ];

  const handleViewDetails = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="features" className="relative py-20" style={{ backgroundColor: '#efebe5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#623e2a' }}>
              Các loại Villa
            </h2>
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => handleViewDetails(room.link)}
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay with Text */}
                  <div className="absolute inset-0 bg-[#623e2a]/0 group-hover:bg-[#623e2a]/50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide bg-[#623e2a] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      XEM CHI TIẾT
                    </span>
                  </div>
                </div>

                {/* Villa Info */}
                <div className="p-6 transition-colors duration-300 hover:bg-[#623e2a]/5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-sans text-xl font-bold mb-3 text-[#623e2a] transition-colors duration-300 hover:text-[#623e2a'">
                      {room.title}
                    </h3>
                    <div className="text-[#623e2a] transition-transform duration-300 hover:scale-110">
                      <room.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="font-sans text-sm font-bold mb-2" style={{ color: '#623e2a' }}>
                    {room.guests}
                  </p>
                  <p className="font-sans text-sm mb-2" style={{ color: '#623e2a' }}>
                    {room.price}
                  </p>
                  <p className="font-sans text-xs" style={{ color: 'rgba(98, 62, 42, 0.8)' }}>
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
