import React from "react";
import Header from "../components/Header";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Share_drop_down from "../components/Sharebutton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import Head from 'next/head';

function Adsproduct({ images }) {
  const router = useRouter();

  const imagespc = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#e5e7eb] tablet:bg-white">
       <Head>
        <title>Almalek</title>
        <meta
          name="description"
          content={router.query.title}
          key="desc"
        />
        <meta
          name="description"
          content={router.query.details}
          key="desc2"
        />
      </Head>
    <Header />
      <Header />
      {/* banner ads */}
      <div className="w-full h-14 bg-black text-white text-center flex">
        <div className="my-auto mx-auto">ads space here</div>
      </div>

      {/* pc products */}
      <div className="hidden tablet:block max-w-screen-2xl mx-auto bg-[#fff]">
        <div className="flex h-full space-x-5 mx-auto mt-10">
          {/* image gallery */}
          <div className="flex-auto w-[520px]">
            <ImageGallery items={imagespc} />
          </div>
          {/* share button */}
          <div className="flex-auto w-14 h-14 z-40">
            <Share_drop_down />
          </div>
          {/* title and description */}
          <div className="flex-auto w-[440px]">
            {/* title */}
            <div className="text-2xl font-medium">{router.query.title}</div>

            {/* <div className='flex text-base text-[#565959]'>
                        List Price: <div className='ml-2'>${api2.price}</div>
                    </div> */}

            {/* Product details  */}
            <div className="mt-5">
              <div className="font-bold text-lg">Product details</div>

              <div className="flex text-[#0F1111] text-xs font-bold mt-2">
                location:{" "}
                <div className="ml-3 text-sm text-[#565959] font-normal">
                  {router.query.location}
                </div>
              </div>
              <div className="flex text-[#0F1111] text-xs font-bold mt-2">
                Status:{" "}
                <div className="ml-3 text-sm text-[#565959] font-normal">
                  {router.query.status}
                </div>
              </div>
              <div className="flex text-[#0F1111] text-xs font-bold mt-2">
                Is owner:{" "}
                <div className="ml-3 text-sm text-[#565959] font-normal">
                {router.query.isOwner === "true" ? "Yes" : "No"}
                </div>
              </div>
              <div className="flex text-[#0F1111] text-xs font-bold mt-2">
                Price:{" "}
                <div className="ml-3 text-sm text-[#565959] font-normal">
                  {router.query.currency === "USD" && "$"} {router.query.price}{" "}
                  {router.query.currency === "IQD" && "IQD"}
                </div>
              </div>
              <div className="flex text-[#0F1111] text-xs font-bold mt-2">
                Details:{" "}
                <div className="text-[#0F1111] text-sm mt-5">
                  {router.query.details}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile products */}
      <div className="mt-2 tablet:hidden">
        {/* brand and ratings */}
        <div className="bg-[#FFF] h-full">
          {/* title */}
          <div className="ml-2 flex">
            <div className="my-auto mx-auto text-center font-medium text-lg">
              {router.query.title}
            </div>
          </div>
          {/* image galery */}
          <div className="mt-5 border-4 h-[35vh]">
            {/* share button */}
            <div className="flex-auto absolute mt-2 right-3 bg-white rounded-full bg-opacity-40 z-40">
              <Share_drop_down />
            </div>
            <div className="h-[30vh]">
              <Carousel className="z-35" responsive={responsive}>
                {images.map((image, index) => (
                  <div
                    className="w-screen relative flex h-44 justify-center"
                    key={index}
                  >
                    <Image
                      className="w-screen  object-fill"
                      alt={"ff"}
                      src={image}
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] mt-2">
          {/* orignal price */}
          <div className="p-3">
            <div className="flex text-base text-[#565959]">
              Price:{" "}
              <div className="ml-2">
                {router.query.currency === "USD" && "$"} {router.query.price}{" "}
                {router.query.currency === "IQD" && "IQD"}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] mt-2">
          {/* Product details  */}
          <div className="mt-2 p-5">
            <div className="font-bold text-lg">Product details</div>

            <div className="flex text-[#0F1111] text-xs font-bold mt-2">
              location:{" "}
              <div className="ml-3 text-sm text-[#565959] font-normal">
                {router.query.location}
              </div>
            </div>
            <div className="flex text-[#0F1111] text-xs font-bold mt-2">
              Status:{" "}
              <div className="ml-3 text-sm text-[#565959] font-normal">
                {router.query.status}
              </div>
            </div>
            <div className="flex text-[#0F1111] text-xs font-bold mt-2">
              Is owner:{" "}
              <div className="ml-3 text-sm text-[#565959] font-normal">
                {router.query.isOwner === "true" ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] mt-2">
          <div className="p-5">
            <div>About this item</div>
            <div className="text-[#0F1111] text-sm mt-5">
              {router.query.details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adsproduct;

export const getServerSideProps = async (context) => {
  const images = context.query.images;

  return {
    props: {
      images,
    },
  };
};
