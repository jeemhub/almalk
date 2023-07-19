import { useState, useEffect } from 'react';
import Singleads from '../components/Singleads';

const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(
          'https://almalik-application.onrender.com/api/ads/search/?term=Laptop'
        );
        const data = await response.json();
        const adsWithImages = await Promise.all(
          data.result.map(async (ad) => {
            const imageResponse = await fetch(
              `https://almalik-application.onrender.com/api/ads/ad/images/${ad.id}`
            );
            const image = await imageResponse.json();
            return { ad, imageUrl: image[0]?.url || null };
          })
        );
        setAds(adsWithImages);
         //console.log(ads)
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  
  }, []);

  return (
    <div>
      <h1>Ads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {ads.map(({ ad, imageUrl }) => (
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
    </div>
  );
};

export default AdsPage;
