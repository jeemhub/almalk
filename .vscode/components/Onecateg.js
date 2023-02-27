
import Image from 'next/future/image'
import { useRouter } from 'next/router'
function Onecateg({ typename, title, src, linked }) {
  const router = useRouter()
  return (
    <div className=" bg-white m-1 mt:m-3 tablet:p-1 z-40 rounded-2xl tablet:h-full w-full  shadow-sm" onClick={() => router.push(`${linked}`)}>
        <p className=' tablet:mt-0 text-center mx-auto font-medium p-0 tablet:p-5  text-xs lg:text-base xl:text-xl text-black tablet:font-bold '>{typename}</p>
        
            
        <div className='mb-0 mx-auto w-32 tablet:w-full mt-5 bg-origin-padding tablet:p-4 border-4 border-none'>
        
        <Image className='rounded-lg cursor-pointer tablet:object-contain tablet:rounded-xl tablet:w-full tablet:h-full' src={src} height={1000} width={1000} alt={typename} />
        
        </div>
        
        <button className="cursor-pointer text-[#007185] hover:text-[#C7511F] mt-5 ml-2 hover:underline hover:underline-offset-8 hidden tablet:flex">{title}</button>
      
    </div>
  )
}

export default Onecateg