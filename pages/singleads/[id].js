import  {useRouter}  from "next/router"
import Head from "next/head";
import React, { useEffect, useState } from "react";
//import Header from "../components/Header";
import Header from '../../components/Header'
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Share_drop_down from "../../components/Sharebutton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default (props) => {
    const router=useRouter();
    function getById(id,items){
        for(let i=0;i<items.length;i++){
            if(items[i]._id==id){
                return items[i];
            }
        }
    }
    var slider=getById(router.query.id,props.Slider)
    const { t, i18n } = useTranslation();
    const [images, setImages] = useState([])
    const [ownerName, setOwnerName] = useState(null)
    const [ownerPicture, setOwnerpicture] = useState(null)
    const [Imagespc, setImagespc] = useState([]);

    let options = { month: "long", day: "numeric", year: "numeric" };
    useEffect(() => {
        setImages(slider.images);
        const imagespc = slider.images.map((image) => ({
            original: image,
            thumbnail: image,
        }));
        setImagespc(imagespc);

        fetch(`${process.env.API_URL}/user/profile/${slider.owner}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(slider => {
                if (slider.name) {
                    setOwnerName(slider.name);
                }
                if (slider.picture) {
                    setOwnerPicture(slider.picture);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [slider.images]);


    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    const renderCustomItem = (item) => {
        return (
            <div className="image-gallery-image w-full h-[528px]">
                <img
                    src={item.original}
                    alt={"images"}
                    className="object-contain w-full h-full"
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
            breakpoint: { max: 480, min: 320 },
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
            {/* <Header /> */}
            {/* banner ads */}
            <div></div>
            {/* <Breadcrumbs /> */}



            {/* pc products */}
            <div className="hidden tablet:block max-w-screen-2xl mx-auto bg-[#fff] mt-5">
                <div className='flex-2 w-[98%] mx-auto mb-[-30px] text-[#333]'>
                    <h1 className='  text-xl font-bold text-[#333] h-[#18px] py-3 text-ellipsis '>



                        {slider.details}

                    </h1>
                </div>
                <div className="flex h-full space-x-5 mx-auto mt-10">
                    {/* image gallery */}
                    <div className="flex-auto ml-3 w-[650px]">
                        <ImageGallery items={Imagespc} showFullscreenButton={false} renderItem={renderCustomItem}
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
                                <h1 className='text-lg font-bold text-[#039] mb-2'>{slider.title}</h1>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm  w-[50%]'>
                                    item ID
                                </div>
                                <div className='text-red-500 w-[50%]'>
                                    {slider.itemNumber}
                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm  w-[50%]'>
                                    Price
                                </div>
                                <div className='text-red-500 w-[50%]'>
                                    {slider.price}  {slider.currency}
                                </div>
                            </div>
                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Location
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    {slider.location}

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    published time
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    {new Date(slider.createdAt).toLocaleDateString("en-US", options)}

                                </div>
                            </div>



                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Type
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    {slider.type}

                                </div>
                            </div>

                            <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                <div className='font-medium text-sm w-[50%]'>
                                    Status
                                </div>
                                <div className='text-slate-800 text-xs w-[50%]'>
                                    {slider.status}

                                </div>
                            </div>

                            {slider.requiredFields && (
                                <>
                                    {slider.requiredFields.map((field) => {
                                        return (
                                            <>
                                                {field.fieldValue ? (
                                                    <>
                                                        <div key={field.fieldName} className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                                            <div className='font-medium text-sm w-[50%]'>
                                                                {field.fieldName}
                                                            </div>
                                                            <div className='text-slate-800 text-xs w-[50%]'>
                                                                {field.fieldValue}
                                                            </div>
                                                        </div>
                                                    </>) : (<> </>)}

                                            </>
                                        );
                                    })}
                                </>
                            )}







                        </div>
                        <div className=' flex-col ml-2 mobile:mt-5 mobile:ml-0 mobile:w-full mr-2 w-[50%]'>
                            <div className='w-[100%]  h-fit  border-[1px] p-2'>
                                <div className="bg-[#efefef] w-full h-full justify-center items-center p-3 flex-col">
                                    <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>
                                        {ownerPicture ? (
                                            <>
                                                <img src={`https://codellab.s3.amazonaws.com/${ownerPicture}`} className='w-[108] h-[40px] flex-2' alt={ownerPicture} />

                                            </>
                                        ) : (
                                            <>
                                                <img src="https://image5.sahibinden.com/stores/logos/02/06/19/671b272f33b668722242be2826613de3e5582921.png" className='w-[108] h-[40px] flex-2' alt="profile" />
                                            </>
                                        )}
                                        <a href='#' className='text-[#00339f] flex-1 ml-4'>{ownerName}</a>

                                    </div>

                                    <div className='flex mt-2'>
                                        <h4 className='border-solid border-r-[1px] border-[#ccc] text-xs text-[#039] mr-2 pr-2' onClick={() => (router.push({
                                            pathname: `/useritems/[cat]`,
                                            query: {
                                                cat: slider.owner,
                                            }
                                        }))}><a href='#'>All Ads</a></h4>


                                    </div>
                                    <div className='bg-[#fff] rounded-md shadow-sm border-[1px] flex-col border-solid border-[c0c0c0] p-2 mt-2'>
                                        <div className='mb-1 flex'>
                                            <span className='font-bold'>Phone Number</span> <span className='ml-8 text-sm '>{slider.phone}</span>
                                        </div>
                                        {/* <div className='mb-1 flex'>
                                            <span className='font-bold'>Work</span> <span className='ml-10 text-sm '>0 (541) 131 23 53</span>
                                        </div> */}
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
                                        <p className='text-sm'>Never pay a deposit or send money without seeing the item you are interested in</p>

                                    </div>

                                    {/* <h3 className=' text-xs mt-2  text-[#039]'><a href='#'>Click for more informations</a></h3> */}
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
                            {slider.details}
                            {/* {router.query.title} */}
                        </div>
                    </div>
                    {/* image galery */}
                    <div className="mt-5 border-4 h-[400px]">
                        {/* share button */}
                        <div className="flex-auto absolute mt-2 right-3 bg-white rounded-full bg-opacity-40 z-40">
                            <Share_drop_down />
                        </div>
                        <div className="h-full mt-3">
                            <Carousel className="z-35" responsive={responsive}>
                                {images.map((image, index) => (
                                    <div
                                        className=" w-full  h-[350px]    "
                                        key={index}
                                    >
                                        <Image
                                            src={image}
                                            layout="fill"
                                            objectFit="contain"
                                            objectPosition="center"
                                            alt={image}
                                        ></Image>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>





                <div className='w-[50%] sm:flex sm:justify-between mobile:w-full mobile:flex-col mobile:self-center mobile:my-1 bg-white flex self-start'>
                    {/* Product Imfo */}
                    <div className='w-[50%] mobile:mt-3 mobile:w-[95%] mobile:mx-auto flex-col'>
                        <div>
                            <h1 className='text-lg font-bold text-[#039] mb-2'>{slider.title}</h1>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm  w-[50%]'>
                                Price
                            </div>
                            <div className='text-red-500 w-[50%]'>
                                {slider.price}  {slider.currency}
                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Location
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                {slider.location}

                            </div>
                        </div>
                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                published time
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                {new Date(slider.createdAt).toLocaleDateString("en-US", options)}


                            </div>
                        </div>



                        <div className='flex justify-between  py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Type
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                {slider.type}

                            </div>
                        </div>

                        <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                            <div className='font-medium text-sm w-[50%]'>
                                Status
                            </div>
                            <div className='text-slate-800 text-xs w-[50%]'>
                                {slider.status}

                            </div>
                        </div>




                        {slider.requiredFields && (
                            <>
                                {slider.requiredFields.map((field) => {
                                    return (
                                        <>
                                            {field.fieldValue ? (<>
                                                <div key={field.fieldName} className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                                    <div className='font-medium text-sm  w-[50%]'>
                                                        {field.fieldName}
                                                    </div>
                                                    <div className='text-slate-800 text-xs w-[50%]'>
                                                        {field.fieldValue}

                                                    </div>
                                                </div>

                                            </>) : (<> </>)}


                                        </>
                                    );
                                })}
                            </>
                        )}





                    </div>
                    <div className=' flex-col ml-2 mobile:mt-5 mobile:ml-0 mobile:w-full w-[50%]'>
                        <div className='w-[100%]  h-fit  rounded-sm p-2'>
                            <div className="bg-[#dfdede] w-full h-full justify-center items-center p-3 flex-col">
                                <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>

                                    {ownerPicture ? (
                                        <>
                                            <img src={`https://codellab.s3.amazonaws.com/${ownerPicture}`} className='w-[108] h-[40px] flex-2' />

                                        </>
                                    ) : (
                                        <>
                                            <img src="https://image5.sahibinden.com/stores/logos/02/06/19/671b272f33b668722242be2826613de3e5582921.png" className='w-[108] h-[40px] flex-2' />
                                        </>
                                    )}
                                    <a href='#' className='text-[#00339f] flex-1 ml-4'>{ownerName}</a>

                                </div>

                                <div className='flex mt-2'>
                                    <h4 className='border-solid border-r-[1px] border-[#ccc] text-xs text-[#039] mr-2 pr-2' onClick={() => (router.push({
                                        pathname: `/useritems/[cat]`,
                                        query: {
                                            cat: slider.owner,
                                        }
                                    }))}><a href='#'>All Ads</a></h4>


                                </div>
                                <div className='bg-[#fff] rounded-md shadow-sm border-[1px] flex-col border-solid border-[c0c0c0] p-2 mt-2'>
                                    <div className='mb-1 flex'>
                                        <span className='font-bold'>Phone Number</span> <span className='ml-8 text-sm '>{slider.phone}</span>
                                    </div>
                                    {/* <div className='mb-1 flex'>
                                        <span className='font-bold'>Work</span> <span className='ml-10 text-sm '>0 (541) 131 23 53</span>
                                    </div> */}
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
                                    <p className='text-sm'>Never pay a deposit or send money without seeing the item you are interested in</p>

                                </div>

                                <h3 className=' text-xs mt-2  text-[#039]'><a href='#'>Click for more informations</a></h3>
                            </div>
                        </div>
                    </div>

                </div>








            </div>

            <div className="border-b-[2px] border-solid border-[#ffc000] w-[97%] mobile:flex justify-center  mx-auto mt-5">
                <button type="button" onClick={() => handleTabClick(0)} className={activeTab == 0 ? "bg-[#f2e719] py-2 px-2 mobile:text-sm w-[115px] mobile:w-[40%] rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#f2e719] to-[#ffc000]" : "py-2 mobile:w-[30%] mobile:text-sm h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Ads Details</button>

                <button type="button " onClick={() => handleTabClick(1)} className={activeTab == 1 ? "bg-[#f2e719] py-2 px-2  ml-1 mobile:w-[70%] rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#f2e719] to-[#ffc000] mobile:text-sm" : "py-2  h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] ml-1 mobile:w-[60%] mobile:text-sm border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Location And Street View</button>
            </div>
            <div className='border-[2px] mt-0 w-[97%]  mx-auto'>
                {activeTab === 0 &&
                    <>
                        <div className='w-full  border-b-[1px] border-solid p-1  bg-gradient-to-t from-[#fff] to-[#e4e2e2] border-[#dedede]'>
                            <h1 className='font-bold ml-2'>Explantion</h1>

                        </div>
                        <div className='bg-white py-5 mt-5 mobile:mt-0 pl-5 mobile:px-2 border-[1px] solid border-t-0 w-ful '>
                            <h1 className='text-center text-xl'>
                                {slider.details}
                            </h1>

                            {/* <h1 className='text-center text-red-500'>
                                FOR YOUR HEALTH,  WE STRONGLY REQUEST YOU TO READ THE MEASURES WE TAKE REGARDING THE VIRUS (COVID  19) CAREFULLY AND WITHOUT Boring!!

                            </h1>
                            <h1 className='text-blue-700 text-center'>

                                DONT RESPECT THE ADVERTISEMENTS WITHOUT PROOF AND BASIS, SUCH AS MEASURES TAKEN AND WAS DONE IN DISINFECTION Written in the Titles of the Ads!.

                                K!
                            </h1> */}
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
    export async function getServerSideProps(context) {
       
        const resSlider=await fetch(`${process.env.API_URL}/diamond-ads`);
        const itemsSlider=await resSlider.json();
       
      return {
        props: {
          Slider:itemsSlider.diamondAds,
        }, // will be passed to the page component as props
      }
    }
