"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { EffectCube, Pagination } from "swiper/modules";

function CardImages() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/Homestay/01.jpg"
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/Homestay/02.jpg"
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/Homestay/03.jpg"
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/Homestay/04.jpg"
            className="rounded-md drop-shadow-lg"
            width="500"
            height="500"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CardImages;
