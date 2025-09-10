// Import hero background images
import hero from '../assets/pictures/hero.jpg';
import hero1 from '../assets/pictures/hero1.jpg';
import hero2 from '../assets/pictures/hero2.jpg';
import hero3 from '../assets/pictures/hero3.jpg';
import hero4 from '../assets/pictures/hero4.jpg';
import hero5 from '../assets/pictures/hero5.jpg';
import hero6 from '../assets/pictures/hero6.jpg';

// Import villa images from available pictures
import nhaTrang843 from '../assets/pictures/output-844.jpg';
import nhaTrang844 from '../assets/pictures/output-845.jpg';
import nhaTrang4551 from '../assets/pictures/output-858.jpg';
import nhaTrang998 from '../assets/pictures/output-861.jpg';
import nhaTrang4102 from '../assets/pictures/output-868.jpg';
import nhaTrang0521 from '../assets/pictures/output-871.jpg';

// Import main background image for parallax
import mainBackground from '../assets/pictures/output-844.jpg';

import type { HeroBackground, AlbumPage } from '../types';

// Hero background images from pictures folder
export const heroBackgrounds: HeroBackground[] = [
  {
    src: hero,
    title: "Tổng quan La Tiên Villa",
    subtitle: "Vẻ đẹp toàn cảnh dự án"
  },
  {
    src: hero1,
    title: "Thiên đường nghỉ dưỡng",
    subtitle: "Không gian xanh mát bên biển"
  },
  {
    src: hero2,
    title: "Villa cao cấp",
    subtitle: "Thiết kế hiện đại, sang trọng"
  },
  {
    src: hero3,
    title: "Kiến trúc độc đáo",
    subtitle: "Hòa mình cùng thiên nhiên"
  },
  {
    src: hero4,
    title: "Tiện ích đẳng cấp",
    subtitle: "Hệ sinh thái resort 5 sao"
  },
  {
    src: hero5,
    title: "Không gian sống xanh",
    subtitle: "Cảnh quan thiên nhiên tuyệt đẹp"
  },
  {
    src: hero6,
    title: "Vị trí kim cương",
    subtitle: "Mặt tiền biển Nha Trang"
  }
];

// Photo album data with multiple pages
export const albumPages: AlbumPage[] = [
  {
    leftImage: {
      src: nhaTrang843,
      title: "Tổng quan dự án",
      description: "Phối cảnh tổng thể khu villa nghỉ dưỡng La Tiên Villa với thiết kế hiện đại hòa quyện thiên nhiên"
    },
    rightImage: {
      src: nhaTrang844,
      title: "Hoàng hôn thơ mộng",
      description: "Khoảnh khắc vàng son khi mặt trời lặn xuống vịnh Nha Trang, tạo nên khung cảnh lãng mạn"
    }
  },
  {
    leftImage: {
      src: nhaTrang4551,
      title: "Thiết kế villa độc đáo",
      description: "Kiến trúc 'Lost in Nature' với những ngôi nhà biết thở, hòa mình cùng cảnh quan xanh mát"
    },
    rightImage: {
      src: nhaTrang998,
      title: "Tầm nhìn panorama",
      description: "View biển 180 độ tuyệt đẹp, mở ra không gian vô tận của đại dương xanh ngọc"
    }
  },
  {
    leftImage: {
      src: nhaTrang4102,
      title: "Cảnh quan sân vườn",
      description: "Không gian xanh mát với cây cối tươi tốt, tạo nên môi trường sống trong lành"
    },
    rightImage: {
      src: nhaTrang0521,
      title: "Tiến độ xây dựng",
      description: "Cập nhật tiến độ thi công mới nhất, dự án đang được triển khai theo đúng kế hoạch"
    }
  }
];

export { mainBackground };
