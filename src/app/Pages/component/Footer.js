"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/Ci";
import { BiLogoAirbnb,BiLogoInstagramAlt,BiLogoGmail,BiLogoGoogle,BiSolidPhoneCall } from "react-icons/Bi";
import Image from "next/image";
import { H3 } from "./comman/Heading";
function Footer() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 font-serif">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="font-bold">
            <Image src="/images/Logo.png" width="200" height="200" alt="logo"/>

            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              <i>Your own home in himalayas.</i>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <></>
            <></>
            <div>
              <H3 heading="Book Us" />

              <ul className="mt-6 space-y-4 text-sm">
              <li>
                  <Link
                    href=" https://www.instagram.com/homely_hills/"
                  >
                    <span className="font-semibold flex gap-2 text-lg items-center">
                      <BiLogoInstagramAlt /> Homely Hills
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href=" https://abnb.me/6StR3kWuQBb"
                  >
                    <span className="font-semibold flex gap-2 text-lg items-center">
                      <BiLogoAirbnb /> Homely Hills
                    </span>{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://g.co/kgs/DUR9xQ"
                  >
                    <span className="font-semibold flex gap-2 text-lg items-center">
                      <CiLocationOn /> Homely Hills
                    </span>{" "}
                  </Link>
                </li>
                
                <li>
                <Link
                    href="https://www.google.com/search?q=homely+hills+mayani&sca_esv=556714279&sxsrf=AB5stBj_tFo6i3bzJms9AUC_1y1uF6zg-A%3A1692010607136&ei=bwjaZOfkB-ucseMP0au6yAw&ved=0ahUKEwin2MbZ_tuAAxVrTmwGHdGVDskQ4dUDCA8&uact=5&oq=homely+hills+mayani&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2hvbWVseSBoaWxscyBtYXlhbmkyBRAhGKABSK4OUNQDWJkMcAF4AZABAJgBhgKgAesLqgEFMC4yLjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEC4YigUYsAMYQ8ICChAAGIoFGLADGEPCAgUQABiABMICBRAuGIAEwgIGEAAYFhgewgIIEAAYFhgeGArCAggQABiKBRiGA8ICBBAhGBXiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp"
                  >
                    <span className="font-semibold flex gap-2 text-lg items-center text-md">
                      <BiLogoGoogle /> Google Search

                    </span>{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
            <H3 heading="Connect Us" />


              <ul className="mt-6 space-y-4 text-sm">
                <li>
                <Link
                    href="mailto:Homelyhillsaha@gmail.com"
                  >
                    <span className="font-semibold flex gap-2 items-center ">
                      <BiLogoGmail className="text-2xl" />- Homelyhillsaha@gmail.com

                    </span>{" "}
                  </Link>
                </li>
                <li>
                <Link
                    href="tel:9421343270"
                  >
                    <span className="font-semibold flex gap-2 items-center ">
                      <BiSolidPhoneCall className="text-2xl" />-9421343270
                    </span>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
