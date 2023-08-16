"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {H2, H5 } from "../comman/Heading";
import Image from "next/image";
import { Autoplay,EffectFade, Parallax, Pagination } from "swiper/modules";
function Gallery() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade,Parallax, Pagination]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="relative py-auto "
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="container mx-auto py-auto lg:my-12 lg:bg-gray-200 rounded-md lg:px-0 px-3">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 ">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="flex flex-row items-start justify-center ">
                  <Image alt="gallary img"
                    src="/images/Homestay/G01.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <Image alt="gallary img"
                    src="/images/Homestay/G02.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 relative lg:pr-32  ">
                <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute right-0 top-0 opacity-40"></div>
                <H2
                  heading="Jaunpuri Garhwali Culture
                  "
                  className="font-bold text-[#835C3B] leading-normal uppercase z-10"
                />
                <H5
                  heading="Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life, complete with the comforts of home, delicious homemade garhwali meals, serene budget-friendly stays, exciting camping adventures, and the mesmerizing charm of stargazing  and moonrise in the high-altitude villages of Uttarakhand."
                  className="textline"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto py-auto lg:my-12 lg:bg-gray-200 rounded-md lg:px-0 px-3">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 ">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="flex flex-row items-start justify-center ">
                  <Image alt="gallary img"
                    src="/images/Homestay/T01.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <Image alt="gallary img"
                    src="/images/Homestay/T02.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 relative lg:pr-32 ">
                <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute right-0 top-0 opacity-40"></div>
                <H2
                  heading="Trekking and camping

                  "
                  className="font-bold text-[#835C3B] leading-normal uppercase z-10 textline"
                />
                <H5
                  heading="Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life, complete with the comforts of home, delicious homemade garhwali meals, serene budget-friendly stays, exciting camping adventures, and the mesmerizing charm of stargazing  and moonrise in the high-altitude villages of Uttarakhand."
                  className="textline"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto py-auto lg:my-12 lg:bg-gray-200 rounded-md lg:px-0 px-3">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 ">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="flex flex-row items-start justify-center ">
                  <Image alt="gallary img"
                    src="/images/Homestay/R01.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <Image alt="gallary img"
                    src="/images/Homestay/R02.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 relative lg:pr-32 ">
                <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute right-0 top-0 opacity-40"></div>
                <H2
                  heading="Wooden homestay.


                  "
                  className="font-bold text-[#835C3B] leading-normal uppercase z-10 textline"
                />
                <H5
                  heading="Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life, complete with the comforts of home, delicious homemade garhwali meals, serene budget-friendly stays, exciting camping adventures, and the mesmerizing charm of stargazing  and moonrise in the high-altitude villages of Uttarakhand."
                  className="textline"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto py-auto lg:my-12 lg:bg-gray-200 rounded-md lg:px-0 px-3">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 ">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="flex flex-row items-start justify-center ">
                  <Image alt="gallary img"
                    src="/images/Homestay/Food01.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <Image alt="gallary img"
                    src="/images/Homestay/Food02.jpg"
                    className="rounded-md drop-shadow-lg"
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 relative lg:pr-32 ">
                <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute right-0 top-0 opacity-40"></div>
                <H2
                  heading="Authentic tastes of home cooked Garhwali Cuisine

                  "
                  className="font-bold text-[#835C3B] leading-normal uppercase z-10 textline"
                />
                <H5
                  heading="Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life, complete with the comforts of home, delicious homemade garhwali meals, serene budget-friendly stays, exciting camping adventures, and the mesmerizing charm of stargazing  and moonrise in the high-altitude villages of Uttarakhand."
                  className="textline"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
