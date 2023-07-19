import { useRouter } from "next/router";
import { useState, useEffect, Component } from "react";
import ImageGallery from 'react-image-gallery';
export default function Info() {
  
  const [data, setData] = useState();
  const [images, setImages] = useState();
  const router = useRouter();
  const ID = router.query.id;
  async function fetchData() {
    try {
      const response = await fetch(`https://almalik-application.onrender.com/api/ads/${ID}`);
      const jsonData = await response.json();
      setData(jsonData);
      const imageResponse = await fetch(
        `https://almalik-application.onrender.com/api/ads/ad/images/${jsonData.id}`
        );
        const image = await imageResponse.json();
        if(image){
            var ne=image.map(obj=>({
                original: obj.url
            }))
            setImages(ne)
        }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchData();
    if(data){
         //console.log(images)  
    }
}, [ID,data]);
  return (
    
    <div className=" w-full h-auto min-h-screen mx-4 p-8">
      {/* main */}
      {/* hint it is 3 component in main */}
      {/* 1.image slider */}
      {/* 2.informaition  */}
      {/* 3.No.name */}
      <div className="flex flex-col lg:flex-row w-full h-3/4 items-center gap-2">
        {/*========================================= first Component =========================================*/}
        <div className="w-full md:w-2/4">
            {images ?
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>
            :<></>
        }
        </div>

        {/* ========================================= second Component ========================================= */}
        <div className="w-full md:w-2/4 flex h-full mt-8 justify-center ">
          <table className="border-collapse border border-slate-400 w-2/4 h-full">
           
            <tbody>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">User</td>
                <td className="border border-slate-400 p-2">{data?.user}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">Title</td>
                <td className="border border-slate-400 p-2">{data?.title}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">item ID</td>
                <td className="border border-slate-400 p-2">{data?.number}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">Price</td>
                <td className="border border-slate-400 p-2">{data?.price}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">Published time</td>
                <td className="border border-slate-400 p-2">{data?.created_at}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">Type</td>
                <td className="border border-slate-400 p-2">{data?.type}</td>
              </tr>
              <tr>
                <td className="border border-slate-400 p-2 font-medium">Status</td>
                <td className="border border-slate-400 p-2">{data?.item_status}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*==========================================  theard Component ==========================================*/}
        {/* it has 2 Component */}
        <div className="w-full md:w-1/4 flex flex-col gap-2">
            {/* first Component */}
            <div className="bg-white border border-slate-300 rounded p-2  w-full">
                <div className='bg-slate-400 flex flex-col w-full text-center rounded p-4'>
                    <div className="flex flex-row justify-between p-4 bg-white rounded my-2">
                        <h1 className="font-bold text-lg">Phone Number</h1>
                        <h1 className="font-medium text-md text-green-500">0772846289464</h1>
                    </div>
                    <h1 className='text-center text-blue-600 cursor-pointer'>Send Message</h1>
                </div>
            </div>
            {/* second Component */}
            <div className="bg-white border border-slate-300  rounded p-2  w-full">
                <div className='bg-slate-400  w-full flex flex-col rounded p-4 gap-2'>
                     <h1 className="font-bold text-lg">Safety tips</h1>
                     <hr/>
                    <p>Never pay a deposit or send money without seeing the item you are interested in</p>
                </div>
            </div>
        </div>

      </div>
      {/* info */}
      <div className="flex flex-col w-full items-start h-1/4">
        <h1 className="font-bold bg-yellow-500  text-lg p-2 rounded-t-md">
          Ads Detail
        </h1>
        <p className="w-full text-sm text-black border-4  border-t-yellow-500">
             {data?.description}
        </p>
      </div>
    </div>
  );
}
