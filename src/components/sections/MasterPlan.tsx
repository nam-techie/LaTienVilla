import React, { useState } from 'react';
import { villaTypes } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Card from '../ui/Card';
import { motion } from "framer-motion";
// Import villa images
import oceanView from '../../assets/pictures/oceanview-villa-4-tang.jpg';
import central from '../../assets/pictures/central-villa.jpg';
import garden from '../../assets/pictures/garden-villa.jpg';
import hidden from '../../assets/pictures/hidden-villa.jpg';
import nature from '../../assets/pictures/nhature-villa.jpg';
import florist from '../../assets/pictures/villa-doc-hoa.jpg';
import matBang from '../../assets/pictures/mat-bang.jpg';

const villaImages = [oceanView, central, garden, hidden, nature, florist];

const ITEMS_PER_PAGE = 3;

const MasterPlan: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const totalPages = Math.ceil(villaTypes.length / ITEMS_PER_PAGE);

  const paginatedVillas = villaTypes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section id="masterplan" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#623e2a' }}>
      {/* Section Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* MasterPlan title and description */}
          <div
            ref={titleRef}
            className={`text-white space-y-8 transition-all duration-700 ease-in-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-6xl font-serif font-bold text-[white]">
                Những ngôi nhà
              </h2>
              <h3 className="text-3xl italic text-white-700 mt-4">
                Biết Thở
              </h3>
            </motion.div>


            <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed opacity-90">
              <p>Thiết kế "Lost in Nature",
                Nằm lặng cây xanh ôm trọn hiên nhà,
                Gần 14.000m² mặt nước len lỏi khắp không gian,</p>
              <p>Ba bãi tắm riêng tư, trải rộng giữa vịnh trời.</p>
            </div>

            {/* Overall Master Plan Image */}
            <div className="pt-6">
              <img
                src={matBang}
                alt="Mặt bằng tổng thể La Tiên Villa"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Villa Types Grid */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 transition-all duration-700 ease-in-out ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {paginatedVillas.map((villa, index) => {
              const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
              const villaImage = villaImages[globalIndex];
              return (
                <Card
                  key={index}
                  gradient
                  hover
                  className="p-5 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-500 min-h-[220px] flex flex-col justify-between border border-white/10 relative overflow-hidden"
                >
                  {/* Villa Image */}
                  <div className="absolute inset-0 opacity-20 hover:opacity-30 transition-opacity duration-300">
                    <img
                      src={villaImage}
                      alt={villa.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-3">
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">{villa.name}</h4>
                        <p
                          className="text-white/85 text-sm leading-relaxed overflow-hidden"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            height: '3.75rem',
                          }}
                        >
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
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white/20 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white/20 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
