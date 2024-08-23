
'use client'
import React from 'react';
import Banner from '@/components/general/Banner';
import cardData, { giftCardsData } from '@/Data/giftCards';
import Link from 'next/link';
import Image from 'next/image';
import UseStore from '../store/giftStore';
const Index = () => {
  const  addToCart  = UseStore(state=> state.addToCart)
  return (
    <div className='mb-14'>
      <Banner
        imageUrl="/images/banner/banner1.png"
        title="Gift Cards"
        
        titlespan="Give the Gift of Clean!"
        subtitle="Give the Gift of Clean!"
      />
      {/* cards */}
      <div className="flex flex-col p-4 items-center xl:mx-32 lg:mx-28 md:mx-10 mx-5 justify-center lg:mt-20 mt-14 sm:mt-18 ">
        {/* cards */}
        <h1 className='lg:text-2xl text-xl font-bold tracking-tight mb-4 sm:text-center  text-justify'>Make Sure Your E-Gift Card Recipient Lives in the Houston/Surrounding Areas</h1>
        <h2 className='text-md font-medium  lg:text-lg max-[1000px] text-justify	'>Select a single card that represents the amount you would like to give. The $150 and $300 cards are our most popular.
You may also select multiple cards if the amount you desire exceeds $500. For example, should you want to give $650,
you could select the $500 card and the $150 card. Once you have selected the card amount, simply go to the cart
located in the upper right-hand corner to pay. You will be prompted to enter an email address for the recipient and
yourself. When the transaction is complete, the recipient will receive their E-Gift Cards in their email box and you will
receive a transaction receipt. Once your transaction is complete, please let the recipient know to expect a gift from you
via Black Tie Carpet Care. If you would like suggestions on what amount to give for a specific project or home or want
to confirm our service areas, feel free to call our office for assistance at 936-588-0130.

<p className='font-bold flex justify-end my-4 '>Give The Gift of Clean
</p>
</h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-col-1 w-full md:gap-6 gap-4 mt-6">
          {giftCardsData.map((card, i) => 
          // console.log(card)
          (
            
            <div key={i} className="">
              <Link href={`/gift-cards/${card.id}`}>
              <div className='max-w-[600px] relative -z-20'>
                  <Image src={card.images} width={500} height={500} alt={card.title} className='w-full h-full '/>
              <p className='absolute top-2 left-4 text-xl md:text-4xl text-bgColor z-50'>${card.price}</p>
            {(card.price === 150 || card.price === 300 ) && ( 

              
              <Image src="/images/card/mostpopular.png" priority="true" width={100} height={100} alt='popular' 
               className='w-[160px] sm:w-[150px] 2xl:w-[250px]   absolute bottom-0  left-0 right-0 mx-auto '>
                </Image>
            )}
              </div>
              </Link>
              <Link href={`/gift-cards`}>

              <div className="flex justify-center mt-4 ">

                <button 
                onClick={()=>addToCart(card.images,card.id,card.title,card.description,card.price)}
                className="bg-[#E05016] text-white fontWater p-1 w-full max-w-[600px] text-center font-bold text-xl rounded-full h-14">
                  Add to Cart
                </button>
              </div>
              </Link>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Index;
