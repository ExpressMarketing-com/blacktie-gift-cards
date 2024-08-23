import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Oswald } from "next/font/google";
const ostwald = Oswald({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const ostwald2 = Oswald({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});
const Top = () => {
  return (
    <div>
      <div className="bg-[#E85220] ">
        {/* flex */}
        <div className=" lg:flex hidden justify-center items-center flex-col lg:flex-row pb-1  gap-9  ">
          <div className="flex justify-start mt-4 ml-2 items-center pb-4 gap-3">
            <Link
              target="_blank"
              href="https://www.facebook.com/BlackTieCarpetCare/"
            >
              <div className="border-[1px] hover:border-[#cccccc]  border-[#c2c2c2e8]   rounded-full p-[10px]">
                <FaFacebookF
                  size={16}
                  color="white"
                  className=" iconHover    text-lg  "
                />
              </div>
            </Link>
            <div className="border-[1px] hover:border-[#cccccc]  border-[#c2c2c2e8]   rounded-full  p-[10px] ">
              <Link target="_blank" href="https://twitter.com/blacktiecarpet">
                <FaTwitter
                  size={16}
                  className="text-white iconHover text-2xl"
                />
              </Link>
            </div>

            <div className="border-[1px] hover:border-[#cccccc]  border-[#c2c2c2e8]   rounded-full  p-[10px] ">
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

            <div className="border-[1px] rounded-full  p-[10px] hover:border-[#cccccc]  border-[#c2c2c2e8]">
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

            <div className="border-[1px] hover:border-[#cccccc]  border-[#c2c2c2e8]   rounded-full p-[10px] ">
              <Link
                target="_blank"
                href="https://www.pinterest.com/blacktiecarpetcare"
              >
                <FaPinterest
                  size={16}
                  className="text-white iconHover text-3xl"
                />
              </Link>
            </div>
            <div className="border-[1px] hover:border-[#cccccc]  border-[#c2c2c2e8]   rounded-full p-[10px] ">
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

          {/* col-2 */}

          <div className="flex xl:flex-row flex-col justify-center xl:items-center  items-start  ">
            <div className={ostwald.className}>
              <h1 className="text-white font-bold fontostwald text-3xl mx-6">
                Get A Free Quote! Call Us At: 936-249-1431
              </h1>
            </div>
            <div className={ostwald2.className}>
              <div className="flex border-l-[2px] h-[20px] xl:mx-0 mx-5 items-center ">
                <Link
                  href={
                    "https://www.blacktiecarpetcare.com/water-damage-restoration-houston"
                  }
                >
                  <h1 className="text-white font-extrabold text-lg fontWater   px-2   	">
                    Water Damage Services
                  </h1>
                </Link>
                <Link
                  href={
                    "https://www.blacktiecarpetcare.com/water-damage-restoration-houston"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-7 h-7 mt-1 cursor-pointer     "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      className="text-white "
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
