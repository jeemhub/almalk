import Image from 'next/future/image'
import { useRouter } from 'next/router'


function Homeproductfeed({ category, id, image, description, rating, price, title }) {
  const router= useRouter();
  return (
    
    <div className='' onClick={() => router.push(`/product/${id}`)}>
        <div className="box-border border-none gap-4 w-full tablet:h-full tablet:w-full tablet:p-4 border-4 mx-auto hover:scale-90 ease-in duration-150">
        <Image className='cursor-pointer object-contain mx-auto w-[100%] h-[100%] tablet:w-[70%] tablet:h-[70%]' src={image} alt={id} height={50} width={50} />
        <div className='hidden tablet:block cursor-pointer text-xs tablet:text-sm text-center truncate '>{title}</div>
        </div>
        
        
    </div>
    
  )
}

export default Homeproductfeed