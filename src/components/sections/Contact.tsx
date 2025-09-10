import React from 'react';
import { Phone, Mail, MapPin, Send, User, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import type { FormData } from '../../types';
import contactBg from '../../assets/pictures/output-241.jpg';

const Contact: React.FC = () => {
  const initialFormData: FormData = {
    fullName: '',
    phone: '',
    email: '',
    message: '',
    agreeToTerms: false
  };

  const {
    formData,
    updateField,
    handleSubmit,
    getFieldError,
    isSubmitting,
    isSuccess,
    hasErrors
  } = useForm(initialFormData);

  const onSubmit = async (data: FormData) => {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    // Here you would typically send data to your backend
  };

  // Calculate form completion percentage
  const getFormProgress = () => {
    const fields = ['fullName', 'email', 'phone'];
    const completedFields = fields.filter(field => formData[field as keyof FormData]).length;
    return Math.round((completedFields / fields.length) * 100);
  };

  const formProgress = getFormProgress();

  return (
    <section id="contact" className="relative py-20 overflow-hidden" style={{backgroundColor: '#f4f1ed'}}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="La Tiên Villa Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-800/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Đất Tiên Vịnh Ngọc
            </h2>
            <p className="font-sans text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Vui lòng điền thông tin, đội ngũ tư vấn sẽ liên hệ trong thời gian sớm nhất.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Form - Centered */}
            <div className="w-full max-w-lg">
              <div className="p-8 shadow-2xl border-0 rounded-3xl backdrop-blur-lg border border-white/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(244,241,237,0.9) 50%, rgba(239,235,229,0.85) 100%)'}}>
                <>
                  {/* Success State */}
                  {isSuccess && (
                    <div className="text-center mb-8 animate-bounce-in">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-green-700 mb-2">
                        Cảm ơn bạn!
                      </h3>
                      <p className="text-green-600 text-sm">
                        Chúng tôi sẽ liên hệ trong vòng 24h
                      </p>
                    </div>
                  )}

                  {/* Form Header */}
                  {!isSuccess && (
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl font-bold text-primary-800 mb-4">
                      Đất Tiên Vịnh Ngọc
                    </h3>
                    <p className="text-primary-700 text-sm leading-relaxed mb-4">
                      Vui lòng điền thông tin, đội ngũ tư vấn<br />
                      sẽ liên hệ trong thời gian sớm nhất.
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${formProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-primary-600">
                      Hoàn thành: {formProgress}%
                    </p>
                  </div>
                )}

                {/* Form */}
                {!isSuccess && (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit);
                  }} className="space-y-6">

                    {/* Full Name Input */}
                    <Input
                      label="Họ và tên"
                      type="text"
                      value={formData.fullName}
                      onChange={(value) => updateField('fullName', value)}
                      error={getFieldError('fullName')}
                      required
                      icon={<User className="w-5 h-5" />}
                      placeholder="Nhập họ và tên của bạn"
                    />

                    {/* Email Input */}
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => updateField('email', value)}
                      error={getFieldError('email')}
                      required
                      icon={<Mail className="w-5 h-5" />}
                      placeholder="example@email.com"
                    />

                    {/* Phone Input */}
                    <Input
                      label="Số điện thoại"
                      type="tel"
                      value={formData.phone}
                      onChange={(value) => updateField('phone', value)}
                      error={getFieldError('phone')}
                      required
                      icon={<Phone className="w-5 h-5" />}
                      placeholder="0123 456 789"
                    />

                    {/* Message Textarea */}
                    <Textarea
                      label="Yêu cầu tư vấn"
                      value={formData.message || ''}
                      onChange={(value) => updateField('message', value)}
                      icon={<MessageCircle className="w-5 h-5" />}
                      placeholder="Chia sẻ yêu cầu tư vấn của bạn..."
                      rows={3}
                      maxLength={500}
                    />

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3 mb-6">
                      <div className="relative flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={(e) => updateField('agreeToTerms', e.target.checked)}
                          className="w-5 h-5 text-orange-500 bg-white border-2 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 transition-all duration-300"
                          required
                        />
                        {formData.agreeToTerms && (
                          <CheckCircle className="w-5 h-5 text-green-500 absolute top-0 left-0 animate-bounce-in" />
                        )}
                      </div>
                      <label htmlFor="agreeToTerms" className="text-sm text-primary-700 leading-relaxed">
                        Tôi đồng ý với <span className="text-orange-600 font-semibold underline cursor-pointer hover:text-orange-700 transition-colors">điều khoản sử dụng</span> và cho phép La Tiên Villa liên hệ tư vấn
                        {getFieldError('agreeToTerms') && (
                          <div className="text-red-500 text-xs mt-1">{getFieldError('agreeToTerms')}</div>
                        )}
                      </label>
                    </div>

                    {/* Error Summary */}
                    {hasErrors && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in-up">
                        <p className="text-red-700 text-sm font-medium">
                          Vui lòng kiểm tra lại thông tin đã nhập
                        </p>
                      </div>
                    )}

                  <Button
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full font-bold text-lg py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:transform-none disabled:hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Đang gửi...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        <span>Gửi thông tin</span>
                      </div>
                    )}
                  </Button>
                </form>
                )}
              </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
