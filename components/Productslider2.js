import { useRef, useState } from 'react';
import Image from "next/future/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from 'next/link';



function Productslider2({ api2, title }) {
  
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  const [activeTabIndex, setActiveTabIndex] = useState(0);
    
  return (
    <div className='relative flex bg-white w-[97%] mx-auto mt-3 tablet:mt-10 h-72 rounded-xl shadow-sm'>
    <div className='absolute mt-3 text-lg ml-5 font-bold'>{title} </div>
    
    <div ref={rowRef} className='flex my-auto overflow-x-scroll scrollbar-hide will-change-scroll space-x-3 tablet:space-x-10 tablet:snap-x ml-5 mr-5'>
        
    <ChevronLeftIcon
            className={`visible absolute top-0 bottom-0 left-5 z-40 m-auto w-8 h-[15%] md:w-12 md:h-[35%] cursor-pointer opacity-100 transition hover:scale-105 group-hover:opacity-100 box-border border-4 border-white bg-white my-auto drop-shadow-md hover:border-[#007185] ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />

            {
                api2.data.map((item) => 
                  <Link key={item.id} href={'/product2/'+item.id}>
                    <Image className="snap-start bg-origin-padding w-28 h-28 tablet:w-48 tablet:h-48 border-none cursor-pointer hover:scale-90 ease-in duration-150" src={item.attributes.image} alt={item.id} width={100} height={100} key={item.id} ></Image>
                    </Link>
                  )
                }
            
            <ChevronRightIcon
            className="visible absolute top-0 bottom-0 right-5 z-40 m-auto w-8 h-[15%] md:w-12 md:h-[35%] cursor-pointer opacity-100 transition hover:scale-105 group-hover:opacity-100 box-border border-4 border-white bg-white my-auto drop-shadow-md hover:border-[#007185]"
            onClick={() => handleClick("right")}
          />
    </div>
    
    </div>
  )
}

export default Productslider2