// components/general/Banner.jsx
import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title, subtitle,titlespan }) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="banner-image"
        height={1000000}
        width={1000000}
        className="object-cover w-full lg:h-[429px] h-64 "
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 className="text-center lg:text-[65px] text-[30px] banner md:font-bold font-medium tracking-wide text-white">{title}</h1>
        <p className="text-white font-normal md:font-bold lg:text-[35px] banner tracking-wider text-[20px]">
          {titlespan}

        </p>
        
      </div>
    </div>
  );
};
// Give the <span className="text-[#E05016]">Gift</span> of Clean!

export default Banner;