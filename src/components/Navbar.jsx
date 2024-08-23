"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Oswald } from "next/font/google";
import { logo } from "@/assets";
import UseStore from "@/app/store/giftStore";
const ostwald = Oswald({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});
const Navbar = () => {
  const pathname = usePathname();
  const products = UseStore((state) => state.products);
  
  
  const [servicesList, setServicesList] = useState(false);
  const [servicesList2, setServicesList2] = useState(false);

  const [infoList, setInfoList] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
    setServicesList(false);
    setServicesList2(false);

    setInfoList(false);
  }, [pathname]);

  const categories = [
    {
      name: "Tile & Grout Cleaning",
      link: "https://www.blacktiecarpetcare.com/tile-grout-cleaning-conroe",
    },
    {
      name: "Upholstery Cleaning ",
      link: "https://www.blacktiecarpetcare.com/index.html",
    },
    {
      name: "Rug Cleaning & Spa",
      link: "https://www.blacktiecarpetcare.com/rug-cleaning-conroe",
    },
    {
      name: "Stain & Spot Removal",
      link: "https://www.blacktiecarpetcare.com/stain-spot-removal-conroe",
    },
    {
      name: "Carpet Repair",
      link: "https://www.blacktiecarpetcare.com/carpet-repair-conroe",
    },
    {
      name: "Carpet Stretching",
      link: "https://www.blacktiecarpetcare.com/carpet-stretching-conroe",
    },
    {
      name: "Water Damage",
      link: "https://www.blacktiecarpetcare.com/water-damage-restoration-conroe",
    },
  ];

  const categories2 = [
    {
      serviceName: "  Conroe And The Woodlands      ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-atascocita",
    },
    {
      serviceName: "  Cypress      ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-cypress",
    },
    {
      serviceName: " Houston      ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-houston",
    },
    {
      serviceName: "  Humble",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-humble",
    },
    {
      serviceName: " Katy",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-atascocita",
    },
    {
      serviceName: "  Kingwood",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-katy",
    },
    {
      serviceName: "  Magnolia  ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-magnolia",
    },
    {
      serviceName: "  Spring  ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-spring",
    },
    {
      serviceName: "  Willis ",
      link: "https://www.blacktiecarpetcare.com/carpet-cleaning-willis",
    },
  ];

  return (
    <>
      <div >
        <div className="container bg-web_black px-4 tracking-wider flex items-center justify-between">
          <div
            className="bg-black text-black  "
            id="google_translate_element"
          ></div>
        </div>
        <div className="   bg-[#000]  ">
          <div className="container px-2 lg:max-w-[1250px] mx-auto lg:py-0 flex items-center justify-between gap-14 text-white">
            <Link href={"/"} className="lg:block hidden max-w-[400px]">
              <Image
                alt="Black Tie logo"
                className="cursor-pointer w-full"
                src={logo}
                width={400}
                height={400}
              />
            </Link>

            {/* mobile */}
            <div
              onClick={() => setMenu(true)}
              className="lg:hidden bg-web_pink flex flex-col w-full rounded-[4px] "
            >
              <div className="flex flex-col mb-2 py-5  ">
                <div className="h-0 ">
                  <Bars3Icon className="text-white flex h-8 mt-9 hover:text-[#E85220]  ml-2  max-w-[200px]  cursor-pointer  " />
                </div>
                <Link
                  href={"/"}
                  className="md:max-w-[200px] max-w-[200px] mx-auto   block    "
                >
                  <Image
                    alt="Black tie logo "
                    className="cursor-pointer object-cover "
                    src={logo}
                    width={400}
                    height={400}
                  />
                </Link>
                <br />
                <div className=" flex flex-row justify-center items-center  ">
                  <button className="bg-[#E85220]  px-6 py-4 rounded-full mx-1 w-[150px] mb-2 fontoFooterSub whitespace-normal  lg:text-lg   text-base font-bold">
                    Book Online
                  </button>
                  <button className="bg-white text-black px-7 mb-2 py-4 rounded-full mx-1 w-[118px]  fontoFooterSub whitespace-normal  lg:text-lg   text-base font-bold">
                    Call Us!
                  </button>
                </div>
              </div>
            </div>

            <ul
              className={`lg:flex gap-1 xl:gap-4 lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[900px] bg-[#313131] 
         ${
           menu
             ? " -translate-x-[30px]"
             : "-translate-x-[350px] lg:translate-x-0  "
         } 
         lg:bg-none min-w-[320px] overflow-y-auto lg:overflow-y-visible h-full z-10 transition-all duration-500 ease-out lg:bg-transparent lg:static px-16  lg:p-0 fixed -top-7 left-0 justify-between items-center`}
            >
              <div
                onClick={() => setMenu(false)}
                className={`${
                  menu ? "block" : "hidden"
                } absolute sm:right-7 right-4 sm:top-7 top-5 bg-web_yellow rounded-md p-[2px]`}
              >
                <XMarkIcon
                  width={20}
                  className="text-white lg:hidden h-8 w-6 mt-3 cursor-pointer"
                />
              </div>
              <Link
                className="lg:py-7"
                href="https://www.blacktiecarpetcare.com/"
              >
                <li
                  className={`nav-list font-inter mt-14 lg:mt-0 max-w-fit text-lg font-bold   lg:text-lg  cursor-pointer
            ${pathname === "/" ? "text-web_yellow" : ""}
             `}
                >
                  <p className="text-white normal-case  hover:text-orange-600 text-base fontoFooterSub">
                    Home
                  </p>
                </li>
              </Link>
              {/* drop down */}
              <div className="group nav-menu  relative lg:py-7 ">
                <div className="mt-4 mb-2 lg:mb-0 lg:mt-0 flex items-center gap-1 fontoFooterSub ">
                  <li
                    className={`nav-list max-w-fit cursor-pointer  font-bold text-lg flex  lg:text-lg
      ${pathname === "" ? "text-web_yellow" : ""}
      `}
                  >
                    <p
                      className={`${
                        servicesList
                          ? "text-white"
                          : "hover:text-orange-600 lg:mx-2 flex justify-center items-center text-base  fontoFooterSub"
                      }`}
                    >
                      Services
                    </p>
                    <p
                      className="ml-32 mt-1 block lg:hidden"
                      onClick={() => setServicesList(!servicesList)}
                    >
                      {servicesList ? <FiChevronDown /> : <FiChevronUp />}
                    </p>
                  </li>
                </div>
                <ul
                  className={`lg:absolute lg:min-w-[290px] !left-[-10%] top-[80px] lg:h-[20rem]  uppercase lg:bg-black text-white z-[1]  lg:overflow-y-auto lg:hidden lg:group-hover:block ${
                    servicesList ? "block" : "hidden"
                  }`}
                >
                  <Link href="/">
                    <li className="dropdown_list dropdown_menu_list normal-case tracking-wide  lg:bg-[#0a0a0a]   font-semibold text-sm fontoFooter">
                      Carpet cleaning
                    </li>
                  </Link>
                  {categories?.map((category) => (
                    <Link key={category.name} href={category.link}>
                      <li className="dropdown_list dropdown_menu_list  lg:bg-[#0a0a0a] normal-case tracking-wide font-semibold  text-sm fontHelvetica">
                        {category.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* drop down 2 */}
              <div className="group nav-menu relative lg:py-7 ">
                <div className="mt-4 mb-2 lg:mb-0 lg:mt-0 flex items-center gap-1">
                  <li
                    className={`nav-list max-w-fit cursor-pointer font-semibold text-lg lg:text-lg
           ${pathname === "" ? "text-web_yellow" : ""}`}
                  >
                    <p
                      className={`${
                        servicesList2
                          ? "  text-white"
                          : " hover:text-orange-600 text-base fontoFooterSub"
                      }`}
                    >
                      Location
                    </p>
                  </li>
                </div>
                <ul
                  className={` lg:absolute  lg:min-w-[290px] !left-[-10%] top-[80px] lg:h-[25rem] uppercase lg:bg-black text-white z-[1] lg:overflow-y-auto lg:hidden lg:group-hover:block ${
                    servicesList2 ? "block" : "hidden"
                  }`}
                >
                  <Link href="https://www.blacktiecarpetcare.com/carpet-cleaning-atascocita">
                    <li className="dropdown_list dropdown_menu_list normal-case tracking-wide font-semibold text-sm fontoFooterSub">
                      Atascocita{" "}
                    </li>
                  </Link>
                  {categories2?.map((category) => (
                    <Link key={category.name} href={category.link}>
                      <li className="dropdown_list dropdown_menu_list normal-case tracking-wide font-semibold text-sm fontoFooter">
                        {category.serviceName}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              <Link
                className="lg:py-7"
                href="https://www.blacktiecarpetcare.com/special-offers-deals"
              >
                <li
                  className={`nav-list font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer font-semibold text-lg lg:text-lg
           ${pathname === "/yummylicious" ? "text-web_yellow" : ""}
          `}
                >
                  <p className="text-white   hover:text-orange-600 lg:mx-2 text-base fontoFooterSub">
                    Specials
                  </p>{" "}
                </li>
              </Link>
              <Link
                className="lg:py-7"
                href="https://www.blacktiecarpetcare.com/about-us"
              >
                <li
                  className={`nav-list font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer text-lg lg:text-lg font-semibold 
            ${pathname === "/gift-card" ? "text-web_yellow" : ""}
          `}
                >
                  <p className="text-white  hover:text-orange-600 min-w-[80px]  text-base fontoFooterSub">
                    About Us
                  </p>{" "}
                </li>
              </Link>
              <Link className="lg:py-7" href="/gift-cards">
                <li
                  className={`nav-list font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer text-lg lg:text-lg font-semibold 
            ${pathname === "/gift-card" ? "text-web_yellow" : ""}
          `}
                >
                  <p className="text-white  hover:text-orange-600 min-w-[80px]   whitespace-nowrap fontoFooterSub">
                    Gift Cards
                  </p>{" "}
                </li>
              </Link>

              <Link
                className="lg:py-7"
                href="https://www.blacktiecarpetcare.com/blog"
              >
                <li
                  className={`nav-list font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer font-semibold  text-lg lg:text-lg
            ${pathname === "/faq" ? "text-web_yellow" : ""}
           `}
                >
                  <p className="text-white  lg:mx-2 hover:text-orange-600 text-base fontoFooterSub">
                    Blogs
                  </p>{" "}
                </li>
              </Link>

              <Link
                className="lg:py-7"
                href="https://www.blacktiecarpetcare.com/contact"
              >
                <li
                  className={`nav-list font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer font-semibold lg:text-lg
          ${pathname === "/contact-us" ? "text-web_yellow" : ""}
          `}
                >
                  <p className="text-white   hover:text-orange-600 text-base fontoFooterSub">
                    Contact
                  </p>{" "}
                </li>
              </Link>

              <Link
                href="https://book.housecallpro.com/book/Black-Tie-Carpet-Care/001f382909684d7bb1c53c58c6f6d6c2"
                target="_blank"
                className="lg:block hidden "
              >
                <button className="bg-[#E85220] xl:px-2 px-2 py-2 min-w-[145px] mx-3 rounded-full  fontoFooterSub    text-sm font-bold">
                  Book Online
                </button>
              </Link>
              <Link  href="/cart" 
              className="lg:block hidden py-7">
                <li
                  className={` font-inter mt-4 lg:mt-0 max-w-fit cursor-pointer relative font-semibold 
            
          `}
                >
                  <Image
                    src="/images/card/cartLogo.png"
                    width={40}
                    height={40}
                    alt="image"
                    className="text-white  hover:text-orange-600 min-w-7  font-bold   fontoFooterSub"
                  ></Image>{" "}
                  <span className={` text-[#E85220] absolute -top-1 ${products?.length > 0 ? 'block' : 'hidden'}   right-2 rounded-full  text-md font-bold`}>{products?.length}</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
