"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { H1, H4, H5 } from "../comman/Heading";
import Button, { ButtonWhatapp,ButtonAbn } from "../comman/Button";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import Link from "next/link";
function Sliderwrapper() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Parallax, Pagination]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg relative"
          data-swiper-parallax="-23%"
        ></div>
           <div className="flex flex-col justify-center items-start lg:px-32 md:px-28 px-10 gap-5 absolute lg:top-[190px]  md:top-[142px] top-[85px] z-50">
            <H1
              heading="Welcome to Homely Hills Homestays"
              className="font-bold text-white leading-normal uppercase"
            />
            <H4
              heading="Embrace budget friendly off beat home stays in Garhwal region of Uttarakhand"
              className="lg:pr-[150px] text-white"
            />

            <div>
            <div className="flex items-center gap-2">
              <Link href="tel:9421343270">
                <Button className="px-3 py-2 bg-green-950" buttonname={"Call Us"} />
              </Link>
              <Link href="https://abnb.me/6StR3kWuQBb">
                <ButtonAbn className="px-3 py-2 bg-red-500  " buttonname={"Book  Now  "} />
              </Link>
            </div>
            </div>
          </div>
          <SwiperSlide className="relative bg-[url('/images/Homestay/l01.jpg')] bg-center bg-no-repeat bg-cover">        
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('/images/Homestay/l04.jpeg')] bg-center bg-no-repeat bg-cover brightness-75">       
        </SwiperSlide>
       
        <SwiperSlide className="relative bg-[url('/images/Homestay/l03.jpg')] bg-center bg-no-repeat bg-cover">       
        </SwiperSlide>
        <SwiperSlide className="relative bg-[url('/images/Homestay/l05.jpg')] bg-center bg-no-repeat bg-cover brightness-75">       
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliderwrapper;
