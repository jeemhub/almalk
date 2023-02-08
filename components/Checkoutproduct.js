import Image from "next/future/image";
import React from "react";
import StarRatings from 'react-star-ratings';
import  Currency  from 'react-currency-formatter';

function Checkoutproduct({key,id,title,price,image}) {
  return (
    <div className="flex border-b border-b-[#DDD] pb-5" key={id}>
      {/* image */}
      <div className="mb-0 object-contain border-4 border-none">
        <Image className="mx-auto max-w-[100px] tablet:max-w-[60%]" alt={id} src={image} height={180} width={180}></Image>
      </div>
      {/* title */}
      <div className="ml-5 text-lg text-[#0f1111]">
        {title}
      </div>
      {/* price */}
      <div className="ml-5 tablet:ml-auto text-lg font-bold">
        ${price}
      </div>
    </div>
  )
}

export default Checkoutproduct;
