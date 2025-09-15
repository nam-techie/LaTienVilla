import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Tiến độ xây dựng</h2>
      <div className="relative">
        <div className="absolute h-full w-0.5 bg-primary/20 left-[15px] md:left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {/* 2024 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start">
            <div className="md:w-[45%] md:text-right md:pr-8">
              <h3 className="font-bold text-xl mb-2">Quý IV/2024</h3>
              <ul className="text-gray-600 md:list-none list-disc ml-4 md:ml-0 space-y-2">
                <li>Khởi công hạ tầng kỹ thuật</li>
                <li>San lấp mặt bằng</li>
                <li>Đường nội khu đầu tiên</li>
              </ul>
            </div>
            <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="md:w-[45%] md:pl-8 pl-12"></div>
          </div>

          {/* 2025 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start">
            <div className="md:w-[45%]"></div>
            <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="md:w-[45%] md:pl-8 pl-12">
              <h3 className="font-bold text-xl mb-2">Quý III/2025</h3>
              <ul className="text-gray-600 list-disc ml-4 space-y-2">
                <li>San nền (16/09 - 30/11)</li>
                <li>Giao thông (28/09 - 20/12)</li>
                <li>Thi công móng Biệt thự (21/10 - 06/03/2026)</li>
              </ul>
            </div>
          </div>

          {/* 2026 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start">
            <div className="md:w-[45%] md:text-right md:pr-8">
              <h3 className="font-bold text-xl mb-2">2026</h3>
              <ul className="text-gray-600 md:list-none list-disc ml-4 md:ml-0 space-y-2">
                <li>Thi công tầng 1 Biệt thự (06/03 - 05/05)</li>
                <li>Đổ mái biệt thự (05/05 - 04/07)</li>
                <li>Xây dựng phần kiến trúc hoàn thiện (04/07 - 06/03/2027)</li>
                <li>Thi công cảnh quan hoàn thiện hạ tầng (tiếp tục)</li>
              </ul>
            </div>
            <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="md:w-[45%]"></div>
          </div>

          {/* 2027 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start">
            <div className="md:w-[45%]"></div>
            <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="md:w-[45%] md:pl-8 pl-12">
              <h3 className="font-bold text-xl mb-2">2027</h3>
              <ul className="text-gray-600 list-disc ml-4 space-y-2">
                <li>Lắp đặt thiết bị & nội thất (06/03 - 02/08)</li>
                <li>Vận hành chạy thử, bàn giao cho Khách hàng (02/08 - 30/09)</li>
                <li>Nghiệm thu đưa vào sử dụng (01/10 - 03/11)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
