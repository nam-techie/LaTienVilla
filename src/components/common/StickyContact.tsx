import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, User, X } from 'lucide-react';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const StickyContact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactButtons = [
    {
      icon: Phone,
      label: 'Hotline',
      action: () => window.open('tel:0896686668'),
      bg: 'bg-green-500 hover:bg-green-600',
      text: '0896.68.66.68'
    },
    {
      icon: MessageCircle,
      label: 'Chat Zalo',
      action: () => window.open('https://zalo.me/0896686668'),
      bg: 'bg-blue-500 hover:bg-blue-600',
      text: 'Chat Zalo'
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:info@latienvilla.vn'),
      bg: 'bg-red-500 hover:bg-red-600',
      text: 'Email'
    },
    {
      icon: User,
      label: 'Để lại thông tin',
      action: () => setShowForm(true),
      bg: 'bg-[#623e2a] hover:bg-[#623e2a]/80',
      text: 'Đăng ký tư vấn'
    }
  ];

  return (
    <>
      {/* Sticky Contact Buttons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {contactButtons.map((button, index) => {
          const Icon = button.icon;
          return (
            <div key={index} className="group relative">
              <button
                onClick={button.action}
                className={`${button.bg} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center w-12 h-12`}
                title={button.label}
              >
                <Icon className="w-5 h-5" />
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {button.text}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#623e2a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#623e2a]" />
              </div>
              <h3 className="text-2xl font-bold text-[#623e2a] mb-2">
                Đăng Ký Tư Vấn
              </h3>
              <p className="text-[#623e2a]/70">
                Để lại thông tin để nhận tư vấn miễn phí từ chuyên gia
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#623e2a] mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#623e2a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#623e2a]/20 focus:border-[#623e2a] transition-colors"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#623e2a] mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#623e2a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#623e2a]/20 focus:border-[#623e2a] transition-colors"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#623e2a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#623e2a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#623e2a]/20 focus:border-[#623e2a] transition-colors"
                  placeholder="Nhập email (không bắt buộc)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#623e2a] mb-2">
                  Tin nhắn
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#623e2a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#623e2a]/20 focus:border-[#623e2a] transition-colors resize-none"
                  placeholder="Nhập tin nhắn hoặc câu hỏi của bạn"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#623e2a] text-white py-3 rounded-lg font-medium hover:bg-[#623e2a]/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Gửi thông tin</span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-[#623e2a]/10">
              <div className="text-center text-sm text-[#623e2a]/70">
                <p className="mb-2">Hoặc liên hệ trực tiếp:</p>
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="tel:0896686668"
                    className="flex items-center space-x-1 text-[#623e2a] hover:text-[#623e2a]/80"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0896.68.66.68</span>
                  </a>
                  <span className="text-[#623e2a]/30">|</span>
                  <a
                    href="mailto:info@latienvilla.vn"
                    className="flex items-center space-x-1 text-[#623e2a] hover:text-[#623e2a]/80"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyContact;
