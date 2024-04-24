"use client";
import { FC, JSX, ReactNode, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  title: string;
  data: any[];
}

const Carousel: FC<Props> = ({ title, data }): JSX.Element => {
  const swiperRef = useRef<SwiperType>();
  const [sliderPerView, setSliderPerView] = useState(3);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 660) {
      setSliderPerView(1.2);
    } else if (width < 1024) {
      setSliderPerView(2.2);
    } else setSliderPerView(3);
  }, [width]);

  return (
    <>
      <div className="pt-5 md:pt-10">
        <h1 className="my-20 text-white text-6xl">{title} Movies</h1>
        <Swiper
          spaceBetween={"24px"}
          slidesPerView={sliderPerView}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data?.map((item, i) => (
            <SwiperSlide className="h-full" key={i}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
