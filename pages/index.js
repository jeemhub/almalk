import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Productfeed from "../components/Productfeed";
import Homeproducts from "../components/Homeproducts";
import Signin from "../components/Signin";
import Onecateg from "./../components/Onecateg";
import Productslider from "./../components/Productslider";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ electroniccatnolim, dataSingleAds, bannerdata }) {
  console.log(electroniccatnolim);
  var SingleAdsImage = 0;
  const router = useRouter();

  function Goto(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title == id) {
        router.push(`/singleads/${data[i]._id}`);
      }
    }
  }
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Almalek</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner bannerdata={bannerdata.vipAds} />
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
        <div>
          {electroniccatnolim.map((categoryData, index) => {
            if (categoryData.items.length > 0) {
              console.log(dataSingleAds[SingleAdsImage]?._id);
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
                        <div className="md:w-[49%] h-72 rounded-lg  w-[100%] overflow-hidden relative">
                          <img
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
                        <div className="md:w-[49%] h-72 rounded-lg  w-[100%] overflow-hidden relative hidden md:block">
                          <img
                            className="object-cover min-h-[400px]"
                            src={dataSingleAds[SingleAdsImage].images[0]}
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
        </div>
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
  const electroniccatnolim = await fetch(
    "http://ec2-52-23-248-118.compute-1.amazonaws.com:3000/home"
  ).then((res) => res.json());

  const resSingleAds = await fetch(
    "http://ec2-52-23-248-118.compute-1.amazonaws.com:3000/diamond-ads"
  );

  const bannerdata = await fetch(
    "http://ec2-52-23-248-118.compute-1.amazonaws.com:3000/vip-ads"
    ).then((res) => res.json());

  const dataSingleAds = await resSingleAds.json();
  return {
    props: {
      electroniccatnolim,
      dataSingleAds: dataSingleAds.diamondAds,
      bannerdata,
    },
  };
};
