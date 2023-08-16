"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import {BsLinkedin,BsInstagram} from "react-icons/Bs"

import { H1, H5, H3, H4 } from "../comman/Heading";
import {
  BiBowlHot,
  BiSolidSun,
  BiCloudSnow,
  BiMoviePlay,
} from "react-icons/Bi";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

function Feedback() {
  return (
    <>

<div className="flex justify-center container mx-auto mt-5">
<H1 heading="Guest testimonials " className="mx-auto" />

</div>
      <div className="container mx-auto">
        <Swiper
          breakpoints={{
            940: { slidesPerView: 1 },
            420: { slidesPerView: 1 },
          }}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
              <div className=" bg-transperant">
                <div className=" flex justify-center items-center gap-8 pt-32">
                  <div className="my-1">
                    <Image
                      className="shadow-lg rounded-full"
                      src="/images/Homestay/F01.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex flex-col w-80 gap-3 relative">
                    <H5
                      heading="“Homely hills is Full with nature, full with happiness, full with stability, full with peace

                      I think every body who is seeking peace should visit here. Close to nature, close to heart.” "
                      className=""
                    />
                    <H4
                      heading="— Saumya Shukla"
                      className="z-10"
                    />
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
              <div className=" bg-transperant">
                <div className=" flex justify-center items-center gap-8 pt-44">
                  <div className="my-1">
                    <Image
                      className="rounded-full shadow-lg"
                      src="/images/Homestay/F02.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex flex-col w-80 gap-3">
                    <H5
                      heading="If you wants to go away from hustling of metropolitan cities and wants to spend time with yourself, Homely Hills is for you."
                      className=""
                    />
                    <H4 heading="— Pankaj Sharma" />
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
              <div className=" bg-transperant">
                <div className=" flex justify-center items-center gap-8 pt-44">
                  <div className="my-1">
                    <Image
                      className="rounded-full shadow-lg"
                      src="/images/Homestay/F03.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex flex-col w-80 gap-3">
                    <H5
                      heading="If you wants to go away from hustling of metropolitan cities and wants to spend time with yourself, Homely Hills is for you."
                      className=""
                    />
                    <H4 heading="— Vikash Rajput" />
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
              <div className=" bg-transperant">
                <div className=" flex justify-center items-center gap-8 pt-44">
                  <div className="my-1">
                    <Image
                      className="rounded-full shadow-lg"
                      src="/images/Homestay/F04.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex flex-col w-80 gap-3">
                    <H5
                      heading="I stayed at Homely Hills in Garhwal, Uttarakhand. Ate yummy local food, enjoyed calm mountains. Perfect peaceful break."
                      className=""
                    />
                    <H4 heading="— Divyam semwal" />
                  </div>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* founder */}
      <div className="container mx-auto my-9">
        <div className="flex flex-col items-center text-center  my-6">
          <H1 heading="Meet our Founders" className="my-5"/>
        </div>
        <div className="flex flex-col gap-5 items-center ">
          <div className=" flex  lg:flex-row flex-col justify-center items-center gap-8 w-[90%] lg:w-[70%] bg-gray-50  rounded-lg relative ">
            <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute lg:right-0 top-[288px] lg:top-0 opacity-40"></div>
            <div className="">
              <Image
                className="shadow-lg rounded-lg"
                src="/images/Homestay/Founder01.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 lg:p-3 p-2 ">
              <H4 heading="— Harshit Panday" />
              <H5
                heading="Listen to what our co-founder says: 'I have lived and traveled all across Uttarakhand and realized that there are many offbeat, underrated places which are not commercialized but provide incredible experiences compared to a few highly commercialized treks and locations. My objective through the Homely Hills initiative is to ensure that people should get what they want. When they think about mountains, they envision peace, good weather, delicious food, trekking, a rustic stay, and a budget-friendly getaway. Unfortunately, some of them end up spending a lot of money visiting highly crowded commercial treks and places. Through Homely Hills and our homestays, we are committed to providing all of these under one roof.'"
                className=""
              />
              <div className="flex gap-4 text-lg">
                <Link href="https://www.linkedin.com/in/harshit-pandey-5a4279121">
                    <BsLinkedin />
                </Link>
                <Link href="https://instagram.com/harshitpandeyind?igshid=MmIzYWVlNDQ5Yg==" className="text-lg">
                    <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex  lg:flex-row flex-col justify-center items-center gap-8 w-[90%] lg:w-[70%] bg-gray-50  rounded-lg relative ">
            <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute lg:right-0 top-[288px] lg:top-0 opacity-40"></div>
            <div className="">
              <Image
                className="shadow-lg rounded-lg"
                src="/images/Homestay/Founder03.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 lg:p-3 p-2 ">
              <H4 heading="— Ajayveer Choudhary" />
              <H5
                heading="At Homely Hills, we've crafted a space where modern comforts meet traditional charm. Our goal is to offer you a chance to disconnect from the hustle and bustle of everyday life and reconnect with nature, local traditions, and warm hospitality. From stargazing under the clear Himalayan skies to embarking on guided hikes that lead you to hidden gems, every moment here is a step toward rejuvenation and exploration."
                className=""
              />
                  <div className="flex gap-4 text-lg">
                <Link href="https://www.linkedin.com/in/ajay-veer/">
                    <BsLinkedin />
                </Link>
                <Link href="https://instagram.com/avs.choudhry?igshid=MzRlODBiNWFlZA==" className="text-lg">
                    <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  my-3">
          <H1 heading="Meet the host " />
          <div className="flex lg:flex-row flex-col  gap-10 justify-center my-5 p-4">
            <div className="flex flex-col items-start gap-2  bg-gray-100 shadow-lg rounded-lg lg:w-[30%]">
              <div>
                <Image
                  className=" rounded-lg"
                  src="/images/Homestay/host1.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col items-start text-start gap-1 p-3 ">
                <H3 heading="Amit Sajwan" />
                <H5 heading="If you're a mountain lover who appreciates forests, lofty mountains adorned with waterfalls, mountain trails, grazing cows, goats, and horses, farming scenes with people working in the fields, flower gardens, orchards, and snow-covered rocks, then Homely Hills is a must-visit destination wherein you will experience the essence of a typical garhwali village life, connect with the mountain's people, and have the opportunity to meet the region's friendly inhabitants." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
