import React from 'react';
import familyVilla from '../../assets/pictures/output-171.jpg';

const FamilySuite: React.FC = () => {
  return (
    <section className="relative py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
                  Sandy Villa Premium
                </h2>
                <p className="font-sans text-lg text-primary-800 leading-relaxed mb-8">
                  Dòng sản phẩm cao cấp nhất của La Tiên Villa với thiết kế sang trọng,
                  view biển panoramic và không gian sống rộng rãi. Phù hợp cho gia đình
                  đa thế hệ hoặc nhóm bạn muốn tận hưởng kỳ nghỉ đẳng cấp.
                </p>

                {/* Learn More Button */}
                <button className="bg-primary-800 text-white px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-primary-900 transition-colors duration-300">
                  TÌM HIỂU THÊM
                </button>
              </div>

              {/* Caption */}
              <div className="text-center">
                <p className="font-sans text-sm italic text-primary-800 leading-relaxed">
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
