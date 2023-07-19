import React, { useState ,useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Singleads from './Singleads';

import Link from 'next/link';
/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
      const fetchAds = async () => {
        try {
          // Fetch ads information from the first endpoint
          const adsResponse = await fetch('https://almalik-application.onrender.com/api/ads/');
          const adsData = await adsResponse.json();
  
          // Fetch images for each ad using the second endpoint
          const adsWithImages = await Promise.all(
            adsData.map(async (ad) => {
              const imageResponse = await fetch(
                `https://almalik-application.onrender.com/api/ads/ad/images/${ad.id}`
              );
              // const imageBlob = await imageResponse.blob();
              // const imageUrl = URL.createObjectURL(imageBlob);
                var imageData=await imageResponse.json();
              var imageUrl=imageData[0]?.url
              // //console.log(imageUrl);
              return { ...ad, imageUrl };
            })
          );
  
          // Store the ads with their images in state
          setAds(adsWithImages);
        } catch (error) {
          console.error('Error fetching ads:', error);
        }
      };
  
      fetchAds();
       //console.log(ads)
    }, []);
  
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
               
                <Link href='/allads' >
                    <button className="text-end p-4  w-full text-blue-600 font-bold text-xl cursor-pointer">See more</button>
                </Link>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                     
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {/* slider */}
                                    
                                    {ads?.map(e=>(
                                              // eslint-disable-next-line react/jsx-key
                                              <Singleads
                                              key={e.id}
                                              imageUrl={e.imageUrl}
                                              title={e.title}
                                              price={e.price}
                                              id={e.id}
                                            />
                                    ))}
                                    {ads?.map(e=>(
                                              // eslint-disable-next-line react/jsx-key
                                              <Singleads
                                              key={e.id}
                                              imageUrl={e.imageUrl}
                                              title={e.title}
                                              price={e.price}
                                              id={e.id}
                                            />
                                        
                                    ))}
                                    {ads?.map(e=>(
                                              // eslint-disable-next-line react/jsx-key
                                              <Singleads
                                              key={e.id}
                                              imageUrl={e.imageUrl}
                                              title={e.title}
                                              price={e.price}
                                              id={e.id}
                                            />
                                        
                                    ))}
                                    {ads?.map(e=>(
                                              // eslint-disable-next-line react/jsx-key
                                              <Singleads
                                              key={e.id}
                                              imageUrl={e.imageUrl}
                                              title={e.title}
                                              price={e.price}
                                              id={e.id}
                                            />
                                        
                                    ))}
                                </div>
                            </Slider>
                  
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>


                {/* Carousel for tablet and medium size devices */}


                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                <Link href='/allads' >
                    <button className="text-end p-4  w-full text-blue-600 font-bold text-xl cursor-pointer">See more</button>
                </Link>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                {ads.map(e=>(
                                                <Singleads
                                                key={e.id}
                                                imageUrl={e.imageUrl}
                                                title={e.title}
                                                price={e.price}
                                                id={e.id}
                                              />
                                          
                                ))}
                               
                                {ads.map(e=>(
                                                <Singleads
                                                key={e.id}
                                                imageUrl={e.imageUrl}
                                                title={e.title}
                                                price={e.price}
                                                id={e.id}
                                              />
                                          
                                ))}
                               
                                {ads.map(e=>(
                                                <Singleads
                                                key={e.id}
                                                imageUrl={e.imageUrl}
                                                title={e.title}
                                                price={e.price}
                                                id={e.id}
                                              />
                                          
                                ))}
                               
                                 
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>


                {/* Carousel for mobile and Small size Devices */}


                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                <Link href='/allads' >
                    <button className="text-end p-4  w-full text-blue-600 font-bold text-xl cursor-pointer">See more</button>
                </Link>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    {ads?.map(e=>(
                                        <Singleads
                                        key={e.id}
                                        imageUrl={e.imageUrl}
                                        title={e.title}
                                        price={e.price}
                                        id={e.id}
                                      />
                                  
                                    ))}
                                    {ads?.map(e=>(
                                        <Singleads
                                        key={e.id}
                                        imageUrl={e.imageUrl}
                                        title={e.title}
                                        price={e.price}
                                        id={e.id}
                                      />
                                  
                                    ))}
                                    {ads?.map(e=>(
                                       <Singleads
                                       key={e.id}
                                       imageUrl={e.imageUrl}
                                       title={e.title}
                                       price={e.price}
                                       id={e.id}
                                     />
                                 
                                    ))}
                                  
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
