import Image from 'next/future/image';
import { useSession, signIn, signOut } from "next-auth/react"

function Signin() {
  const { data: session } = useSession();
  return (
    <div className='z-40'>
    <div className={`grid grid-cols-1 w-full tablet:h-auto mt-5 tablet:mt-1 bg-white rounded-xl shadow-sm ${!session ? "grid" : "hidden"}`}>
        <p className='mt-3 ml-5 font-bold text-xs lg:text-sm xl:text-lg text-black tablet:font-bold'>Sign in for the best experience</p>
        <button onClick={() => signIn()} className='bg-[#FFD814] border-[#FCD200] cursor-pointer w-[90%] mx-auto h-12 rounded-lg mt-3'>Sign in securely</button>
        <button onClick={() => signIn()} className='text-[#007185] w-fit cursor-pointer flex ml-5 mt-2 hover:text-[#C7511F] hover:underline hover:underline-offset-8'>Create an account</button>
    </div>
    <div className='hidden tablet:block mt-5 w-[100%]  bg-cover mx-auto shadow-sm'>
        <Image src='/Images/shipbanner.webp' className='rounded-2xl' height={1000} width={1000} alt='shipcount'></Image>
    </div>
    </div>
  )
}

export default Signin