import React, { useState } from "react";
import Header from "../components/Header";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Share_drop_down from "../components/Sharebutton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import  Breadcrumbs  from "../components/Breadcrumbs";

function Adsproduct({ images }) {
    const { t, i18n } = useTranslation();
    const router = useRouter();

    const imagespc = images.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    const renderCustomItem = (item) => {
        return (
            <div className="image-gallery-image w-full h-[528px]">
                <img
                    src={item.original}
                    alt={"hghg"}
                    className="object-center w-full h-full"
                />
            </div>
        );
    }

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
            {/* banner ads */}
            <div></div>
            <Breadcrumbs />

            <div className="w-full h-14 bg-black text-white text-center flex">
                <div className="my-auto mx-auto">ads space here</div>
            </div>

            {/* pc products */}
            <div className="hidden tablet:block max-w-screen-2xl mx-auto bg-[#fff]">
                <div className='flex-2 w-[98%] mx-auto mb-[-30px] text-[#333]'>
                    <h1 className='text-[18px] font-medium text-sm text-[#333] h-[#18px] py-3 text-ellipsis '>



                        THE ONLY ADDRESS OF COMFORT HEYKEL SUIT APART 0554 666 60 98

                    </h1>
                </div>
                <div className="flex h-full space-x-5 mx-auto mt-10">
                    {/* image gallery */}
                    <div className="flex-auto ml-3 w-[650px]">
                        <ImageGallery items={imagespc} showFullscreenButton={false} renderItem={renderCustomItem}
                            showPlayButton={false} />
                    </div>
                    {/* share button */}
                    <div className="flex-auto w-14 h-14 z-40">
                        <Share_drop_down />
                    </div>
                    {/* title and description */}
                    <div className="flex w-[750px]">
                        {/* title */}
                        {/* <div className="text-2xl font-medium">{router.query.title}</div>

                        {/* <div className='flex text-base text-[#565959]'>
                        List Price: <div className='ml-2'>${api2.price}</div>
                    </div> */}

                        {/* Product details  */}

                        <div className='w-[50%] mobile:mt-3 mobile:w-[95%] mobile:mx-auto flex-col'>
                            <div>
                                <h1 className='text-lg font-bold text-[#039] mb-2'>100T</h1>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm  w-[50%]'>
                                    İlan No
                                </div>
                                <div className='text-red-500 w-[50%]'>
                                    1239090293
                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Listing Date
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    February 16, 2023

                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Property Type
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    Daily rent

                                </div>
                            </div>

                            <div className='flex justify-between  py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    m² (Gross)
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    90

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    m² (Net)
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    80

                                </div>
                            </div>


                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm  w-[50%]'>
                                    Number of rooms
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    Studio (1+0)

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Floor location
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    2

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Number of Floors
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    4

                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Number of bathrooms
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    2

                                </div>
                            </div>

                            <div className='flex  justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Inside the Site
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    No

                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Site Name
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    Unspecified

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[40%]'>
                                    From who
                                </div>
                                <div className='self-start text-slate-800 text-xs w-[50%]'>
                                    From the Real Estate Office

                                </div>
                            </div>



                        </div>
                        <div className=' flex-col ml-2 mobile:mt-5 mobile:ml-0 mobile:w-full w-[50%]'>
                            <div className='w-[100%]  h-fit  border-[1px] p-2'>
                                <div className="bg-[#efefef] w-full h-full justify-center items-center p-3 flex-col">
                                    <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>
                                        <img src="https://image5.sahibinden.com/stores/logos/02/06/19/671b272f33b668722242be2826613de3e5582921.png" className='w-[108] h-[40px] flex-2' />
                                        <a href='#' className='text-[#00339f] flex-1 ml-4'>HEYKEL SUİT APART</a>

                                    </div>
                                    <h1 className='font-bold py-1'>Ercan Erdal
                                    </h1>
                                    <div className='flex mt-2'>
                                        <h4 className='border-solid border-r-[1px] border-[#ccc] text-xs text-[#039] mr-2 pr-2'><a href='#'>All Ads</a></h4>
                                        <h4 className='border-r-[1px] text-xs mr-2 text-[#039]'><a href='#'>Add to My Favorite Sellers</a></h4>

                                    </div>
                                    <div className='bg-[#fff] rounded-md shadow-sm border-[1px] flex-col border-solid border-[c0c0c0] p-2 mt-2'>
                                        <div className='mb-1 flex'>
                                            <span className='font-bold'>Pocket</span> <span className='ml-8 text-sm '>0 (541) 131 23 53</span>
                                        </div>
                                        <div className='mb-1 flex'>
                                            <span className='font-bold'>Work</span> <span className='ml-10 text-sm '>0 (541) 131 23 53</span>
                                        </div>
                                    </div>
                                    <h3 className='text-center text-xs mt-2  text-[#039]'><a href='#'>Send Message</a></h3>
                                </div>
                            </div>

                            <div className='w-[100%] h-fit  border-[1px] p-2 mt-2'>
                                <div className="bg-[#efefef] w-full h-full justify-center items-center p-3 flex-col">
                                    <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>



                                        <a href='#' className='font-bold flex-1 ml-4'>Safety tips</a>

                                    </div>

                                    <div className='flex mt-2'>
                                        <p className='text-sm'>Never pay a deposit or send money without seeing the vehicle you are interested in</p>

                                    </div>

                                    <h3 className=' text-xs mt-2  text-[#039]'><a href='#'>Click for more informations</a></h3>
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
                    <div className='flex-2 mobile:w-[95%] mobile:mx-auto text-[#333]'>
                        <h1 className='text-[18px] font-medium text-sm text-[#333] h-[#18px] py-3 text-ellipsis '>



                        </h1>
                    </div>
                    {/* title */}
                    <div className="ml-2 flex">
                        <div className="my-auto mx-auto text-left font-medium text-lg">
                            THE ONLY ADDRESS OF COMFORT HEYKEL SUIT APART 0554 666 60 98
                            {/* {router.query.title} */}
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
                                        className=" w-full h-[528px] mobile:h-[300px]   mb-8 "
                                        key={index}
                                    >
                                        <Image
                                            src={image}
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        ></Image>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>





                <div className='w-[50%] mobile:w-full mobile:flex-col mobile:self-center mobile:my-5 bg-white flex self-start'>
                    {/* Product Imfo */}
                    <div className='w-[50%] mobile:mt-3 mobile:w-[95%] mobile:mx-auto flex-col'>
                        <div>
                            <h1 className='text-lg font-bold text-[#039] mb-2'>100T</h1>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm  w-[50%]'>
                                İlan No
                            </div>
                            <div className='text-red-500 w-[50%]'>
                                1239090293
                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Listing Date
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                February 16, 2023

                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Property Type
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                Daily rent

                            </div>
                        </div>

                        <div className='flex justify-between  py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                m² (Gross)
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                90

                            </div>
                        </div>

                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                m² (Net)
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                80

                            </div>
                        </div>


                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm  w-[50%]'>
                                Number of rooms
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                Studio (1+0)

                            </div>
                        </div>

                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Floor location
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                2

                            </div>
                        </div>

                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Number of Floors
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                4

                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Number of bathrooms
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                2

                            </div>
                        </div>

                        <div className='flex  justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Inside the Site
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                No

                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Site Name
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                Unspecified

                            </div>
                        </div>

                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                From who
                            </div>
                            <div className='self-start text-slate-800 text-xs w-[50%]'>
                                From the Real Estate Office

                            </div>
                        </div>



                    </div>
                    <div className=' flex-col ml-2 mobile:mt-5 mobile:ml-0 mobile:w-full w-[50%]'>
                        <div className='w-[100%]  h-fit  rounded-sm p-2'>
                            <div className="bg-[#dfdede] w-full h-full justify-center items-center p-3 flex-col">
                                <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>
                                    <img src="https://image5.sahibinden.com/stores/logos/02/06/19/671b272f33b668722242be2826613de3e5582921.png" className='w-[108] h-[40px] flex-2' />
                                    <a href='#' className='text-[#00339f] flex-1 ml-4'>HEYKEL SUİT APART</a>

                                </div>
                                <h1 className='font-bold py-1'>Ercan Erdal
                                </h1>
                                <div className='flex mt-2'>
                                    <h4 className='border-solid border-r-[1px] border-[#ccc] text-xs text-[#039] mr-2 pr-2'><a href='#'>All Ads</a></h4>
                                    <h4 className='border-r-[1px] text-xs mr-2 text-[#039]'><a href='#'>Add to My Favorite Sellers</a></h4>

                                </div>
                                <div className='bg-[#fff] rounded-md shadow-sm border-[1px] flex-col border-solid border-[c0c0c0] p-2 mt-2'>
                                    <div className='mb-1 flex'>
                                        <span className='font-bold'>Pocket</span> <span className='ml-8 text-sm '>0 (541) 131 23 53</span>
                                    </div>
                                    <div className='mb-1 flex'>
                                        <span className='font-bold'>Work</span> <span className='ml-10 text-sm '>0 (541) 131 23 53</span>
                                    </div>
                                </div>
                                <h3 className='text-center text-xs mt-2  text-[#039]'><a href='#'>Send Message</a></h3>
                            </div>
                        </div>

                        <div className='w-[100%] h-fit  border-[1px] p-2 mt-2'>
                            <div className="bg-[#dfdede] w-full h-full justify-center items-center p-3 flex-col">
                                <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>



                                    <a href='#' className='font-bold flex-1 ml-4'>Safety tips</a>

                                </div>

                                <div className='flex mt-2'>
                                    <p className='text-sm'>Never pay a deposit or send money without seeing the vehicle you are interested in</p>

                                </div>

                                <h3 className=' text-xs mt-2  text-[#039]'><a href='#'>Click for more informations</a></h3>
                            </div>
                        </div>
                    </div>

                </div>








            </div>

            <div className="border-b-[2px] border-solid border-[#ffc000] w-[97%]  mx-auto mt-5">
                    <button type="button" onClick={() => handleTabClick(0)} className={activeTab == 0 ? "bg-yellow-400 py-2 px-2 ml-2 w-[115px] rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#F3A847] to-[#ffc000]" : "py-2 ml-7 h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Ads Details</button>

                    <button type="button " onClick={() => handleTabClick(1)} className={activeTab == 1 ? "bg-yellow-400 py-2 px-2 ml-7  rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#F3A847] to-[#ffc000]" : "py-2 ml-7 h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Location And Street View</button>
                </div>
                <div className='border-[2px] mt-0 w-[97%]  mx-auto'>
                    {activeTab === 0 &&
                        <>
                            <div className='w-full  border-b-[1px] border-solid p-1  bg-gradient-to-t from-[#fff] to-[#e4e2e2] border-[#dedede]'>
                                <h1 className='font-bold ml-2'>Explantion</h1>

                            </div>
                            <div className='bg-white py-5 mt-5 mobile:mt-0 pl-5 mobile:px-2 border-[1px] solid border-t-0 w-ful '>
                                <h1 className='text-center'>
                                    FOR YOUR HEALTH,  WE STRONGLY REQUEST YOU TO READ THE MEASURES WE TAKE REGARDING THE VIRUS (COVID  19) CAREFULLY AND WITHOUT Boring!!

                                </h1>

                                <h1 className='text-center text-red-500'>
                                    FOR YOUR HEALTH,  WE STRONGLY REQUEST YOU TO READ THE MEASURES WE TAKE REGARDING THE VIRUS (COVID  19) CAREFULLY AND WITHOUT Boring!!

                                </h1>
                                <h1 className='text-blue-700 text-center'>

                                    DON'T RESPECT THE ADVERTISEMENTS WITHOUT PROOF AND BASIS, SUCH AS "MEASURES TAKEN" AND "WAS DONE IN DISINFECTION" Written in the Titles of the Ads!.

                                    K!
                                </h1>
                            </div>
                        </>
                    }
                    {activeTab === 1 && <div className='w-full  border-b-[1px] border-solid p-1 bg-gradient-to-t from-[#fff] to-[#e4e2e2] border-[#dedede]'>
                        <h1 className='font-bold ml-2'>Location</h1>
                    </div>}


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
