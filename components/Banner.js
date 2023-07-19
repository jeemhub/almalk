import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

function Banner({ bannerdata }) {
   const router=useRouter()
  const { t, i18n } = useTranslation();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  return (
    <section className="relative mt-2 shadow-2xl max-w-full mx-auto h-[100%]">
      {/* <h1>uid:{userId}</h1>
      <h1>token:{token}</h1>
      <h1>cookies . access:{Cookies.get('access')}</h1> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        swipeable={true}
      >
        {bannerdata?.map((ad,index) => (
          <div
          key={index}
            className="cursor-pointer w-full mx-auto overflow-hidden h-[25vh] ssm:h-[25vh] sm:h-[25vh] mdb:h-[30vh] md:h-[30vh] lg:h-[50vh] "
            onClick={()=>{router.push(`/info/${ad.ad.id}`)}}
            
          >
          
             <div className='w-full h-full bg-red-600 flex items-center justify-center'>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            className='w-full object-fill text-center'
            src={ad.imageUrl}
            alt="..."
            />
            </div>
            

            <h2 className="absolute text-sm tablet:text-4xl lg:text-4xl 1xl:text-5xl bg-black/70 rounded-xl p-2 text-white bottom-4 left-1/2 -translate-x-1/2 mb-5">
              {ad.ad.title}
            </h2>

            {/* <h3 className="absolute text-2xl text-green-300 bottom-5 left-5 flex ">
            <div className="h-[15px] w-[20px] sm1:h-[20px] sm1:w-[25px] lg:h-[25px] lg:w-[30px] 1xl:h-[30px] 1xl:w-[35px] relative -ml-3">
              <Image
                src="/images/imdb.png"
                layout="fill"
                objectfit="fill"
                className="rounded-sm w-5 h-[15px]"
              />
              </div>
              <div className="">
              <div className="ml-2 text-sm sm:text-base lg:text-lg 1xl:text-xl text-amber-400">
                {element.vote_average.toFixed(1)}
              </div>
            </div>
            </h3> */}
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;
