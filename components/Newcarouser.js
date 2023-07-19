/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useState ,useEffect } from "react";
import Slider from 'react-slick';
import { useRouter } from "next/router";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    image: '/path/to/product1.jpg',
    title: 'Product 1',
    price: 9.99,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: '/path/to/product2.jpg',
    title: 'Product 2',
    price: 14.99,
    details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more products as needed
];

const ProductSlider = () => {
  const router=useRouter();
  const [ads, setAds] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
    <div className="relative">
      <div className="text-right mt-4">
      <button onClick={()=>{router.push(`/allads`)}} className="px-4 py-2 text-blue-600 font-bold text-xl">
        See All Products
      </button>
    </div>
    <Slider {...settings}>
      {ads.map((product) => (
        <div key={product.id} className="p-2">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="relative h-48 rounded-md">
              {/* // eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.title}
                // eslint-disable-next-line react/no-unknown-property
                layout="fill"
                // eslint-disable-next-line react/no-unknown-property
                objectFit="cover"
                // eslint-disable-next-line react/no-unknown-property
                objectPosition="center"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={()=>{router.push(`/info/${product.id}`)}} className="mt-2 px-4 py-2 text-black bg-white border-2 border-black border-solid w-full hover:scale-90 duration-300 hover:bg-[#f1b51f] hover:font-medium ">
              Show Details
            </button>
          </div>
        </div>
      ))}
      {ads.map((product) => (
        <div key={product.id} className="p-2">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="relative h-48 rounded-md">
              <img
                src={product.imageUrl}
                alt={product.title}
                // eslint-disable-next-line react/no-unknown-property
                layout="fill"
                // eslint-disable-next-line react/no-unknown-property
                objectFit="cover"
                // eslint-disable-next-line react/no-unknown-property
                objectPosition="center"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={()=>{router.push(`/info/${product.id}`)}} className="mt-2 px-4 py-2 text-black bg-white border-2 border-black border-solid w-full hover:scale-90 duration-300 hover:bg-[#f1b51f] hover:font-medium ">
              Show Details
            </button>
          </div>
        </div>
      ))}
      {ads.map((product) => (
        <div key={product.id} className="p-2">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="relative h-48 rounded-md">
              <img
                src={product.imageUrl}
                alt={product.title}
                // eslint-disable-next-line react/no-unknown-property
                layout="fill"
                // eslint-disable-next-line react/no-unknown-property
                objectFit="cover"
                // eslint-disable-next-line react/no-unknown-property
                objectPosition="center"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={()=>{router.push(`/info/${product.id}`)}} className="mt-2 px-4 py-2 text-black bg-white border-2 border-black border-solid w-full hover:scale-90 duration-300 hover:bg-[#f1b51f] hover:font-medium ">
              Show Details
            </button>
          </div>
        </div>
      ))}
    </Slider>
    
  </div>
  );
};

export default ProductSlider;
