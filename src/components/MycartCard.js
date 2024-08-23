import { giftcardimage } from '@/app/asstes'
import UseStore from '@/app/store/giftStore'
import { TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useEffect } from 'react'

const MycartCard = ({item,imageString }) => {
  const handleDelete =UseStore(state=>state.deleteItem);
  
  return (
    <>
    <div className="hidden md:grid grid-cols-8 gap-5   md:py-8 ">
        <div className="col-span-4 flex gap-6 items-center pl-5">
          <div className="w-[300px] relative">
            <Image
              src={imageString}
              width={1000}
              height={1000}
              className="w-full"
              alt=""
            />
            {(item.price === 150 || item.price === 300) && ( 

              <Image src="/images/card/mostpopular.png" priority="true" width={100} height={100} alt='popular' 
              className='md:w-[110px] lg:w-[130px] xl:w-[190px]   absolute bottom-0  left-0 right-0 mx-auto '>
                </Image>
                )}
          </div>
          <div className="gap-4 ">
            <h2 className="sm:text-sm md:text-lg font-semibold lg:text-[25px] text-web_pink mb-1">
              {item?.title}
            </h2>
            <span className="text-[13px]  max-w-[350px] lg:block hidden messageWrapper">
              {item?.description}
            </span>
          </div>
          
        </div>
        

        <div className="text-center col-span-2 flex justify-center items-center sm:text-md md:text-lg lg:text-[30px] font-semibold">
          {"$ "+item?.price}
        </div>

     
        <div
          onClick={() => handleDelete(item?.id)}
          className="flex items-center col-span-2 pr-16 justify-center sm:text-md md:text-lg lg:text-[30px] font-semibold xl:pl-14 lg:pl-10"
        >
          <TrashIcon className="w-7 h-7  text-web_pink" />
        </div>
      </div>

      <div className="sm:max-w-[700px] mx-auto w-full block md:hidden mb-5 border border-web_pink p-4 rounded-md">
        <div>
          <div className="flex gap-4 justify-between items-center w-full">
            <h6 className="text-sm font-semibold">Product</h6>
            <div className="flex gap-2 items-center justify-center">
              <div className="max-w-[100px] h-full align-middle relative">
                <Image
                  src={imageString}
                  width={80}
                  height={80}
                  alt="all"
                  className="w-full h-[75px] object-cover"
                />
                {(item.price === 150 || item.price === 300) && ( 

<Image src="/images/card/mostpopular.png" priority="true" width={100} height={100} alt='popular' 
className='w-[70px] absolute bottom-0  left-0 right-0 mx-auto '>
  </Image>
  )}
              </div>
              <h6 className="max-w-[100px] text-web_pink font-medium">{item?.title}</h6>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-5">
            <p className="text-sm max-w-[50%] font-semibold">Price</p>
            <div className="text-sm flex max-w-[50%] justify-center w-full">
              {"$ "+item?.price}
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="text-sm max-w-[50%] font-semibold">Delete</p>
            <div className="text-sm flex max-w-[50%] justify-center w-full">
            <div
          onClick={() => handleDelete(item?.id)}
          className="flex items-center justify-center sm:text-md md:text-lg lg:text-[30px] font-semibold"
        >
          <TrashIcon className="w-7 h-7  text-web_pink" />
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MycartCard