import React from 'react';
import { Calendar, CheckCircle, Clock, Building2, Truck, Key } from 'lucide-react';

interface ProgressItem {
  phase: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: React.ComponentType<any>;
}

const progressItems: ProgressItem[] = [
  {
    phase: "Giai đoạn 1",
    title: "Khởi công xây dựng",
    description: "Hoàn thành san lấp mặt bằng, hạ tầng kỹ thuật",
    date: "Q2/2024",
    status: "completed",
    icon: Building2
  },
  {
    phase: "Giai đoạn 2", 
    title: "Xây dựng cơ sở hạ tầng",
    description: "Hoàn thiện đường nội bộ, hệ thống điện nước",
    date: "Q4/2024",
    status: "current",
    icon: Truck
  },
  {
    phase: "Giai đoạn 3",
    title: "Xây dựng villa",
    description: "Thi công hoàn thiện các căn villa mẫu",
    date: "Q2/2025",
    status: "upcoming",
    icon: Building2
  },
  {
    phase: "Giai đoạn 4",
    title: "Hoàn thiện nội thất",
    description: "Lắp đặt nội thất cao cấp, tiện ích cộng đồng",
    date: "Q3/2025",
    status: "upcoming",
    icon: CheckCircle
  },
  {
    phase: "Giai đoạn 5",
    title: "Bàn giao",
    description: "Bàn giao villa hoàn thiện cho khách hàng",
    date: "Q4/2025",
    status: "upcoming",
    icon: Key
  }
];

const Progress: React.FC = () => {
  return (
    <section id="progress" className="py-20 bg-gradient-to-br from-[#f4f1ed] to-[#efebe5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23623e2a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#623e2a]/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5 text-[#623e2a]" />
            <span className="text-[#623e2a] font-medium text-sm">Tiến độ dự án</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#623e2a] mb-6">
            Tiến Độ Xây Dựng
          </h2>
          <p className="text-lg text-[#623e2a]/70 max-w-3xl mx-auto leading-relaxed">
            Theo dõi tiến độ xây dựng La Tiên Villa với lộ trình rõ ràng, 
            đảm bảo bàn giao đúng hẹn với chất lượng hoàn hảo.
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-[#623e2a]/20"></div>
            
            {/* Progress Items */}
            <div className="space-y-12">
              {progressItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full border-4 ${
                        item.status === 'completed' 
                          ? 'bg-green-500 border-green-200' 
                          : item.status === 'current'
                          ? 'bg-[#623e2a] border-[#623e2a]/30 animate-pulse'
                          : 'bg-gray-300 border-gray-200'
                      }`}></div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#623e2a]/10 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        item.status === 'current' ? 'ring-2 ring-[#623e2a]/20' : ''
                      }`}>
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : item.status === 'current'
                              ? 'bg-[#623e2a]/10 text-[#623e2a]'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.phase}
                          </span>
                          <div className={`p-2 rounded-lg ${
                            item.status === 'completed'
                              ? 'bg-green-100 text-green-600'
                              : item.status === 'current'
                              ? 'bg-[#623e2a]/10 text-[#623e2a]'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-[#623e2a] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#623e2a]/70 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Date */}
                        <div className="flex items-center space-x-2 text-[#623e2a]/60">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-[#623e2a]/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-[#623e2a]/70">Pháp lý hoàn thiện</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#623e2a] mb-2">65%</div>
                <div className="text-[#623e2a]/70">Tiến độ xây dựng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Q4/2025</div>
                <div className="text-[#623e2a]/70">Dự kiến bàn giao</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
