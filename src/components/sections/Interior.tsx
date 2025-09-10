import React, { useState } from 'react';
import { Sofa, Bed, ChefHat, Bath, Tv, Wifi, Car, Shield } from 'lucide-react';

interface InteriorCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  items: InteriorItem[];
}

interface InteriorItem {
  name: string;
  brand: string;
  description: string;
  value: string;
  image?: string;
}

const interiorCategories: InteriorCategory[] = [
  {
    id: 'living',
    name: 'Phòng khách',
    icon: Sofa,
    items: [
      {
        name: 'Sofa cao cấp',
        brand: 'Minotti',
        description: 'Bộ sofa da thật Italy, thiết kế hiện đại',
        value: '200 triệu'
      },
      {
        name: 'Bàn trà mặt đá',
        brand: 'Poliform',
        description: 'Mặt đá marble tự nhiên, chân inox 316',
        value: '80 triệu'
      },
      {
        name: 'TV OLED 75"',
        brand: 'Samsung',
        description: 'Smart TV 4K, âm thanh Dolby Atmos',
        value: '120 triệu'
      }
    ]
  },
  {
    id: 'bedroom',
    name: 'Phòng ngủ',
    icon: Bed,
    items: [
      {
        name: 'Giường ngủ King Size',
        brand: 'Coco-mat',
        description: 'Nệm cao su thiên nhiên, khung gỗ sồi',
        value: '150 triệu'
      },
      {
        name: 'Tủ quần áo',
        brand: 'Poliform',
        description: 'Tủ âm tường 4 cánh, gỗ veneer cao cấp',
        value: '180 triệu'
      },
      {
        name: 'Bàn trang điểm',
        brand: 'Minotti',
        description: 'Gương LED, ngăn kéo ẩn thông minh',
        value: '90 triệu'
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Bếp',
    icon: ChefHat,
    items: [
      {
        name: 'Tủ bếp cao cấp',
        brand: 'Häcker',
        description: 'Tủ bếp Đức, mặt đá Quartz, phụ kiện Blum',
        value: '300 triệu'
      },
      {
        name: 'Bếp từ đôi',
        brand: 'Bosch',
        description: 'Công nghệ cảm ứng, tiết kiệm điện',
        value: '45 triệu'
      },
      {
        name: 'Tủ lạnh Side by Side',
        brand: 'Samsung',
        description: 'Dung tích 617L, công nghệ Digital Inverter',
        value: '85 triệu'
      }
    ]
  },
  {
    id: 'bathroom',
    name: 'Phòng tắm',
    icon: Bath,
    items: [
      {
        name: 'Bồn tắm Jacuzzi',
        brand: 'Kohler',
        description: 'Massage thủy lực, điều khiển cảm ứng',
        value: '180 triệu'
      },
      {
        name: 'Vòi sen thông minh',
        brand: 'Grohe',
        description: 'Điều chỉnh nhiệt độ tự động, tiết kiệm nước',
        value: '25 triệu'
      },
      {
        name: 'Lavabo đôi',
        brand: 'Duravit',
        description: 'Thiết kế hiện đại, chậu rửa ceramic',
        value: '60 triệu'
      }
    ]
  }
];

const Interior: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('living');

  const activeItems = interiorCategories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section id="interior" className="py-20 bg-gradient-to-br from-[#efebe5] to-[#f4f1ed] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23623e2a' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#623e2a]/10 px-4 py-2 rounded-full mb-6">
            <Sofa className="w-5 h-5 text-[#623e2a]" />
            <span className="text-[#623e2a] font-medium text-sm">Nội thất cao cấp</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#623e2a] mb-6">
            Nội Thất Đẳng Cấp
          </h2>
          <p className="text-lg text-[#623e2a]/70 max-w-3xl mx-auto leading-relaxed">
            Bàn giao villa với nội thất cao cấp từ các thương hiệu nổi tiếng thế giới, 
            mang đến không gian sống hoàn hảo và đẳng cấp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {interiorCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#623e2a] text-white shadow-lg scale-105'
                    : 'bg-white/60 text-[#623e2a] hover:bg-white/80 hover:scale-105'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interior Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activeItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#623e2a]/10 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              {/* Item Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#623e2a] mb-1 group-hover:text-[#623e2a]/80 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-sm font-medium text-[#623e2a]/60 bg-[#623e2a]/10 px-2 py-1 rounded-full inline-block">
                    {item.brand}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#623e2a]">
                    {item.value}
                  </div>
                </div>
              </div>

              {/* Item Description */}
              <p className="text-[#623e2a]/70 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Quality Badge */}
              <div className="flex items-center space-x-2 text-sm text-[#623e2a]/60">
                <Shield className="w-4 h-4" />
                <span>Bảo hành chính hãng</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interior Summary */}
        <div className="mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-6xl mx-auto border border-[#623e2a]/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#623e2a] mb-4">
                Tổng Giá Trị Nội Thất
              </h3>
              <div className="text-4xl font-bold text-[#623e2a] mb-2">
                1,6 tỷ VNĐ/căn
              </div>
              <p className="text-[#623e2a]/70">
                Bàn giao hoàn thiện 100% nội thất cao cấp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/40 rounded-xl">
                <Sofa className="w-8 h-8 text-[#623e2a] mx-auto mb-2" />
                <div className="font-bold text-[#623e2a]">Phòng khách</div>
                <div className="text-sm text-[#623e2a]/70">400 triệu</div>
              </div>
              <div className="text-center p-4 bg-white/40 rounded-xl">
                <Bed className="w-8 h-8 text-[#623e2a] mx-auto mb-2" />
                <div className="font-bold text-[#623e2a]">Phòng ngủ</div>
                <div className="text-sm text-[#623e2a]/70">420 triệu</div>
              </div>
              <div className="text-center p-4 bg-white/40 rounded-xl">
                <ChefHat className="w-8 h-8 text-[#623e2a] mx-auto mb-2" />
                <div className="font-bold text-[#623e2a]">Bếp</div>
                <div className="text-sm text-[#623e2a]/70">430 triệu</div>
              </div>
              <div className="text-center p-4 bg-white/40 rounded-xl">
                <Bath className="w-8 h-8 text-[#623e2a] mx-auto mb-2" />
                <div className="font-bold text-[#623e2a]">Phòng tắm</div>
                <div className="text-sm text-[#623e2a]/70">350 triệu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
