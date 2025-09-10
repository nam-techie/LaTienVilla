// Static data for La Tiên Villa landing page
import {
  Gift, Star, Shield, Building2, Award, CheckCircle,
  MapPin, Waves, Car, TreePine, Coffee, Dumbbell,
  ShoppingBag, Sparkles, Heart, Target, Home
} from 'lucide-react';
import type { Offer, NavItem, LocationPoint, NearbyAttraction, Amenity, ProjectInfo, VillaType } from '../types';

// Navigation items
export const navItems: NavItem[] = [
  { label: 'Giới thiệu', section: 'about' },
  { label: 'Vị trí', section: 'location' },
  { label: 'Tiện ích', section: 'features' },
  { label: 'Mặt bằng', section: 'masterplan' },
  { label: 'Ưu đãi', section: 'offers' }
];

// Special offers data
export const offers: Offer[] = [
  {
    icon: Gift,
    title: "Ưu đãi thanh toán",
    description: "Chỉ cần thanh toán 30% đến khi nhận nhà, hỗ trợ vay 70%",
    value: "30%"
  },
  {
    icon: Star,
    title: "Tổng chiết khấu",
    description: "Booking sớm & thanh toán sớm",
    value: "Lên đến 17%"
  },
  {
    icon: Building2,
    title: "Quà tặng nội thất",
    description: "Ghế Minoti Trio Armchair cho 100 KH tiên phong",
    value: "200 triệu"
  },
  {
    icon: Award,
    title: "Chiết khấu nội thất",
    description: "Bàn giao full nội thất cao cấp",
    value: "1,6 tỷ/căn"
  },
  {
    icon: Shield,
    title: "Pháp lý minh bạch",
    description: "Sổ đỏ sở hữu lâu dài, hoàn chỉnh 100%",
    value: "Đảm bảo"
  },
  {
    icon: CheckCircle,
    title: "Bàn giao hoàn thiện",
    description: "Full nội thất Home Living chuẩn resort",
    value: "100%"
  }
];

// Location points
export const locationPoints: LocationPoint[] = [
  {
    name: "Sân bay Cam Ranh",
    distance: "30 phút di chuyển",
    icon: MapPin,
    color: "blue"
  },
  {
    name: "Trung tâm Nha Trang",
    distance: "15 phút di chuyển",
    icon: Building2,
    color: "green"
  },
  {
    name: "Bến du thuyền",
    distance: "5 phút đi bộ",
    icon: Waves,
    color: "purple"
  },
  {
    name: "Quốc lộ 1A",
    distance: "Kết nối Bắc - Nam",
    icon: Car,
    color: "orange"
  }
];

// Nearby attractions
export const nearbyAttractions: NearbyAttraction[] = [
  {
    name: "Vinpearl Land",
    distance: "10 phút di chuyển",
    icon: Star,
    color: "yellow"
  },
  {
    name: "Bãi biển Nha Trang",
    distance: "Mặt tiền trực tiếp",
    icon: Waves,
    color: "teal"
  },
  {
    name: "Đảo Hòn Tre",
    distance: "15 phút đi thuyền",
    icon: TreePine,
    color: "green"
  }
];

