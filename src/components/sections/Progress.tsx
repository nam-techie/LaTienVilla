import React from 'react';
import { FileText, Scale } from 'lucide-react';

const Progress: React.FC = () => {
  return (
    <section id="progress" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Pháp lý/ Chính sách bán hàng
          </h2>
          {/* Decorative wavy lines */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
            <div className="w-20 h-1 bg-orange-300 rounded-full"></div>
            <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
            <div className="w-12 h-1 bg-orange-300 rounded-full"></div>
            <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Legal Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Policy Card */}
            <button 
              onClick={() => window.open('https://drive.google.com/drive/folders/1nfp79IZObPi-Z6CIGtcVNLVqbE2QhmnV', '_blank')}
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-orange-400/50 hover:ring-4 hover:ring-orange-400/30"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-300">
                  <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20 Q90,30 80,40 Q70,50 80,60 Q90,70 80,80 Q70,90 60,80 Q50,70 40,80 Q30,90 20,80 Q10,70 20,60 Q10,50 20,40 Q10,30 20,20 Z" fill="currentColor"/>
                </svg>
                    </div>

              {/* Logo */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <FileText className="w-8 h-8 text-white" />
                          </div>
                <div className="text-white font-bold text-lg">LA TIÊN VILLA</div>
                        </div>

              {/* Main content */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">
                  Chính Sách Bán Hàng
                        </h3>
                <p className="text-white/80 italic text-sm group-hover:text-white transition-colors">
                  Chính Sách Bán Hàng
                </p>
              </div>
            </button>

            {/* Legal Documents Card */}
            <button 
              onClick={() => window.open('https://drive.google.com/drive/folders/12U68oHOdh5UpYthXUO6KTrAxkyEUqU5M', '_blank')}
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-orange-400/50 hover:ring-4 hover:ring-orange-400/30"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-300">
                  <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20 Q90,30 80,40 Q70,50 80,60 Q90,70 80,80 Q70,90 60,80 Q50,70 40,80 Q30,90 20,80 Q10,70 20,60 Q10,50 20,40 Q10,30 20,20 Z" fill="currentColor"/>
                </svg>
                        </div>
              
              {/* Logo */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Scale className="w-8 h-8 text-white" />
                      </div>
                <div className="text-white font-bold text-lg">LA TIÊN VILLA</div>
        </div>

              {/* Main content */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">
                  Pháp Lý Dự Án
                </h3>
                <p className="text-white/80 italic text-sm group-hover:text-white transition-colors">
                  Pháp lý dự án
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;