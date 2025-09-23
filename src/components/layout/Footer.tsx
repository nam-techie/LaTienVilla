import React from 'react';
import { Facebook, Youtube, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollEffect';
import TikTokIcon from '../icons/TikTokIcon';
import logoBird from '../../assets/icons/iconPage-removebg-preview.png';

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: "https://www.facebook.com/search/top?q=ctcp%20nh%C3%A0%20ann%20home",
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: "https://www.youtube.com/@annhome",
      color: 'hover:text-red-400'
    },
    {
      icon: TikTokIcon,
      label: 'TikTok',
      href: "https://www.tiktok.com/@annhome.official",
      color: 'hover:text-pink-400'
    },
    {
      icon: CheckCircle,
      label: 'Website',
      href: "https://www.annhome.vn/",
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { label: 'Trang chủ', section: 'hero' },
    { label: 'Giới thiệu', section: 'about' },
    { label: 'Tiện ích', section: 'amenities' },
    { label: 'Mặt bằng', section: 'master-plan' },
    { label: 'Liên hệ', section: 'contact' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Dự án',
      details: [
        'Khu vực Bãi Tiên, Khóm Đường Đệ',
        'Phường Bắc Nha Trang, Tỉnh Khánh Hòa'
      ]
    },
    {
      icon: Phone,
      label: 'Hotline',
      details: ['0896.68.66.68']
    },
    {
      icon: Mail,
      label: 'Email',
      details: ['info@latienvilla.vn']
    },
    {
      icon: Clock,
      label: 'Giờ làm việc',
      details: ['T2 - T7: 8:00 - 18:00', 'CN: 9:00 - 17:00']
    }
  ];

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Logo, tên, slogan, mô tả ở trên đầu, căn giữa */}
        <div className="w-full flex flex-col items-center mb-5">
          <img
            src={logoBird}
            alt="La Tiên Villa Logo"
            className="h-36 w-auto"
            style={{ maxWidth: 240 }}
          />
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            La Tiên Villa
          </h3>
          <p className="font-sans text-base text-white/80 italic mt-0.5">
            Đất tiên vịnh ngọc
          </p>
          <p className="font-sans text-base text-white/70 mt-1 text-center max-w-xl" style={{ marginTop: 13 }}>
            Khu nghỉ dưỡng cao cấp với thiết kế sang trọng, mang đến trải nghiệm sống đẳng cấp giữa lòng thiên nhiên.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[30px] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {/* Social Media */}
                <div>
                  <h4 className="font-sans text-lg font-semibold text-white mb-6">
                    Kết nối với chúng tôi
                  </h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-white/70 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10 hover:scale-110 group`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans text-lg font-semibold text-white mb-6">
                Liên kết nhanh
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-sans text-lg font-semibold text-white mb-6">
                Thông tin liên hệ
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-primary-300" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-medium text-white mb-1">
                          {info.label}:
                        </p>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-sans text-sm text-white/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter/CTA */}
            <div>
              <h4 className="font-sans text-lg font-semibold text-white mb-6">
                Đăng ký nhận tin
              </h4>
              <p className="font-sans text-sm text-white/70 mb-4">
                Nhận thông tin mới nhất về dự án và ưu đãi đặc biệt.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                />
                <button className="w-full bg-primary-700 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="font-sans text-sm text-white/60">
                  © 2024 La Tiên Villa. Tất cả quyền được bảo lưu.
                </p>
                <div className="flex space-x-4">
                  <button className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                    Chính sách bảo mật
                  </button>
                  <button className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                    Điều khoản sử dụng
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-sans text-sm text-white/60">
                  Phát triển bởi
                </span>
                <span className="font-sans text-sm font-semibold text-primary-300">
                  Ann Home
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
