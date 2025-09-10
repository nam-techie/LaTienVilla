import React from 'react';
import { offers } from '../../constants/data';
import Card from '../ui/Card';

const Offers: React.FC = () => {
  return (
    <section id="offers" className="relative py-20 bg-primary-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-8">
              Ưu đãi đặc biệt
            </h2>
            <p className="font-sans text-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
              Chương trình ưu đãi hấp dẫn dành riêng cho khách hàng đầu tiên
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="p-8 text-center transition-all duration-300 hover:shadow-xl min-h-[280px] flex flex-col justify-between bg-white text-primary-800 border border-primary-200 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center text-primary-600">
                    <offer.icon className="w-12 h-12" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-primary-800">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed flex-grow text-primary-700">
                    {offer.description}
                  </p>

                  {/* Value */}
                  <div className="text-2xl font-bold mb-4 text-primary-800">
                    {offer.value}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-primary-800 text-white px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-primary-900 transition-colors duration-300">
              ĐĂNG KÝ NHẬN ƯU ĐÃI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
