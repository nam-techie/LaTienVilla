import React from 'react';
import { MapPin } from 'lucide-react';
import { locationPoints, nearbyAttractions } from '../../constants/data';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Location: React.FC = () => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    teal: "bg-teal-100 text-teal-600"
  };

  return (
    <section id="location" className="relative py-20 overflow-hidden">
      {/* Section Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/85 to-indigo-50/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vị trí kết nối kim cương
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La Tiên Villa nằm trên trục kết nối huyết mạch, chỉ 30 phút tới sân bay Cam Ranh, 
              15 phút đến trung tâm Nha Trang. Từ đây, dễ dàng tiếp cận các điểm du lịch nổi tiếng, 
              bến du thuyền và hệ sinh thái nghỉ dưỡng ven biển.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Location Points */}
            <div className="space-y-6">
              {locationPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${colorClasses[point.color as keyof typeof colorClasses]}`}>
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{point.name}</h3>
                    <p className="text-sm text-gray-600">{point.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bản đồ vị trí</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tọa lạc tại vị trí đắc địa nhất vịnh Nha Trang
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Xem bản đồ chi tiết
                </Button>
              </Card>
            </div>
          </div>

          {/* Nearby Attractions */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Điểm du lịch nổi tiếng lân cận
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${colorClasses[attraction.color as keyof typeof colorClasses]}`}>
                    <attraction.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{attraction.name}</h4>
                  <p className="text-sm text-gray-600">{attraction.distance}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
