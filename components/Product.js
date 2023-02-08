import Image from 'next/future/image'
import StarRatings from 'react-star-ratings';
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/cartSlice'

function Product( { category, id, image, description, rating, price, title } ) {
    const dispatch = useDispatch()
    const addItemToCart = () => {
        const Product = {
            id, image, price, title
        }
        dispatch(addToCart(Product))
    }
    return (
    <div className='relative flex md:flex-col mt-3 bg-white z-30 p-2 rounded-2xl'>
        {/* <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p> */}

        <div className=' border-4 w-20 min-w-max h-20 md:w-40 md:h-40 flex md:mx-auto object-scale-down'>
        <Image className="cursor-pointer max-w-none object-scale-down w-20 md:w-full h-full" src={image} width={100} height={100} loading="lazy" alt={id} />
        </div>
        <div className='md:flex flex-col ml-1'>
        <h4 className='md:my-3 leading-5 text-sm md:text-base cursor-pointer hover:text-[#B12704] md:border-4 border-none'>{title}</h4>
        <div className='flex cursor-pointer'>
        <StarRatings
          rating={parseFloat(rating.rate || rating)}
          starRatedColor="#F9AD3D"
          numberOfStars={5}
          name="rating"
          starDimension="19px"
          starSpacing="1px"
        />
        <h4 className='text-[#007185] pl-2 text-sm mt-1 lining-nums cursor-pointer hover:text-[#B12704]'>{rating.count}</h4>
        </div>
        

        <div className='mb-5 cursor-pointer'>
            <Currency quantity={price} currency='USD' />
        </div>

        {/* here i need to add function >> if prime true in database show it */}
            <div className='flex items-center space-x-2 -mt-5'>
                <Image className='w-14' src='/Images/Prime.webp' width={56} height={56} alt='prime' />
                <p className='text-xs text-gray-500'>Free Delivery</p>
            </div>
        <button onClick={addItemToCart} className='mt-auto button cursor-pointer'>Add to cart</button>
        </div>
        
    </div>
  )
}

export default Product

{/* <div class="flex items-center justify-center ">
        <div class="flex items-center justify-between h-24 text-white bg-purple-600 rounded-lg shadow-md">
        <img class="h-40 w-40 py-2 pr-4 " src={image}></img>
            <div class="flex flex-col px-4">
                <span class="text-xs text-purple-300">Next visit</span>
                <p class="text-2xl font-semibold uppercase">19 Oct 2021</p>
            </div>
            
        </div>
    </div> */}