'use client'
import Banner from "@/components/general/Banner";
import React from "react";
import Image from "next/image";
import { giftCardsData } from "@/Data/giftCards";
import Link from "next/link";
import UseStore from "@/app/store/giftStore";

const Index = ({ params }) => {
  const  addToCart  = UseStore(state=> state.addToCart);

  // console.log(params);
  const singleData = giftCardsData.find(
    (item) => item.id === Number(params.id)
  );
  // console.log(singleData);
  return (
    <div>
      <Banner
        imageUrl="/images/banner/banner1.png"
        title="Gift Card"
        // subtitle="Give the Gift of Clean!"
      />

      {/* card Details */}
      <div className="flex flex-col  items-center   md:mx-10 mx-5 justify-center mb-14">
        {/* cards */}
        <div className="grid grid-col-1 relative  z-10  container md:-mt-14 -mt-4 md:w-[605px] sm:w-[500px]   md:gap-6 gap-4 ">
          <div className=" max-w-[600px] relative -z-20">
            <Image
              src={singleData.images}
              width={500}
              height={500}
              alt={singleData.title}
              className="w-full h-full "
            />
            <p className="absolute top-2 left-4 text-xl md:text-4xl text-bgColor z-50">
              ${singleData.price}
            </p>
            {(singleData.price === 150 || singleData.price === 300) && ( 

              <Image src="/images/card/mostpopular.png" priority="true" width={100} height={100} alt='popular' 
              className='w-[170px] sm:w-[250px]   absolute bottom-0  left-0 right-0 mx-auto '>
                </Image>
                 )}
          </div>
          <div className="flex justify-between">
            <h1 className="font-bold lg:text-3xl text-xl font">
              {singleData.title}
            </h1>
            <h2 className="text-[#E05016] cardText md:text-[35px] font-bold text-[20px] font">
              ${singleData.price}
            </h2>
          </div>
          <p className="text-justify fontHelvetica messageWrapper">{singleData.description}</p>
          <Link href="/cart">
            <button    
            onClick={()=>addToCart(singleData.images,singleData.id,singleData.title,singleData.description,singleData.price)}
            className="bg-[#E05016] text-white p-1 w-[280px] font  font-bold text-lg md:text-xl rounded-full h-10">
              Add To Cart
            </button>{" "}
          </Link>
          <Link href="/gift-cards">
          <div className="flex justify-end items-center mt-10">
            <div className="flex  items-center gap-x-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3264 24.1919C21.1416 24.3461 20.9283 24.4624 20.6985 24.5341C20.4688 24.6058 20.2272 24.6314 19.9875 24.6097C19.7478 24.5879 19.5148 24.5191 19.3017 24.4072C19.0886 24.2953 18.8997 24.1425 18.7457 23.9575L14.677 19.0745C14.3798 18.7 14.2409 18.2242 14.2899 17.7487C14.3389 17.2732 14.5719 16.8357 14.9391 16.5296C15.3064 16.2236 15.7787 16.0733 16.2553 16.1109C16.7319 16.1484 17.1748 16.3709 17.4896 16.7307L21.5596 21.6137C21.8702 21.9867 22.0201 22.4678 21.9761 22.9513C21.9322 23.4348 21.6993 23.881 21.3264 24.1919Z"
                      fill="#E05016"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3258 11.6114C21.6986 11.9223 21.9328 12.3685 21.9767 12.852C22.0207 13.3355 21.8708 13.8166 21.5602 14.1896L17.4902 19.0727C17.3384 19.2639 17.1499 19.4229 16.9358 19.5403C16.7217 19.6576 16.4863 19.731 16.2434 19.756C16.0005 19.781 15.7551 19.7572 15.5215 19.686C15.288 19.6147 15.0711 19.4975 14.8835 19.3412C14.6959 19.1849 14.5415 18.9927 14.4293 18.7758C14.3171 18.5589 14.2495 18.3218 14.2303 18.0784C14.2111 17.835 14.2408 17.5902 14.3176 17.3584C14.3944 17.1266 14.5168 16.9126 14.6776 16.7288L18.7463 11.8458C18.9003 11.661 19.0891 11.5083 19.3021 11.3966C19.5151 11.2848 19.748 11.216 19.9875 11.1943C20.227 11.1725 20.4685 11.1981 20.6981 11.2697C20.9278 11.3413 21.141 11.4574 21.3258 11.6114Z"
                      fill="#E05016"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.6943 17.9032C16.6943 17.4176 16.8873 16.9518 17.2307 16.6084C17.5741 16.265 18.0398 16.0721 18.5255 16.0721L28.2915 16.0721C28.7771 16.0721 29.2429 16.265 29.5863 16.6084C29.9297 16.9518 30.1226 17.4176 30.1226 17.9032C30.1226 18.3889 29.9297 18.8546 29.5863 19.198C29.2429 19.5415 28.7771 19.7344 28.2915 19.7344L18.5255 19.7344C18.0398 19.7344 17.5741 19.5415 17.2307 19.198C16.8873 18.8546 16.6943 18.3889 16.6943 17.9032Z"
                      fill="#E05016"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2707 26.6175C20.1301 26.7346 19.9487 26.7911 19.7664 26.7745C19.5842 26.7579 19.416 26.6697 19.2988 26.5291L14.6971 21.0066C14.6365 20.9373 14.5904 20.8566 14.5614 20.7692C14.5325 20.6819 14.5213 20.5896 14.5285 20.4978C14.5357 20.4061 14.5612 20.3167 14.6035 20.2349C14.6458 20.1532 14.704 20.0807 14.7748 20.0218C14.8455 19.9628 14.9273 19.9186 15.0153 19.8918C15.1033 19.8649 15.1959 19.856 15.2874 19.8654C15.379 19.8748 15.4677 19.9025 15.5485 19.9467C15.6292 19.991 15.7002 20.0509 15.7574 20.123L20.3591 25.6455C20.4762 25.7861 20.5327 25.9675 20.5161 26.1498C20.4995 26.332 20.4113 26.5003 20.2707 26.6175Z"
                    fill="#E05016"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2707 14.5099C20.4113 14.6271 20.4995 14.7953 20.5161 14.9776C20.5327 15.1599 20.4762 15.3412 20.3591 15.4819L15.7574 21.0044C15.7002 21.0765 15.6292 21.1364 15.5485 21.1807C15.4677 21.2249 15.379 21.2526 15.2874 21.262C15.1959 21.2714 15.1033 21.2624 15.0153 21.2356C14.9273 21.2087 14.8455 21.1646 14.7748 21.1056C14.704 21.0467 14.6458 20.9742 14.6035 20.8925C14.5612 20.8107 14.5357 20.7213 14.5285 20.6296C14.5213 20.5378 14.5325 20.4455 14.5614 20.3581C14.5904 20.2708 14.6365 20.1901 14.6971 20.1208L19.2988 14.5983C19.416 14.4577 19.5842 14.3694 19.7664 14.3529C19.9487 14.3363 20.1301 14.3928 20.2707 14.5099Z"
                    fill="#E05016"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2275 20.5636C15.2275 20.3805 15.3003 20.2049 15.4297 20.0755C15.5592 19.946 15.7348 19.8733 15.9179 19.8733L29.0338 19.8733C29.2169 19.8733 29.3925 19.946 29.5219 20.0755C29.6514 20.2049 29.7241 20.3805 29.7241 20.5636C29.7241 20.7467 29.6514 20.9223 29.5219 21.0517C29.3925 21.1812 29.2169 21.2539 29.0338 21.2539L15.9179 21.2539C15.7348 21.2539 15.5592 21.1812 15.4297 21.0517C15.3003 20.9223 15.2275 20.7467 15.2275 20.5636Z"
                    fill="#E05016"
                  />
                  <circle
                    cx="20.5"
                    cy="20.5"
                    r="20"
                    transform="rotate(180 20.5 20.5)"
                    stroke="#E05016"
                  />
                </svg>
              </div>
              <div className=" sm:text-[18px] fontHelvetica">Return to Product Page</div>
            </div>
        </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Index;
