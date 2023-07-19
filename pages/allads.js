import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useTranslation } from 'react-i18next';
import Singleads from '../components/Singleads';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default () => {
  const router=useRouter()
  var text = router.query.text;
  const [ads, setAds] = useState('');
  
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(
          `https://almalik-application.onrender.com/api/ads`
        );
        const data = await response.json();
        const adsWithImages = await Promise.all(
            data.map(async (ad) => {
                const imageResponse = await fetch(
                    `https://almalik-application.onrender.com/api/ads/ad/images/${ad.id}`
                    );
                    const image = await imageResponse.json();
                    return { ad, imageUrl: image[0]?.url || null };
                })
                );
                setAds(adsWithImages);
         //console.log(adsWithImages)
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  
  }, [text]);

  return (
    <div className='w-full'>
    
    {ads != ''?
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {ads?.map(({ ad, imageUrl }) => (
        // <div key={ad.id}>
        //   <h2>{ad.title}</h2>
        //   <p>{ad.description}</p>
        //   <p>Price: {ad.price}</p>
        //   {imageUrl && <img src={imageUrl} alt={ad.title} />}
        // </div>
     
        <Singleads
        key={ad.id}
        imageUrl={imageUrl}
        title={ad.title}
        price={ad.price}
        id={ad.id}
      />
      ))}
      {ads?.map(({ ad, imageUrl }) => (
        // <div key={ad.id}>
        //   <h2>{ad.title}</h2>
        //   <p>{ad.description}</p>
        //   <p>Price: {ad.price}</p>
        //   {imageUrl && <img src={imageUrl} alt={ad.title} />}
        // </div>
     
        <Singleads
        key={ad.id}
        imageUrl={imageUrl}
        title={ad.title}
        price={ad.price}
        id={ad.id}
      />
      ))}
      {ads?.map(({ ad, imageUrl }) => (
        // <div key={ad.id}>
        //   <h2>{ad.title}</h2>
        //   <p>{ad.description}</p>
        //   <p>Price: {ad.price}</p>
        //   {imageUrl && <img src={imageUrl} alt={ad.title} />}
        // </div>
     
        <Singleads
        key={ad.id}
        imageUrl={imageUrl}
        title={ad.title}
        price={ad.price}
        id={ad.id}
      />
      ))}
      {ads?.map(({ ad, imageUrl }) => (
        // <div key={ad.id}>
        //   <h2>{ad.title}</h2>
        //   <p>{ad.description}</p>
        //   <p>Price: {ad.price}</p>
        //   {imageUrl && <img src={imageUrl} alt={ad.title} />}
        // </div>
     
        <Singleads
        key={ad.id}
        imageUrl={imageUrl}
        title={ad.title}
        price={ad.price}
        id={ad.id}
      />
      ))}
      </div>
    :<div className='w-full h-screen flex items-center justify-center font-bold text-4xl'> <h1>No Ads</h1></div>}
    </div>
  );
};
// export const getServerSideProps = async (context) => {
//   const text = context.query.text;
//   const res = await fetch(`http://almalk.org:3000/search/${text}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
