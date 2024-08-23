import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { logo } from "@/assets";
const ostwald = Oswald({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const Footer1 = () => {
  return (
    <>
      <footer className="bg-[#242427] ">
        <div className="container mx-auto sm:max-w-[1200px]    px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 gap-8 xl:mx-4 ">
            <div className="xl:px-0 px-4">
              <Link href="/">
                <Image
                   src={logo}
                  alt="Sabal"
                  width={300}
                  height={300}
                  className="py-4 "
                />
              </Link>
              <div
                className="flex justify-start lg:flex-nowrap flex-wrap 
               mt-4 ml-2 items-center pb-4 gap-3"
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/BlackTieCarpetCare/"
                >
                  <div className="border-[1px] hover:border-[#9b9b9b]  border-[#5a5a5ae8]  rounded-full  py-2 px-2">
                    <FaFacebookF
                      size={16}
                      color="white"
                      className="text-white iconHover   text-lg  "
                    />
                  </div>
                </Link>
                <div className="border-[1px] rounded-full hover:border-[#9b9b9b]  border-[#5a5a5ae8]  py-2 px-2 ">
                  <Link
                    target="_blank"
                    href="https://twitter.com/blacktiecarpet"
                  >
                    <FaTwitter
                      size={16}
                      className="text-white iconHover text-2xl"
                    />
                  </Link>
                </div>
                <div className="border-[1px] hover:border-[#9b9b9b]  border-[#5a5a5ae8]  rounded-full  py-2 px-2">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/blacktie_carpet/"
                  >
                    <FaInstagram
                      size={16}
                      className="text-white iconHover text-2xl"
                    />
                  </Link>
                </div>


                <div className="border-[1px] hover:border-[#9b9b9b]  border-[#5a5a5ae8] rounded-full  py-2 px-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/blacktiecarpetcare/"
                  >
                    <FaLinkedinIn
                      size={16}
                      className="text-white iconHover   text-2xl"
                    />
                  </Link>
                </div>

                <div className="border-[1px]  rounded-full   py-2 px-2  hover:border-[#9b9b9b]  border-[#5a5a5ae8] ">
                  <Link
                    target="_blank"
                    href="https://www.pinterest.com/blacktiecarpetcare"
                  >
                    <FaPinterest
                      size={16}
                      className="text-white iconHover text-2xl "
                    />
                  </Link>
                </div>

                <div className="border-[1px] rounded-full   py-2 px-2 hover:border-[#9b9b9b]  border-[#5a5a5ae8] ">
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCQtdBlmEh3hIPnq07m7O3Pw"
                  >
                    <FaYoutube
                      size={16}
                      className="text-white iconHover text-3xl"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="  xl:px-0 px-4 md:ml-3 ml-0">
              <h1 className="bg-gradient-to-b fontostwald text-white to-Golden text-transparent bg-clip-text xl:text-4xl text-3xl py-4 font-semibold">
                Contact Us
              </h1>
              <div class="text-white mt-3 leading-7">
                <p className="fontoFooter tracking-wider">
                  9595{" "}
                  <strong className="">
                    Six Pines Drive
                    <br /> Building 8 Level 2 Suite 245 <br />
                    The Woodlands,
                  </strong>
                  <strong> Texas </strong>77380 <br />
                  <strong>P</strong>:
                  <a
                    href="tel:9362491431"
                    className="hover:border-b-[1px] hover:text-gray-400  hover:border-gray-400 w-36"
                  >
                    (936) 249-1431
                  </a>
                </p>

                <p className="mt-3 fontoFooter">
                  <strong>Business Hours</strong>
                  <br />
                  Monday-Sunday : 8am to 9pm
                </p>
              </div>
            </div>

            <div className=" xl:px-0 px-4  mb-10">
              <h1 className="bg-gradient-to-b fontostwald text-white to-Golden  text-transparent bg-clip-text xl:text-4xl text-3xl py-4 font-semibold">
                Quick Links
              </h1>
              <Link
                target="_blank"
                href="https://www.blacktiecarpetcare.com/"
                className="text-white block lg:py-2 py-1 mt-2 lg:mt-0 px-1 hover:text-lightGolden hover:text-gray-400   ;
                fontoFooter text-lg  mb-0"
              >
                <p className="hover:border-b h-[20px]  hover:text-gray-400  hover:border-gray-400 w-[150px] ">
                  Carpet Cleaning
                </p>
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/tile-grout-cleaning-conroe"
                className="text-white block py-2 px-1 hover:text-lightGolden hover:text-gray-400 fontoFooter text-lg  "
              >
                <p className="hover:border-b h-[20px] xt-gray-400  hover:border-gray-400 w-[190px] ">
                  Tile & Grout Cleaning
                </p>
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/upholstery-cleaning-conroe"
                className="text-white block hover:text-lightGolden py-2 px-1 hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px] xt-gray-400  hover:border-gray-400 w-[200px] ">
                  Upholstery Cleaning{" "}
                </p>{" "}
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/carpet-repair-conroe"
                className="text-white block hover:text-lightGolden py-2 px-1 hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px]  hover:text-gray-400  hover:border-gray-400 w-[140px] ">
                  
                  Carpet Repair
                </p>{" "}
              </Link>
            </div>

            <div className=" xl:px-0 px-4 sm:mt-20 -mt-16 mb-10">
              <Link
                target="_blank"
                href="https://www.blacktiecarpetcare.com/carpet-stretching-conroe"
                className="text-white block lg:py-1  py-1 px-1 hover:text-lightGolden hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px] xt-gray-400  hover:border-gray-400 w-[180px] ">
                  Carpet Stretching{" "}
                </p>
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/rug-cleaning-conroe"
                className="text-white block py-2 px-1 hover:text-lightGolden hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px] xt-gray-400  hover:border-gray-400 w-[210px] ">
                  Rug Cleaning & Spa
                </p>
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/stain-spot-removal-conroe"
                className="text-white block hover:text-lightGolden py-2 px-1 hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px] ray-300 w-[200px] ">
                  Stain & Spot Removal{" "}
                </p>{" "}
              </Link>
              <Link
                href="https://www.blacktiecarpetcare.com/water-damage-restoration-conroe"
                className="text-white block hover:text-lightGolden py-2 px-1 hover:text-gray-400 fontoFooter text-lg"
              >
                <p className="hover:border-b h-[20px] xt-gray-400  hover:border-gray-400 w-[155px] ">
                  Water Damage{" "}
                </p>{" "}
              </Link>
            </div>
          </div>
          <hr className="border-t-[1px]  m border-gray-400 mb-3" />
        </div>
        <Link href="https://www.blacktiecarpetcare.com/privacy-policy.html">
          <p className="text-[#E85220]   fontoFooter  text-center pb-4 text-xl  font-medium ">
            Privacy policy{" "}
          </p>
        </Link>
        <p className="font-semibold text-white text-center pb-12 mx-5 text-base fontoFooter">
          {" "}
          © 2023 Black Tie Carpet Care - Do not copy. All rights reserved.
          <Link href="https://www.anthonygadams.com" Target="_blank"> <p className="text-[#E85220]   fontoFooter  text-center pb-4 text-xl  font-medium ">Consulting by Anthony</p></Link>
        </p>        
      </footer>
    </>
  );
};

export default Footer1;
