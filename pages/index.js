import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Newcarouser from "../components/Newcarouser";
import Productfeed from "../components/Productfeed";
import Homeproducts from "../components/Homeproducts";
import Signin from "../components/Signin";
import Onecateg from "./../components/Onecateg";
import Productslider from "./../components/Productslider";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Subscribe from '../components/Subscribe'
export default function Home() {
  const { t, i18n } = useTranslation();
  //console.log(electroniccatnolim);
  var SingleAdsImage = 0;
  const router = useRouter();

  // function Goto(id, data) {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].title == id) {
  //       router.push(`/singleads/${data[i]._id}`);
  //     }
  //   }
  // }
  const [ads, setAds] = useState('');
  const clearAllCookies = () => {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  };
  useEffect(() => {
    clearAllCookies();
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const response = await fetch(
        `https://almalik-application.onrender.com/api/ads`
      );
      const data = await response.json();
     if(data){

       const adsWithImages = await Promise.all(
         data.map(async (ad) => {
              const imageResponse = await fetch(
                  `https://almalik-application.onrender.com/api/ads/ad/images/${ad.id}`
                  );
                  const image = await imageResponse.json();
                  return { ad, imageUrl: image[0]?.url || null };
                })
              );
              const filteredData = filterVipAds(adsWithImages);
              setAds(filteredData);
      }
    } catch (error) {
      console.error('Error fetching ads:', error);
    }
  };
  const filterVipAds = (data) => {
    const vipAdsData = data.filter((item) => item.ad.type === 'VIP');
    return vipAdsData;
  };

  return (
    <div className="bg-gray-100">

      <Head>
        <title>Almalek</title>
        <meta
          name="description"
          content="Bullish is the premier platform for buying and selling products. Browse our wide selection of products and find the perfect item for you."
          key="desc"
        />
        <link rel="icon" href="/Images/IMG_20230401_222812_625.png"></link>
      </Head>

      {/* <Header /> */}

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        {ads && <Banner bannerdata={ads} />}
        <Categories/>
        {/* <Slider/> */}
        <Newcarouser/>
        <Subscribe/>
        {/* home products */}
        {/* mobile banner cat */}
        {/* <div className='tablet:hidden flex flex-nowrap overflow-x-scroll gap-0 scrollbar-hide z-40 -mt-[50px] md:-mt-[150px]'>
          <Homeproducts electroniccat={ electroniccat } click={'/categorys/electronics'} typename={"Pc accessories"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ electroniccat } typename={"Pc accessories"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          </div>
          <div className='tablet:hidden'>
            <Signin />
          </div> */}

        {/* pc banner cat */}
        {/* <div className='hidden tablet:grid grid-cols-4 mt-20 gap-4 ml-5 mr-7 tablet:-mt-[100px] lg:-mt-[100px] xl:-mt-[100px]'>
        <Homeproducts electroniccat={ electroniccat } typename={"Pc accessories"} />
        <Homeproducts electroniccat={ jewelerycat } typename={"Shop by Category"} />
        <Onecateg typename={"dress"} title={"Shop now"} src={'/Images/dress.webp'} />
        <Signin />
        
      </div> */}

        {/* pc cat */}
        {/* <div className='hidden tablet:grid grid-cols-4 mt-5 gap-4 ml-5 mr-7'>
        <Onecateg typename={"Electronics"} linked={"/categorys/electronics"} title={"Shop now"} src={'/Images/electronics.webp'} />
        <Onecateg typename={"Tablets"} linked={"/categorys/tablets"} title={"See now"} src={'/Images/tablets.jpg'} />
        <Onecateg typename={"Mobiles"} linked={"/categorys/mobiles"} title={"See all deals"} src={'/Images/mobiles.jpg'} />
        <Onecateg typename={"Headphones"} linked={"/categorys/Headphones"} title={"Shop now"} src={'/Images/headphones.jpg'} />
    </div> */}
        {/* mobile slide cat */}
        {/* <div className='flex overflow-x-scroll scrollbar-hide tablet:hidden mt-5 gap-4 ml-5 mr-7 z-40'>
        <Onecateg typename={"Electronics"} linked={"/categorys/electronics"} title={"Shop now"} src={'/Images/electronics.webp'} />
        <Onecateg typename={"Tablets"} linked={"/categorys/tablets"} title={"See now"} src={'/Images/tablets.jpg'} />
        <Onecateg typename={"Mobiles"} linked={"/categorys/mobiles"} title={"See all deals"} src={'/Images/mobiles.jpg'} />
        <Onecateg typename={"Headphones"} linked={"/categorys/Headphones"} title={"Shop now"} src={'/Images/headphones.jpg'} />
    </div> */}
        {/*slide items */}

        {/* pc slide cat */}

        {/*slide items */}
        {/* <div>
          {electroniccatnolim.map((categoryData, index) => {
            if (categoryData.items.length > 0) {
              //console.log(dataSingleAds[SingleAdsImage]?._id);
              return (
                <>
                  <Productslider
                    key={index}
                    electroniccat={categoryData}
                    title={`${categoryData.category}`}
                  />
                  {SingleAdsImage < dataSingleAds.length && (
                    <div className="relative flex md:justify-between justify-center   w-[97%] mx-auto mt-3 tablet:mt-10 h-72 rounded-xl shadow-sm">
                      {SingleAdsImage < dataSingleAds.length && (
                        <div   className="md:w-[49%] h-72 rounded-lg  w-[100%] overflow-hidden relative">
                          <img
                            onClick={(e) => {
                              Goto(e.target.getAttribute('alt'), dataSingleAds);
                            }}
                            className="object-cover min-h-[400px]"
                            src={dataSingleAds[SingleAdsImage].images[0]}
                            alt={dataSingleAds[SingleAdsImage].title}
                          />
                          <div className="absolute flex flex-col md:top-8/12 left-0 bottom-1">
                            <h1
                              onClick={(e) => {
                                Goto(e.target.innerHTML, dataSingleAds);
                              }}
                              className="text-lg cursor-pointer md:text-xl font-bold p-1 rounded-r-md bg-white text-blue-600 md:mb-1"
                            >
                              {dataSingleAds[SingleAdsImage].title}
                            </h1>
                          </div>
                          {SingleAdsImage++}
                        </div>
                      )}
                      {SingleAdsImage < dataSingleAds.length && (
                        <div  onClick={(e) => {
                                Goto(e.target.innerHTML, dataSingleAds);
                              }} className="md:w-[49%] h-72 rounded-lg  w-[100%] overflow-hidden relative hidden md:block">
                          <img
                            onClick={(e) => {
                              Goto(e.target.getAttribute('alt'), dataSingleAds);
                            }}
                            className="object-cover min-h-[400px]"
                            src={dataSingleAds[SingleAdsImage].images[0]}
                            alt={dataSingleAds[SingleAdsImage].title}
                          
                          />
                          <div className="absolute flex flex-col md:top-8/12 left-0 bottom-1">
                            <h1
                              onClick={(e) => {
                                Goto(e.target.innerHTML, dataSingleAds);
                              }}
                              className="text-lg md:text-xl cursor-pointer font-bold p-1 rounded-r-md bg-white text-blue-600 md:mb-1"
                            >
                              {dataSingleAds[SingleAdsImage].title}
                            </h1>
                          </div>
                          {SingleAdsImage++}
                        </div>
                      )}
                    </div>
                  )}
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div> */}
        {/* <Productslider electroniccat={electroniccatnolim} title={"Highest rating all the time"} /> */}

        {/* pc cat */}

        {/* slide items */}
        {/* <Productslider electroniccat={electroniccatnolim} title={"Top seeling in Home"} />
    <Productslider electroniccat={electroniccatnolim} title={"Top repurchased"} />
  <Productslider electroniccat={electroniccatnolim} title={"Inspired by your browsing history"} /> */}
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // const electroniccatnolim = await fetch(
  //   `${process.env.API_URL}/home`
  // ).then((res) => res.json());

  // const resSingleAds = await fetch(
  //  `${process.env.API_URL}/diamond-ads`
  // );

  // const bannerdata = await fetch(
  //   `${process.env.API_URL}/vip-ads`
  //   ).then((res) => res.json());

  // const dataSingleAds = await resSingleAds.json();
  //console.log("dataSingleAds",dataSingleAds)
  // const ADs=await fetch('https://almalik.onrender.com/api/ad').then((res)=>res.json());


  return {
    props: {
      // ADs
      // electroniccatnolim,
      // dataSingleAds: dataSingleAds.diamondAds,
      // bannerdata,
    },
    
  };
};
