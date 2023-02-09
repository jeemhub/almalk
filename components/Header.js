import Image from "next/future/image";
import {
    SearchIcon,
    MenuIcon,
    ShoppingCartIcon,
    UserIcon,
    UserCircleIcon,
} from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import User_drop_down from './Dropdown';
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from './../slice/cartSlice';
import { useState } from 'react';
import SideNavigation from './SideNavigation';
import TintBackground from './TintBackground';

function Header() {
  const { data: session } = useSession();
  const router = useRouter()
  const items = useSelector(selectItems)
  

  const [sideBar, setSideBar] = useState(false);

  const setBarState = () => {
    setSideBar(!sideBar);
  };


  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-[#232F3E] sm:bg-[#121921] p-1 flex-grow py-2">
      <p  className="absolute -mt-2 ml-2 tablet:hidden items-center text-white">
          <MenuIcon onClick={setBarState} className="h-8" />
          </p>
          <div className="z-50">
          <SideNavigation act={sideBar} button={setBarState} session={session} />
      
      <TintBackground act={sideBar} button={setBarState} />
          </div>
        <div className=" ml-2 tablet:link mt-1 flex items-center flex-grow sm:flex-grow-0" onClick={() => router.push('/')}>
          <Image
            src="/Images/amazon.webp"
            className="cursor-pointer ml-10"
            height={24}
            width={80}
            alt="amazon"
            
          />
        </div>

        {/* pc search bar */}
        {/* <div className="flex absolute mt-28 w-[90%] right-0 left-0 m-auto sm:relative sm:mt-0 sm:flex items-center h-12 rounded-md flex-grow cursor-pointer"> */}
        <div className="hidden sm:mt-0 sm:flex items-center h-12 rounded-md flex-grow cursor-pointer px-5">
            <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" aria-label="Search" />
            <SearchIcon className="h-12 p-4 bg-[#febd69] hover:bg-[#F3A847] rounded-r-md" />
        </div>

        {/* account & list & card */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* pc login */}
          
            
           
            
            
            
            <div className="relative link flex items-center" onClick={() => router.push('/signin')}>

                

                <UserCircleIcon className="h-10" />
                <p className="hidden font-extrabold md:text-sm md:inline ml-1">Sign In</p>
            </div>
        </div>
      </div>
      {/* mobile search */}
      <div className="bg-[#232F3E]">
      <div className="flex w-[95%] mx-auto items-center h-[44px] rounded-md flex-grow cursor-pointer sm:hidden">
            <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" placeholder="Search Amazon" />
            <SearchIcon className="h-[44px] p-2 bg-[#febd69] hover:bg-[#F3A847] rounded-r-md" />
        </div>
      </div>
      
      {/* bottom nav */}
      {/* <div className="mt-14 sm:mt-0 flex items-center space-x-8 p-2 pl-2 font-semibold md:text-lg text-sm bg-[#232F3E] text-white h-12 overflow-x-auto scrollbar-hide"> */}
      <div className="flex items-center space-x-8 p-2 pl-2 font-semibold md:text-lg text-sm bg-[#232F3E] text-white h-12 overflow-x-auto scrollbar-hide">
        <p onClick={setBarState} className="link hidden tablet:flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All</p>
          <p className="link">Today`s Deals</p>
          <p className="link">Customer Service</p>
          <p className="link">Registry</p>
          <p className="link">Gift Cards</p>
          <p className="link">Sell</p>
      </div>
    </header>
  );
}

export default Header;
