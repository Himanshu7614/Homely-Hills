"use client"
import { ButtonWhatapp } from "./comman/Button";
import { BiLogoAirbnb,BiLogoInstagramAlt,BiLogoGmail,BiLogoGoogle,BiSolidPhoneCall } from "react-icons/Bi";
import { CiLocationOn } from "react-icons/Ci";
import {HiOutlineMenuAlt3} from "react-icons/Hi"
import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="container-fluid backdrop-blur-sm shadow-md bg-[#eefaffc3] w-full fixed top-0 left-0  font-serif py-2 z-50">
        <div className="container  mx-auto">
          <div className="flex flex-row mx-auto px-5 justify-between items-center bg-bgGrey relative text-textWhite">
          <div className="sm:flex flex-row justify-between items-center gap-10 hidden ">
          <div className="font-semibold flex gap-1 items-center duration-300">
                <Link href='/'>Home </Link>
              </div>
              {/* <div className="font-semibold flex gap-1 items-center duration-300">
                <Link href='/Pages/component/About'>What about us</Link>
              </div> */}
            </div>
            <div className="font-bold">
              <Image  alt="logo" src="/images/Logo.png" width="50" height="50" />
            </div>
           <div className="hidden lg:block">
            <Link href="https://wa.me/9421343270">
                <ButtonWhatapp className="px-3 lg:py-2 backbutton" buttonname={"Chat with us"} />
              </Link>
              </div>
            <div
              className="block lg:hidden relative"
              onClick={() => {
                setShowMenu(showMenu === true ? false : true);
              }}
            >
             <HiOutlineMenuAlt3 className="text-2lg font-extrabold"/>
            </div>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "flex lg:hidden" : "hidden fixed top-[5%] lg:hidden duration-300"
          }`}
        >
          <div className="my-5 mx-5">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2 relative">
                <div className="flex gap-2 items-center group/Drops">
                  <p className="text-normal">Home</p>
                </div>
              </div>

            <div className="flex gap-4 items-center">
            <Link
                    href=" https://www.instagram.com/homely_hills/"
                  >
                    <span className="flex gap-2 text-lg items-center">
                      <BiLogoInstagramAlt /> Homely Hills
                    </span>{" "}
                  </Link>

            </div>
            <div className="flex gap-4 items-center">
            <Link
                    href=" https://abnb.me/6StR3kWuQBb"
                  >
                    <span className="flex gap-2 text-lg items-center">
                      <BiLogoAirbnb /> Homely Hills
                    </span>{" "}
                  </Link>

            </div>
            <div className="flex gap-4 items-center">
            <Link
                    href="https://g.co/kgs/DUR9xQ"
                  >
                    <span className="flex gap-2 text-lg items-center">
                      <CiLocationOn /> Homely Hills
                    </span>{" "}
                  </Link>

            </div>
            <div className="flex gap-4 items-center">
            <Link
                    href="https://www.google.com/search?q=homely+hills+mayani&sca_esv=556714279&sxsrf=AB5stBj_tFo6i3bzJms9AUC_1y1uF6zg-A%3A1692010607136&ei=bwjaZOfkB-ucseMP0au6yAw&ved=0ahUKEwin2MbZ_tuAAxVrTmwGHdGVDskQ4dUDCA8&uact=5&oq=homely+hills+mayani&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2hvbWVseSBoaWxscyBtYXlhbmkyBRAhGKABSK4OUNQDWJkMcAF4AZABAJgBhgKgAesLqgEFMC4yLjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEC4YigUYsAMYQ8ICChAAGIoFGLADGEPCAgUQABiABMICBRAuGIAEwgIGEAAYFhgewgIIEAAYFhgeGArCAggQABiKBRiGA8ICBBAhGBXiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp"
                  >
                    <span className="flex gap-2 text-lg items-center text-md">
                      <BiLogoGoogle /> Google Search

                    </span>{" "}
                  </Link>

            </div>
            <div className="flex gap-4 items-center">
            <Link
                    href="mailto:Homelyhillsaha@gmail.com"
                  >
                    <span className="flex gap-2 items-center ">
                      <BiLogoGmail className="text-2xl" />- Homelyhillsaha@gmail.com

                    </span>{" "}
                  </Link>
            </div>
            <div className="flex gap-4 items-center">
            <Link
                    href="tel:9421343270"
                  >
                    <span className="flex gap-2 items-center ">
                      <BiSolidPhoneCall className="text-2xl" /> - 9421343270
                    </span>{" "}
                  </Link>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Navbar;
