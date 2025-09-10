import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollEffect';

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer style={{backgroundColor: '#623e2a'}} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                La Tiên Villa
              </h3>
              <p className="font-sans text-sm text-white/80 italic">
                Đất tiên vịnh ngọc
              </p>
            </div>

            {/* Get Social */}
            <div>
              <h4 className="font-sans text-lg font-bold text-white mb-3">
                Kết nối với chúng tôi
              </h4>
              <p className="font-sans text-sm italic text-white/80 mb-4">
                Theo dõi để cập nhật thông tin mới nhất!
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            {/* Contact Office */}
            <div>
              <h4 className="font-sans text-lg font-bold text-white mb-3">
                Thông tin liên hệ
              </h4>

              <div className="space-y-2 font-sans text-sm text-white/90">
                <p>
                  <strong className="text-white">Dự án:</strong><br />
                  Khu vực Bãi Tiên, Khóm Đường Đệ,<br />
                  Phường Bắc Nha Trang, Tỉnh Khánh Hòa
                </p>
                <p>
                  <strong className="text-white">VPBH Hà Nội:</strong><br />
                  Số 16A Nguyễn Công Trứ, Phường Hai Bà Trưng
                </p>
                <p>
                  <strong className="text-white">VPBH Hồ Chí Minh:</strong><br />
                  Số 8 Trần Quý Kiên, Phường Bình Trưng
                </p>
                <p className="text-white font-semibold">Hotline: 0896.68.66.68</p>
                <p className="text-white font-semibold">Email: info@latienvilla.vn</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-6 mt-8 col-span-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-sans text-sm text-white/70 mb-4 md:mb-0">
                © 2024 La Tiên Villa. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex space-x-6">
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  Giới thiệu
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  Tiện ích
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