// Amenities by category
export const amenities: Record<string, Amenity[]> = {
  culture: [
    {
      name: "Quảng trường Âm nhạc",
      description: "Sân khấu ngoài trời với chương trình nghệ thuật thường xuyên",
      icon: Star,
      category: "culture"
    },
    {
      name: "Nhà hát Đó",
      description: "Không gian biểu diễn chuyên nghiệp, âm thanh hiện đại",
      icon: Building2,
      category: "culture"
    },
    {
      name: "Sân khấu nhạc nước",
      description: "Show diễn nghệ thuật kết hợp ánh sáng và âm nhạc",
      icon: Waves,
      category: "culture"
    }
  ],
  entertainment: [
    {
      name: "Yacht Clubhouse",
      description: "Câu lạc bộ du thuyền cao cấp",
      icon: Waves,
      category: "entertainment"
    },
    {
      name: "Hồ bơi Infinity",
      description: "Hồ bơi vô cực view biển",
      icon: Waves,
      category: "entertainment"
    },
    {
      name: "Healing Center",
      description: "Trung tâm chăm sóc sức khỏe",
      icon: Heart,
      category: "entertainment"
    },
    {
      name: "Song Spa",
      description: "Spa cao cấp phong cách Á Đông",
      icon: Sparkles,
      category: "entertainment"
    }
  ],
  sports: [
    {
      name: "Sân Pickleball",
      description: "Môn thể thao thịnh hành hiện nay",
      icon: Target,
      category: "sports"
    },
    {
      name: "Thể thao biển Vasada",
      description: "Lướt sóng, chèo thuyền kayak",
      icon: Waves,
      category: "sports"
    },
    {
      name: "Sân thể thao tổng hợp",
      description: "Tennis, bóng rổ, cầu lông",
      icon: Dumbbell,
      category: "sports"
    }
  ],
  dining: [
    {
      name: "Nhà hàng Nhật ShiBui",
      description: "Tinh hoa ẩm thực Nhật Bản",
      icon: Coffee,
      category: "dining"
    },
    {
      name: "Hispania Restaurant",
      description: "Hương vị Tây Ban Nha đích thực",
      icon: Star,
      category: "dining"
    },
    {
      name: "Natura Restaurant",
      description: "Ẩm thực hữu cơ, thân thiện môi trường",
      icon: TreePine,
      category: "dining"
    },
    {
      name: "Shophouse 24/7",
      description: "Phố thương mại sầm uất",
      icon: ShoppingBag,
      category: "dining"
    }
  ]
};

// Villa types
export const villaTypes: VillaType[] = [
  {
    name: "Oceanview Villa",
    description: "Biệt thự mặt biển với tầm nhìn panorama ra vịnh Nha Trang, thiết kế hiện đại hòa quyện với thiên nhiên.",
    area: "8×20m - 12×20m",
    price: "Từ 12,7 tỷ",
    icon: Waves
  },
  {
    name: "Central Villa",
    description: "Biệt thự trung tâm khu vực, gần các tiện ích chính, phù hợp cho gia đình và đầu tư cho thuê.",
    area: "8×20m - 10×20m",
    price: "Từ 12,7 tỷ",
    icon: Building2
  },
  {
    name: "Garden Villa",
    description: "Biệt thự vườn với không gian xanh mát, thiết kế riêng tư và yên tĩnh cho nghỉ dưỡng.",
    area: "10×20m - 12×20m",
    price: "Từ 13,5 tỷ",
    icon: TreePine
  },
  {
    name: "Hidden Villa",
    description: "Biệt thự ẩn mình giữa thiên nhiên, tận hưởng sự riêng tư tuyệt đối và không gian xanh.",
    area: "8×20m - 10×20m",
    price: "Từ 12,7 tỷ",
    icon: Star
  },
  {
    name: "Nature Villa",
    description: "Biệt thự hòa mình với thiên nhiên, thiết kế sinh thái bền vững và thân thiện môi trường.",
    area: "10×20m",
    price: "Từ 13,2 tỷ",
    icon: TreePine
  },
  {
    name: "Florist Villa",
    description: "Biệt thự vườn hoa với cảnh quan đa dạng, không gian sống thơ mộng giữa sắc hoa.",
    area: "12×20m",
    price: "Từ 14,8 tỷ",
    icon: Sparkles
  }
];

// Project information
export const projectInfo: ProjectInfo[] = [
  {
    label: "Vị trí",
    value: "Đại lộ Phạm Văn Đồng, Nha Trang",
    description: "Tựa sơn hướng hải",
    icon: MapPin,
    color: "blue"
  },
  {
    label: "Quy mô",
    value: "Quần thể đô thị 44ha",
    description: "668 căn biệt thự",
    icon: Building2,
    color: "green"
  },
  {
    label: "Mật độ xây dựng",
    value: "19,52%",
    description: "Không gian xanh tối đa",
    icon: TreePine,
    color: "emerald"
  },
  {
    label: "Chủ đầu tư",
    value: "KDI Holdings",
    description: "Đồng phát triển Masterise Homes",
    icon: Award,
    color: "orange"
  },
  {
    label: "Quản lý vận hành",
    value: "The Ascott Limited",
    description: "Tiêu chuẩn quốc tế",
    icon: Star,
    color: "yellow"
  },
  {
    label: "Bàn giao",
    value: "Full nội thất cao cấp",
    description: "Dự kiến Q4/2026",
    icon: Home,
    color: "purple"
  },
  {
    label: "Giá bán",
    value: "Từ 12,7 tỷ/căn",
    description: "Ưu đãi đặc biệt",
    icon: Heart,
    color: "rose"
  }
];
