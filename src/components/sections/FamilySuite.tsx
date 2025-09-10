import React from 'react';
import familyVilla from '../../assets/pictures/output-171.jpg';

const FamilySuite: React.FC = () => {
  return (
    <section id="familysuite" className="relative py-20" style={{backgroundColor: '#f4f1ed'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#623e2a'}}>
                  Sandy Villa Premium
                </h2>
                <p className="font-sans text-lg leading-relaxed mb-8" style={{color: '#623e2a'}}>
                  Dòng sản phẩm cao cấp nhất của La Tiên Villa với thiết kế sang trọng,
                  view biển panoramic và không gian sống rộng rãi. Phù hợp cho gia đình
                  đa thế hệ hoặc nhóm bạn muốn tận hưởng kỳ nghỉ đẳng cấp.
                </p>

                {/* Learn More Button */}
                <button className="text-white px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide hover:opacity-90 transition-colors duration-300" style={{backgroundColor: '#623e2a'}}>
                  TÌM HIỂU THÊM
                </button>
              </div>

              {/* Caption */}
              <div className="text-center">
                <p className="font-sans text-sm italic leading-relaxed" style={{color: '#623e2a'}}>
                  Diện tích: 180-220m² | Giá từ 4.2 tỷ/căn<br />
                  Thiết kế hiện đại với đầy đủ tiện nghi cao cấp!
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={familyVilla}
                alt="Sandy Villa Premium"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySuite;
