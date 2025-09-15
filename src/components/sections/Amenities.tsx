import React, { useState } from 'react';
import {
    Waves, Trees, Dumbbell, UtensilsCrossed, Car, Wifi, Shield,
    Baby, Building2, Coffee, Lock, Theater, Umbrella, Landmark,
    School, Building, Plane, Droplets, Heart, Utensils
} from 'lucide-react';
import { X } from 'lucide-react';

// Import banner images
import congVien from '../../assets/pictures/tien-ich/cong-vien-san-ho-1.jpg';
import khuVuiChoi from '../../assets/pictures/tien-ich/khu-vui-choi-cho-be.jpg';
import nhaMau from '../../assets/pictures/tien-ich/nha-hat-do-la-tien-villa-1.jpg';
import quangTruong from '../../assets/pictures/tien-ich/quang-truong-am-nhac-la-tien-villa.jpg';
import trangTam from '../../assets/pictures/tien-ich/trung-tam-hoi-nghi.jpg';
import sanPickleball from '../../assets/pictures/tien-ich/4-san-pickleball.jpg';
import hoCanh from '../../assets/pictures/tien-ich/ho-canh-quan.jpg';
import khuTheThao from '../../assets/pictures/tien-ich/khu-the-thao.jpg';

const bannerImages = [
    congVien,
    khuVuiChoi,
    nhaMau,
    quangTruong,
    trangTam
];

// Thêm interface cho banner data
interface BannerSlide {
    image: string;
    title: string;
    description: string;
}

const bannerSlides: BannerSlide[] = [
    {
        image: congVien,
        title: "Công viên San Hô",
        description: "Không gian xanh mát giữa lòng dự án"
    },
    {
        image: khuVuiChoi,
        title: "Khu vui chơi trẻ em",
        description: "Thiên đường giải trí cho thế hệ tương lai"
    },
    {
        image: nhaMau,
        title: "Nhà hát The Đó",
        description: "Trung tâm nghệ thuật đương đại"
    },
    {
        image: quangTruong,
        title: "Quảng trường âm nhạc",
        description: "Điểm hẹn văn hóa nghệ thuật"
    },
    {
        image: trangTam,
        title: "Trung tâm hội nghị",
        description: "Không gian tổ chức sự kiện đẳng cấp"
    }
];

interface AmenityProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const AmenityCard: React.FC<AmenityProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="text-[#623e2a] mb-4">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-[#623e2a] mb-2">{title}</h3>
        <p className="text-[#623e2a]/70 text-sm">{description}</p>
    </div>
);

const imageGrid = [
    {
        image: congVien,
        title: "Công viên San Hô",
        description: "Không gian xanh mát giữa lòng dự án",
        gridClass: "md:col-span-3 md:row-span-2"
    },
    {
        image: hoCanh,
        title: "Hồ Cảnh Quan",
        description: "Không gian thư giãn tuyệt vời",
        gridClass: "md:col-span-2 md:row-span-1"
    },
    {
        image: khuVuiChoi,
        title: "Khu vui chơi trẻ em",
        description: "Thiên đường giải trí cho thế hệ tương lai",
        gridClass: "md:col-span-2 md:row-span-1"
    },
    {
        image: nhaMau,
        title: "Nhà hát The Đó",
        description: "Trung tâm nghệ thuật đương đại",
        gridClass: "md:col-span-2 md:row-span-2"
    },
    {
        image: sanPickleball,
        title: "Sân Pickleball",
        description: "Khu vực thể thao đa năng",
        gridClass: "md:col-span-3 md:row-span-1"
    },
    {
        image: khuTheThao,
        title: "Khu Thể Thao",
        description: "Không gian rèn luyện sức khỏe",
        gridClass: "md:col-span-3 md:row-span-1"
    },
    {
        image: quangTruong,
        title: "Quảng trường âm nhạc",
        description: "Điểm hẹn văn hóa nghệ thuật",
        gridClass: "md:col-span-3 md:row-span-1"
    },
    {
        image: trangTam,
        title: "Trung tâm hội nghị",
        description: "Không gian tổ chức sự kiện đẳng cấp",
        gridClass: "md:col-span-2 md:row-span-1"
    }
];

