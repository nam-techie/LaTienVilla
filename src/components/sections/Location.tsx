import React from 'react';
import { MapPin } from 'lucide-react';
import { locationPoints, nearbyAttractions } from '../../constants/data';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Location: React.FC = () => {
  const colorClasses = {
    blue: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700",
    green: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700",
    purple: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700",
    orange: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700",
    yellow: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700",
    teal: "text-white" + " " + "bg-gradient-to-br from-amber-600 to-amber-700"
  };

  return (
    <section id="location" className="relative py-20 overflow-hidden" style={{backgroundColor: '#efebe5'}}>
      {/* Section Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#623e2a'}}>
              Vị trí kết nối kim cương
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{color: '#623e2a'}}>
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
            
            {/* Map Section */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-sans text-2xl font-bold mb-6 text-center" style={{color: '#623e2a'}}>
                  Vị trí dự án
                </h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4390.57905753887!2d109.235822!3d12.300621999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDE4JzAyLjIiTiAxMDnCsDE0JzA5LjAiRQ!5e1!3m2!1sen!2s!4v1757484354558!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="La Tiên Villa Location"
                  />
                </div>
              </div>
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
