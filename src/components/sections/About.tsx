import React from 'react';
import { Building2, Home, Award, Star, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import aboutImage from '../../assets/pictures/output-018.jpg';

const About: React.FC = () => {
  const projectStats = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Quy mô",
      value: "44 ha",
      description: "668 căn biệt thự cao cấp",
      color: "primary"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Mật độ xây dựng",
      value: "19,52%",
      description: "Không gian xanh tối đa",
      color: "primary"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Chủ đầu tư",
      value: "KDI Holdings",
      description: "Đồng phát triển Masterise Homes",
      color: "primary"
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Quản lý vận hành",
      value: "The Ascott Limited",
      description: "Tiêu chuẩn quốc tế",
      color: "primary"
    }
  ];

  const keyFeatures = [
    {
      title: "Quần thể đô thị quốc tế 44ha",
      description: "Hệ sinh thái tiện ích quy hoạch đồng bộ thuộc quần thể Libera Nha Trang"
    },
    {
      title: "Vị trí tựa sơn hướng hải",
      description: "Lưng tựa dòng núi Cô Tiên xanh mát, mặt hướng ra vịnh Nha Trang ngọc ngà"
    },
    {
      title: "Thiết kế chuẩn nghỉ dưỡng",
      description: "Bàn giao full nội thất cao cấp, mang đến trải nghiệm sống tinh tế giữa thiên nhiên"
    },
    {
      title: "Mô hình compound khép kín",
      description: "Bên bến du thuyền, kiến tạo phong cách sống thượng lưu hài hòa với văn hóa địa phương"
    }
  ];

  return (
    <section id="about" className="relative py-20" style={{backgroundColor: '#f4f1ed'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={aboutImage}
                alt="La Tiên Villa - Phối cảnh tổng thể"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-sm" style={{color: '#623e2a'}}>Đã khởi công</p>
                    <p className="text-xs" style={{color: 'rgba(98, 62, 42, 0.8)'}}>Tiến độ đúng cam kết</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#623e2a'}}>
                  Ngôi nhà biết thở
                </h2>
                <p className="font-sans text-lg leading-relaxed mb-6" style={{color: '#623e2a'}}>
                  Biệt Thư Biển Nghỉ Dưỡng La Tiên Villa Nha Trang – giai đoạn 2 thuộc quần thể đô thị Quốc tế 44ha Libera Nha Trang.
                  Nổi bật với vị trí "tựa sơn hướng hải": lưng tựa dòng núi Cô Tiên xanh mát, mặt hướng ra vịnh Nha Trang ngọc ngà trời rộng.
                </p>
                <p className="font-sans text-lg leading-relaxed mb-8" style={{color: '#623e2a'}}>
                  Mỗi căn biệt thự đơn lập hoặc song lập được thiết kế chuẩn nghỉ dưỡng, bàn giao full nội thất cao cấp,
                  mang đến trải nghiệm sống tinh tế giữa thiên nhiên và tiện nghi hiện đại.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-primary-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {projectStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white p-6 text-center border border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{stat.title}</h3>
                <p className="text-sm text-primary-700 mb-2 font-semibold">{stat.value}</p>
                <p className="text-xs text-primary-600">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
