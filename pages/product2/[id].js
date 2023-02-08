import React from 'react'
import Header from '../../components/Header'
import ImageGallery from 'react-image-gallery';
import Image from 'next/future/image';
import Share_drop_down from '../../components/Sharebutton';
import StarRatings from 'react-star-ratings';
import { useDispatch } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import { addToCart } from '../../slice/cartSlice'
import { useRouter } from 'next/router'

function Product({api2}) {
    const router = useRouter()
    const title = api2.data.attributes.title
    const image = api2.data.attributes.image
    const price = api2.data.attributes.price
    const id = api2.data.id
    const dispatch = useDispatch()
    const addItemToCart = () => {
        const Product = {
            id,title,image,price
        }
        dispatch(addToCart(Product))
    }
    const addItemToCartandbuy = () => {
        const Product = {
            id,title,image,price
        }
        dispatch(addToCart(Product))
        router.push('/checkout')
    }

    const images = [
        {
          original: api2.data.attributes.image,
          thumbnail: api2.data.attributes.image,
        },
        {
          original: api2.data.attributes.image2,
          thumbnail: api2.data.attributes.image2,
        },
        {
          original: api2.data.attributes.image3,
          thumbnail: api2.data.attributes.image3,
        },
        {
            original: api2.data.attributes.image4,
            thumbnail: api2.data.attributes.image4,
          },
          {
            original: api2.data.attributes.image5,
            thumbnail: api2.data.attributes.image5,
          },
      ];

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2.5
        }
      };

    //   get color when changed fpr mobile //
      const [style, setStyle] = useState('black')
      const handleClick = (e) => {
        // access to e.target here
        // console.log(e.currentTarget.lastElementChild.firstElementChild.innerText);
        setStyle(e.currentTarget.lastElementChild.firstElementChild.innerText)
    }


    //   get color when changed for pc //
    const [stylepc, setStylepc] = useState('black')
    const [pricepc, setPricepc] = useState('$20.99')
    const handleClickpc = (e) => {
      // access to e.target here
    //   console.log(e.currentTarget.lastElementChild.firstElementChild.innerHTML);
      setStylepc(e.currentTarget.lastElementChild.firstElementChild.innerHTML)
      setPricepc(e.currentTarget.lastElementChild.lastElementChild.innerHTML)
  }





  return (
    <div className='bg-[#e5e7eb] tablet:bg-white'>
    <Header />
    {/* banner ads */}
    <div className='w-full h-14 bg-black'>dfgdf</div>
    
    
    {/* pc products */}
    <div className='hidden tablet:block max-w-screen-2xl mx-auto bg-[#fff]'>
    
        
        <div className='flex h-full space-x-5 mx-auto mt-10'>
            {/* image gallery */}
            <div className='flex-auto w-[520px] '>
            <ImageGallery items={images} />
            </div>
            {/* share button */}
            <div className='flex-auto w-14 h-14 z-40'>
                <Share_drop_down />
            </div>
            {/* title and description */}
            <div className='flex-auto w-[440px]'>
                {/* title */}
                <div className='text-2xl font-medium'>
                    {api2.data.attributes.title}
                </div>
                {/* brand */}
                <div>
                    <div className='flex cursor-pointer text-[#007185] hover:text-[#B12704] hover:underline hover:underline-offset-2 text-sm'>Brand: <div className='ml-2'>{api2.data.attributes.brand}</div></div>
                </div>
                {/* rating */}
                <div className='flex'>
                    <StarRatings
                        rating={parseFloat(api2.data.attributes.retingstar)}
                        starRatedColor="#F9AD3D"
                        numberOfStars={5}
                        name="rating"
                        starDimension="19px"
                        starSpacing="1px"
                    />
                    <h4 className='text-[#007185] pl-2 text-sm mt-1 lining-nums cursor-pointer hover:text-[#B12704] hover:underline hover:underline-offset-2'>{api2.data.attributes.ratings} ratings</h4>
                </div>
                {/* amazon choise */}
                <div>

                </div>
                
                    {api2.data.attributes.discount_price?(
                <div>
                        <div className='flex text-base text-[#565959]'>
                List Price: <div className='line-through ml-2'>${api2.data.attributes.price}</div>
            </div>
            
            <div className='flex text-[#565959] text-base'>
                With Deal: <div className='ml-2 text-lg text-[#B12704]'>{api2.data.attributes.discount_price}</div>
            </div>
            
            <div className='flex text-[#565959] text-base'>
                You Save: <div className='ml-2 text-[#B12704]'>${api2.data.attributes.price - api2.data.attributes.discount_price}</div>
            </div>
                </div>
                ):(
                 
                    <div className='flex text-base text-[#565959]'>
                        List Price: <div className='ml-2'>${api2.data.attributes.price}</div>
                    </div>
                )}
                {/* color selected */}
                <div>
                    Style: {stylepc}
                </div>
                {/* image boxes for color change */}
                <div className='flex flex-wrap'>
                    <div onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block -space-y-1'>
                        <div className=''>Black</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>white</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>yelow</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>pink</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>brown</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>blue</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>dark</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                    <div  onClick={(e) => handleClickpc(e)} className='border-2 w-28 h-12 flex cursor-pointer'>
                        <Image className='w-[50%] h-full object-contain' alt={api2.data.id} src={api2.data.attributes.image} height={100} width={100}></Image>
                        <div className='inline-block  -space-y-1'>
                        <div className=''>silver</div>
                        <div className=''>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                        </div>
                    </div>
                </div>
                {/* Product details  */}
                <div className='mt-5'>
                    <div className='font-bold text-lg'>
                        Product details
                    </div>
                    <div className='flex text-[#0F1111] text-xs font-bold mt-5'>
                        Brand: <div className='ml-3 text-sm text-[#565959] font-normal'>{api2.data.attributes.brand}</div>
                    </div>
                    <div className='flex text-[#0F1111] text-xs font-bold mt-2'>
                        Style: <div className='ml-3 text-sm text-[#565959] font-normal'>{stylepc}</div>
                    </div>
                    {/* <div className='flex text-[#0F1111] text-xs font-bold mt-2'>
                        Electric fan design: <div className='ml-3 text-sm text-[#565959] font-normal'>Table Fan</div>
                    </div>
                    <div className='flex text-[#0F1111] text-xs font-bold mt-2'>
                        Power Source: <div className='ml-3 text-sm text-[#565959] font-normal'>Battery Powered</div>
                    </div>
                    <div className='flex text-[#0F1111] text-xs font-bold mt-2'>
                        Room Type: <div className='ml-3 text-sm text-[#565959] font-normal'>Bedroom</div>
                    </div> */}
                    <div className='text-[#0F1111] text-sm mt-5'>
                    {api2.data.attributes.description}
                    </div>
                </div>
                {/* Customer ratings by feature */}
                <div>

                </div>

            </div>
            {/* add to cart and buy now and instock and Sponsored */}
            <div className='flex-auto flex flex-col'>
                <div className='w-[250px] border-2 h-full'>
                    <div className='mt-5 text-lg text-[#B12704] ml-5'>
                        ${api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}
                    </div>
                    <div className='ml-5 mt-2'>
                    Delivery Tue, Sep 27. Order within 22 hrs 37 mins
                    </div>
                    <div className='text-[#007600] text-lg ml-5'>
                    In Stock.
                    </div>
                    <button onClick={addItemToCart} className='mt-5 flex mx-auto w-[90%] button cursor-pointer'><div className='mx-auto'>Add to cart</div></button>
                    <button onClick={addItemToCartandbuy} className='mt-5 flex mx-auto w-[90%] button bg-[#FFA41C] border-[#FF8F00] hover:bg-[#FF8F00] cursor-pointer'><div className='mx-auto'>Buy Now</div></button>
                </div>
            </div>
            
        </div>
        
    </div>


    {/* mobile products */}
    <div className='mt-2 tablet:hidden'>
        {/* brand and ratings */}
        <div className='bg-[#FFF] h-full'>
        <div>
        <div className='flex ml-2 cursor-pointer text-[#007185] hover:text-[#B12704] hover:underline hover:underline-offset-2 text-sm'>Brand: <div className='ml-2'>{api2.data.attributes.brand}</div>
        <div className='flex absolute right-2'>
        <StarRatings
                        rating={parseFloat(api2.data.attributes.retingstar)}
                        starRatedColor="#F9AD3D"
                        numberOfStars={5}
                        name="rating"
                        starDimension="15px"
                        starSpacing="1px"
                    />
                    <h4 className='text-[#007185] pl-2 text-xs mt-1 lining-nums cursor-pointer hover:text-[#B12704] hover:underline hover:underline-offset-2'>{api2.data.attributes.ratings} ratings</h4>
        </div>
        </div>
        </div>
        
        {/* title */}
        <div className='text-sm ml-2 font-medium'>
                    {api2.data.attributes.title}
                </div>
                {/* image galery */}
        <div className='mt-5 border-4 h-[35vh]'>
            {/* share button */}
            <div className='flex-auto absolute mt-2 right-3 bg-white rounded-full bg-opacity-40 z-40'>
                <Share_drop_down />
            </div>
            <div className='h-[30vh]'>
            <Carousel className='z-35' responsive={responsive}>
                    
                <div className='w-screen  object-scale-down h-[30vh]'>
                    <Image className='w-screen  object-scale-down h-[30vh]' alt={api2.data.id} src={api2.data.attributes.image} width={100} height={100}></Image>
                </div>
                <div className='w-screen  object-scale-down h-[30vh]'>
                    <Image className='w-screen object-scale-down h-[30vh]' alt={api2.data.id} src={api2.data.attributes.image2} width={100} height={100}></Image>
                </div>
                <div className='w-screen  object-scale-down h-[30vh]'>
                    <Image className='w-screen  object-scale-down h-[30vh]' alt={api2.data.id} src={api2.data.attributes.image3} width={100} height={100}></Image>
                </div>
                <div className='w-screen  object-scale-down h-[30vh]'>
                    <Image className='w-screen  object-scale-down h-[30vh]' alt={api2.data.id} src={api2.data.attributes.image4} width={100} height={100}></Image>
                </div>
                <div className='w-screen  object-scale-down h-[30vh]'>
                    <Image className='w-screen  object-scale-down h-[30vh]' alt={api2.data.id} src={api2.data.attributes.image5} width={100} height={100}></Image>
                </div>
            </Carousel>
            </div>
            </div>
            
        
    </div>
    {/* color */}
    <div className='bg-[#fff] mt-2 pb-5'>
        <div className='ml-2 pt-5 mb-5'>Style: {style}</div>
        <Carousel className='z-40' responsive={responsive2}>

            <div onClick={(e) => handleClick(e)} className='w-[120px] h-full border-2 hover:border-[#e77600]'>
                <Image className='w-[120px] h-[120px] object-contain' alt={api2.data.id} src={api2.data.attributes.image} width={200} height={200}></Image>
                <div className='ml-2'>
                <div className='font-bold text-base'>black</div>
                <div>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price + 10):(api2.data.attributes.price + 10)}</div>
                <div className='text-[#008a00]'>in stock</div>
                </div>
            </div>
            <div onClick={(e) => handleClick(e)} className='w-[120px] h-full border-2 hover:border-[#e77600]'>
            <Image className='w-[120px] h-[120px] object-contain' alt={api2.data.id} src={api2.data.attributes.image} width={200} height={200}></Image>
                <div className='ml-2'>
                <div className='font-bold text-base'>white</div>
                <div>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price):(api2.data.attributes.price)}</div>
                <div className='text-[#008a00]'>in stock</div>
                </div>
            </div>
            <div onClick={(e) => handleClick(e)} className='w-[120px] h-full border-2 hover:border-[#e77600]'>
            <Image className='w-[120px] h-[120px] object-contain' alt={api2.data.id} src={api2.data.attributes.image} width={200} height={200}></Image>
                <div className='ml-2'>
                <div className='font-bold text-base'>yelow</div>
                <div>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price - 10):(api2.data.attributes.price - 10)}</div>
                <div className='text-[#008a00]'>in stock</div>
                </div>
            </div>
            <div onClick={(e) => handleClick(e)} className='w-[120px] h-full border-2 hover:border-[#e77600]'>
            <Image className='w-[120px] h-[120px] object-contain' alt={api2.data.id} src={api2.data.attributes.image} width={200} height={200}></Image>
                <div className='ml-2'>
                <div className='font-bold text-base'>pink</div>
                <div>{api2.data.attributes.discount_price ? (api2.data.attributes.discount_price + 20):(api2.data.attributes.price + 20)}</div>
                <div className='text-[#008a00]'>in stock</div>
                </div>
            </div>
        </Carousel>
    </div>
    <div className='bg-[#fff] mt-2'>
        {/* orignal price */}
        <div className="p-3">
        {api2.data.attributes.discount_price?(
                <div>
                        <div className='flex text-base text-[#565959]'>
                List Price: <div className='line-through ml-2'>${api2.data.attributes.price}</div>
            </div>
            
            <div className='flex text-[#565959] text-base'>
                With Deal: <div className='ml-2 text-lg text-[#B12704]'>{api2.data.attributes.discount_price}</div>
            </div>
            
            <div className='flex text-[#565959] text-base'>
                You Save: <div className='ml-2 text-[#B12704]'>${api2.data.attributes.price - api2.data.attributes.discount_price}</div>
            </div>
                </div>
                ):(
                 
                    <div className='flex text-base text-[#565959]'>
                        List Price: <div className='ml-2'>${api2.data.attributes.price}</div>
                    </div>
                )}
                {/* delivery date */}
                <div className='mt-2'>
                    Delivery Tue, Sep 27. Order within 22 hrs 37 mins
                    </div>
                {/* in stock or not */}
                    <div className='text-[#007600] text-lg'>
                    In Stock.
                    </div>
                {/* add to cart button */}
                    <button onClick={addItemToCart} className='mt-5 flex mx-auto w-[100%] h-12 button cursor-pointer text-xl rounded-xl'><div className='mx-auto'>Add to cart</div></button>
          {/* buy now button */}
                    <button onClick={addItemToCartandbuy} className='mt-5 flex mx-auto w-[100%] h-12 button bg-[#FFA41C] border-[#FF8F00] hover:bg-[#FF8F00] cursor-pointer text-xl rounded-xl'><div className='mx-auto'>Buy Now</div></button>
        </div>
    </div>
    <div className='bg-[#fff] mt-2'>
        {/* Product details  */}
        <div className='mt-2 p-5'>
                    <div className='font-bold text-lg'>
                        Product details
                    </div>
                    <div className='flex text-[#565959] text-base mt-5'>
                        Brand: <div className='ml-3 text-base text-[#0F1111] font-medium'>{api2.data.attributes.brand}</div>
                    </div>
                    <div className='flex text-[#565959] text-base mt-2'>
                        Style: <div className='ml-3 text-base text-[#0F1111] font-medium'>{style}</div>
                    </div>
                    {/* <div className='flex text-[#565959] text-xs mt-2'>
                        Electric fan design: <div className='ml-3 text-base text-[#0F1111] font-medium'>Table Fan</div>
                    </div>
                    <div className='flex text-[#565959] text-base mt-2'>
                        Power Source: <div className='ml-3 text-base text-[#0F1111] font-medium'>Battery Powered</div>
                    </div>
                    <div className='flex text-[#565959] text-base mt-2'>
                        Room Type: <div className='ml-3 text-base text-[#0F1111] font-medium'>Bedroom</div>
                    </div> */}
                </div>
    </div>
    <div className='bg-[#fff] mt-2'>
        <div className="p-5">
        <div>
            About this item
        </div>
    <div className='text-[#0F1111] text-sm mt-5'>
                    {api2.data.attributes.description}
                    </div>
                    </div>
    </div>
    </div>
    </div>
  )
}

export default Product


export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const api2 = await fetch(`https://amazoncms.herokuapp.com/api/products/${id}`).then(
        (res) => res.json()
      )

      return { props: {
        api2,
        
      }}
}