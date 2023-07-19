import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Allcategorys() {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch("https://almalik.onrender.com/api/categories/all")
  //       .then((response) => response.json())
  //       .then((data) => setCategories(data.data.categories));
  //   }, []);
  const [categories, setCategories] = useState([]);
useEffect(() => {
  fetch("https://almalik-application.onrender.com/api/ads/ad-categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="h-auto w-full grid grid-cols-4 gap-4 px-24 pt-10 mb-16">
      {categories?.map(e=>(

        <div key={e.id} className="relative group flex justify-center items-center h-full w-full">
        <img
          className="object-center object-cover h-full w-full"
          src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
          alt="watch-image"
          />
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
          {e.name}
        </button>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
      </div>
          ))}
    
    </div>
  );
}
