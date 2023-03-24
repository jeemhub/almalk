import { useRef, useState, useEffect } from 'react';
import Image from "next/future/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';



function Productslider({ electroniccat, title }) {
  const { t, i18n } = useTranslation();
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

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

  // function handleClicked(title,images,details,price,currency,location,isOwner,statuss,createdAt) {
  //   router.push({
  //     pathname: '/adsproduct',
  //     query: {
  //       title: title,
  //       images: images,
  //       details: details,
  //       price: price,
  //       currency:currency,
  //       location:location,
  //       isOwner:isOwner,
  //       status:statuss,
  //       createdAt:createdAt,



  //     }
  //   })
  // }
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    electroniccat.items.length >0 && <div className='relative flex bg-white w-[97%] mx-auto mt-3 tablet:mt-10 h-72 rounded-xl shadow-sm'>
    <div className='flex flex-row'>
    <div className='absolute mt-3 text-lg ml-5 font-bold'>{title} </div>
    <div className='absolute mt-3 text-lg font-bold right-0 mr-5 text-blue-800 hover:border-b-2 border-blue-900 cursor-pointer' onClick={()=> (router.push({
      pathname: `/categorys/[cat]`,
      query: { cat: `${title}` }}))}
      
      >{t("seemore")}</div>
    </div>
    
    <div ref={rowRef} className='flex my-auto overflow-x-scroll scrollbar-hide will-change-scroll space-x-3 tablet:space-x-10 tablet:snap-x ml-5 mr-5'>
        
    <ChevronLeftIcon
            className={`visible absolute top-0 bottom-0 left-5 z-40 m-auto w-8 h-[15%] md:w-12 md:h-[35%] cursor-pointer opacity-100 transition hover:scale-105 group-hover:opacity-100 box-border border-4 border-white bg-white my-auto drop-shadow-md hover:border-[#007185] ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
          {electroniccat.items.map((item, index) => (
       <div key={item._id} className="w-48 h-56 tablet:w-60 tablet:h-64 relative flex flex-col" onClick={()=> router.push(`/adsproduct/${item._id}`)}>
        
       <Image className="snap-start bg-origin-padding border-none cursor-pointer w-40 h-40 tablet:w-48 tablet:h-48 object-fill pt-10 pb-2" src={item.images[0]} alt={item._id} width={200} height={200} key={item._id} ></Image>
       
       <div className='text-sm w-40'>{item.title}</div>
       </div>
 ))}
            
            
            <ChevronRightIcon
            className="visible absolute top-0 bottom-0 right-5 z-40 m-auto w-8 h-[15%] md:w-12 md:h-[35%] cursor-pointer opacity-100 transition hover:scale-105 group-hover:opacity-100 box-border border-4 border-white bg-white my-auto drop-shadow-md hover:border-[#007185]"
            onClick={() => handleClick("right")}
          />
    </div>
    
    </div>
  )
}

export default Productslider