const Amenities: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const amenities = [
        {
            title: "Tiện ích nội khu",
            items: [
                {
                    icon: Droplets, // Replace Pool with Droplets
                    title: "Hồ bơi vô cực view biển",
                    description: "Trải nghiệm ngắm hoàng hôn đầy cảm xúc"
                },
                {
                    icon: Waves,
                    title: "Bãi tắm riêng tư",
                    description: "Tận hưởng làn nước trong xanh, không gian yên tĩnh"
                },
                {
                    icon: Baby,
                    title: "Khu vui chơi trẻ em",
                    description: "An toàn, sáng tạo cho thế hệ tương lai"
                },
                {
                    icon: Heart, // Replace Spa with Heart
                    title: "Gym, Yoga & Spa",
                    description: "Trung tâm chăm sóc sức khỏe – tái tạo năng lượng mỗi ngày"
                },
                {
                    icon: Utensils,
                    title: "Khu BBQ & picnic",
                    description: "Kết nối cộng đồng, gắn kết gia đình"
                },
                {
                    icon: Trees, // Replace Park with Palm
                    title: "Công viên cây xanh",
                    description: "Không gian sống xanh, trong lành"
                },
                {
                    icon: Building2,
                    title: "Trung tâm thương mại",
                    description: "Đáp ứng mọi nhu cầu mua sắm hiện đại"
                },
                {
                    icon: Coffee,
                    title: "Nhà hàng & café",
                    description: "Đa dạng phong cách ẩm thực"
                },
                {
                    icon: Lock,
                    title: "An ninh 24/7",
                    description: "Hệ thống an ninh và bảo vệ chuyên nghiệp"
                },
                {
                    icon: Theater,
                    title: "Nhà hát The Đó",
                    description: "Nhà hát nghệ thuật đương đại nâng tầm đời sống tinh thần"
                },
                {
                    icon: Umbrella,
                    title: "Libera Beach Club",
                    description: "Điểm hẹn giải trí sôi động"
                },
                {
                    icon: Landmark,
                    title: "Đại lộ danh vọng",
                    description: "Walk of Fame & khu nhạc nước – biểu tượng sống động"
                }
            ]
        },
        {
            title: "Kết nối ngoại khu",
            items: [
                {
                    icon: Building,
                    title: "Du lịch – giải trí",
                    description: "Tháp Bà Ponagar, Hòn Chồng, VinWonders Nha Trang"
                },
                {
                    icon: School,
                    title: "Hạ tầng xã hội",
                    description: "Hệ thống trường học, bệnh viện quốc tế, trung tâm y tế"
                },
                {
                    icon: Plane,
                    title: "Kết nối giao thông",
                    description: "Vài phút đến sân bay Cam Ranh và trục giao thông chính"
                }
            ]
        }
    ];

    return (
        <section id="amenities" className="bg-gradient-to-br from-[#f4f1ed] to-[#efebe5]">
            {/* Photo Grid */}
            <div className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 aspect-[16/9]">
                    {imageGrid.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.gridClass}`}
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                    />
                </div>
            )}

            <div className="container mx-auto px-4 py-20">
                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#623e2a] mb-6">
                        Tiện ích Biệt thự Libera Nha Trang
                    </h2>
                    <p className="text-lg text-[#623e2a]/70 max-w-3xl mx-auto mb-8">
                        Sở hữu vị trí đắc địa bên bờ biển cùng vẻ đẹp thiên nhiên tuyệt mỹ, Libera Nha Trang không chỉ mang đến một không gian sống thăng hoa mà còn kiến tạo một hệ sinh thái tiện ích – dịch vụ đẳng cấp đáp ứng trọn vẹn mọi nhu cầu nghỉ dưỡng, giải trí và trải nghiệm.
                    </p>
                </div>

                {/* Amenities Sections */}
                {amenities.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#623e2a] mb-8 text-center">
                            {section.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {section.items.map((item, index) => (
                                <AmenityCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Conclusion */}
                <div className="text-center mt-16">
                    <p className="text-lg text-[#623e2a]/70 max-w-3xl mx-auto">
                        Mỗi ngày tại đây là một trải nghiệm mới mẻ: hòa mình vào thiên nhiên xanh mát, tận hưởng chuỗi tiện ích cao cấp và kết nối cùng cộng đồng cư dân tinh hoa – để biến từng khoảnh khắc trở thành kỷ niệm đáng nhớ.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Amenities;



