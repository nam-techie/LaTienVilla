import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-100 mb-2">
                La Tiên Villa
              </h3>
            </div>

            {/* Get Social */}
            <div>
              <h4 className="font-sans text-xl font-bold text-primary-100 mb-4">
                Kết nối với chúng tôi
              </h4>
              <p className="font-sans text-sm italic text-primary-100 mb-6">
                Theo dõi để cập nhật thông tin mới nhất!
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-8">
            {/* Contact Office */}
            <div>
              <h4 className="font-sans text-xl font-bold text-primary-100 mb-4">
                Thông tin liên hệ
              </h4>

              <div className="space-y-3 font-sans text-base text-primary-100">
                <p>
                  <strong>Dự án:</strong><br />
                  Khu vực Bãi Tiên, Khóm Đường Đệ,<br />
                  Phường Bắc Nha Trang, Tỉnh Khánh Hòa
                </p>
                <p>
                  <strong>VPBH Hà Nội:</strong><br />
                  Số 16A Nguyễn Công Trứ, Phường Hai Bà Trưng
                </p>
                <p>
                  <strong>VPBH Hồ Chí Minh:</strong><br />
                  Số 8 Trần Quý Kiên, Phường Bình Trưng
                </p>
                <p>Hotline: 0896.68.66.68</p>
                <p>Email: info@latienvilla.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
