import { useState, useEffect, useCallback } from 'react';

interface UseImageSliderProps {
  images: any[];
  autoPlay?: boolean;
  interval?: number;
}

export const useImageSlider = ({ 
  images, 
  autoPlay = true, 
  interval = 5000 
}: UseImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);
  
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);
  
  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    currentImage: images[currentIndex]
  };
};
