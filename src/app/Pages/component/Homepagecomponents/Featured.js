"use client";
import Image from "next/image";
import { H1,H4, H5 } from "../comman/Heading";
function Featured() {
  return (
    <>
      <div className="container-fluid py-[80px] bg-[#f2f2f2] ">
        <div className="container mx-auto">
          <div className="grid grid-col-1 lg:grid-cols-2 gap-8 px-3 ">
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="flex flex-row items-center justify-center ">
                <Image alt="Homestays pic"
                  src="/images/Homestay/01.jpg"
                  className="rounded-md drop-shadow-lg"
                  width="500"
                  height="500"
                />
              </div>
              <div className="flex felx-row justify-center">
                <Image alt="Homestays pic"
                  src="/images/Homestay/H01.jpg"
                  className="rounded-md drop-shadow-lg"
                  width="500"
                  height="500"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 relative lg:pr-32 lg:p-8">
              <div className="h-[200px] w-[200px]  bg-green-950 rounded-b-full absolute right-0 top-0 opacity-40"></div>

              <H1
                heading="About Us"
                className="font-bold text-[#835C3B] leading-normal uppercase z-10"
              />
              <H5
                heading="Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life, complete with the comforts of home, delicious homemade garhwali meals, serene budget-friendly stays, exciting camping adventures, and the mesmerizing charm of stargazing  and moonrise in the high-altitude villages of Uttarakhand."
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 bg-green-800 lg:my-0 my-16 h-[500px] relative">
        <div className="h-[200px] w-[200px]  bg-white rounded-b-full absolute lg:left-[70px] left-[20px] top-0 opacity-40"></div>

        <div className="container mx-auto lg:my-10">
          <div className="grid grid-col-1 lg:grid-cols-2 gap-8 px-3 center">
            <div className="flex flex-col justify-center items-start gap-5">
              <H1
                heading="Homely Hills, Myani "
                className="font-bold text-white leading-normal uppercase "
              />
              <H4
                heading=" Experience the embrace of Garhwali village life at Homely Hills Homestay, our first homestay in Myani village, Tehri Garhwal District, Uttarakhand. This charming homestay is situated just 55 km away from the 'Queen of Hills,' Mussoorie. It is located at an altitude of 1800 meters above sea level, adorned with snowy blankets during winter and lush green beauty during summers. Perfectly suited for a serene getaway."
                className="text-white"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-8 ">
              {/* <div className="flex flex-row items-center justify-center">
                <Image alt="Homestays pic"
                  src="/images/Homestay/V04.jpg"
                  className="rounded-md drop-shadow-lg"
                  width="500"
                  height="500"
                />
              </div> */}
                <Image alt="Homestays pic"
                  src="/images/Homestay/V04.jpg"
                  className="rounded-md drop-shadow-lg"
                  width="500"
                  height="500"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Featured;
