import React, { useEffect, useState } from "react";
import Homeproductfeed from "./Homeproductfeed";
import { useRouter } from "next/router";

function Productfeed({ electroniccat, typename }) {
 const router = useRouter()
  //get window size
  const [size, setSize] = useState({ width: -1, height: -1 });
  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener("resize", (e) => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }, []);
  
  
  const w = size[Object.keys(size)[0]]
  


  


let sizes=0
  const domap = (size) =>{
    
return sizes=size
  }
  
  {w >= 850 ? (
     domap(4)
  ) : (
    domap(1)
  )}
  const items = electroniccat.slice(0, sizes)


  return (
    <div className=" bg-white m-1 mt:m-3 p-5 z-40 rounded-2xl tablet:h-full w-full shadow-sm">
        <p className=' -mt-3 tablet:mt-0 mx-auto font-medium  text-xs lg:text-base xl:text-xl text-black tablet:font-bold'>{typename}</p>
        <div className="flex w-full mt-1 tablet:grid gap-1 grid-cols-2 mx-auto ">
            
        {items.map(
        ({ category, id, image, description, rating, price, title }) => (
          <Homeproductfeed
            key={id}
            id={id}
            image={image}
            category={category}
            description={description}
            rating={rating}
            price={price}
            title={title}
          />
        )
      )}
        </div>
        <button className="cursor-pointer text-[#007185] hover:text-[#C7511F] mt-5 ml-2 hover:underline hover:underline-offset-8 hidden tablet:block" onClick={() => router.push(`/categorys/${electroniccat[0].category}`)}>See more</button>
      
    </div>
  );
}

export default Productfeed;


export const getServerSideProps = async (context) => {
  const { id } = context.query;

    return { props: {
      id,
      
    }}
}