import { useRef, useState, useCallback } from 'react';
import { SwiperRef } from 'swiper/react';

interface UseSwiperNavigationProps {
  initialSlide?: number;
  onSlideChange?: (swiper: any) => void;
  onInit?: (swiper: any) => void;
}

export const useSwiperNavigation = ({
  initialSlide,
  onSlideChange,
  onInit,
}: UseSwiperNavigationProps = {}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialSlide || 0);
  const [totalSlides, setTotalSlides] = useState(0);

  

  const handleSlideChange = useCallback(
    (swiper: any) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      setActiveIndex(swiper.activeIndex);
      onSlideChange?.(swiper);
    },
    [onSlideChange],
  );

  const handleSwiperInit = useCallback(
    (swiper: any) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      setActiveIndex(swiper.activeIndex);
      setTotalSlides(swiper.slides.length);
      onInit?.(swiper);
    },
    [onInit],
  );

  const goPrev = useCallback(() => {
    if (!isBeginning) {
      swiperRef.current?.swiper.slidePrev();
    }
  }, [isBeginning]);

  const goNext = useCallback(() => {
    if (!isEnd) {
      swiperRef.current?.swiper.slideNext();
    }
  }, [isEnd]);

  const goToSlide = useCallback((index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  }, []);

  const canGoPrev = !isBeginning;
  const canGoNext = !isEnd;
  const progress = totalSlides ? (activeIndex + 1) / totalSlides : 0;

  return {
    swiperRef,

    isBeginning,
    isEnd,
    activeIndex,
    totalSlides,
    canGoPrev,
    canGoNext,
    progress,

    handleSlideChange,
    handleSwiperInit,
    goPrev,
    goNext,
    goToSlide,

    currentSlide: activeIndex + 1,
    slidesCount: totalSlides,
    hasMultipleSlides: totalSlides > 1,
  };
};
