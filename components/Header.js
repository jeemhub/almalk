import { useState, useEffect ,useRef } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import User_drop_down from "./Dropdown";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "./../slice/cartSlice";
import SideNavigation from "./SideNavigation";
import TintBackground from "./TintBackground";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Dropdown from './Dropdown'
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import LoadingOverlay from './LoadingOverlay';
import LanguageDropdown from './LanguageDropdown'
import { FaRegCopy } from "react-icons/fa";

function Header() {
  const token = useSelector((state) => state.auth.token);

  var loggedin=Cookies.get('loggedin')
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const { t, i18n } = useTranslation();
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const { userToken } = useSelector((state) => state.user);

  const [sideBar, setSideBar] = useState(false);
  const [lanPop, setlanPop] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const copyTextToClipboard = () => {
    if(copied){
      setCopied(!copied)
    }else{
      if (textRef.current) {
        const textElement = textRef.current.innerText;
        navigator.clipboard.writeText(textElement);
        setCopied(true);
      }
    }
  };
  const handelLogout = () => {
    Cookies.remove("loggedin", "true");
    Cookies.remove("id", "true");
    Cookies.remove("token", "true");
    Cookies.remove("name", "true");

  };
  const handleSearch = async () => {
    const res = await fetch(`${process.env.API_URL}/search/${searchText}`);
    const data = await res.json();
    setSearchResults(data);
  };

  const handleSeeMore = () => {
    setSearchResults([]);
    router.push(`/search/${encodeURIComponent(searchText)}`);
  };

  function handleClicked(
    _id
  ) {
    setSearchResults([]);
    router.push({
      pathname: `/adsproduct/${_id}`,
    });
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSeeMore();
      setSearchResults([]);
    } else {
      handleSearch();
    }
  };


  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
     const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [loggedin])

  return (
    <>
      <header>
        {isLoading &&
        <LoadingOverlay />
        }
        {/* Top nav */}
        <div className="flex items-start pt-6 bg-[#1c505e] sm:bg-[#1c505e] p-1 flex-grow py-2 ">
       
          <p className="absolute -mt-2 ml-2 tablet:hidden items-center text-white">
            <MenuIcon onClick={() => setSideBar(!sideBar)} className="h-8" />
          </p>
          
          <div className="z-50">
            <SideNavigation
              act={sideBar}
              button={() => setSideBar(!sideBar)}
              session={session}
            />
            <TintBackground act={sideBar} button={() => setSideBar(!sideBar)} />
          </div>
          
          <div className="ml-20 tablet:ml-2 p- cursor-pointer mt-1 flex items-center flex-grow tablet:flex-grow-0 justify-center">
            {/* <Image
              onClick={() => router.push("/")}
              src="/Images/amazon.webp"
              className="cursor-pointer ml-10  object-cover rounded-full "
              height={24}
              width={80}
              alt="amazon"
            /> */}
            <h1  onClick={() => router.push("/")} className='bg-[#f1b51f] text-[#1c505e] font-bold p-2 rounded-md text-4xl h-16'>Almalk.org</h1>
          </div>
          {/* pc search bar */}
          <div className="hidden tablet:mt-0 tablet:flex items-center h-16 rounded-md flex-grow cursor-pointer px-12">
            <input
              className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
              type="text"
              onChange={(e) => {
                setSearchText(e.currentTarget.value);
              }}
              onKeyUp={handleKeyUp}
              placeholder="Search Almalk"
            />
            <SearchIcon
              className="h-16 p-4 bg-[#f1b51f] text-white hover:bg-[#b8ae00] rounded-r-md"
              onClick={handleSearch}
            />
          </div>

          {/* ====================== invite code ========================== */}

          <button  onClick={copyTextToClipboard} className='border-double border-4 border-green-600 bg-white p-2 mr-4 rounded-md h-16 flex items-center font-bold gap-2 text-green-600 hover:border-white hover:bg-green-600 hover:text-white'>
          {copied ? 
          <>
          <FaCheck className='text-xl'/>
          <p>copied</p>
          </>
          :
          <>
             <FaRegCopy className=' text-xl'/>
             <p ref={textRef}>
            6XY2U9P
             </p>

          </>
          }
          </button>
          {token ? (
            <>
              {/* <button
                onClick={() => router.push("/additem")}
                className="h-12 p-2 bg-[#f1b51f] ml-5 text-white text-center hover:bg-[#b8ae00] rounded-md hidden tablet:flex"
              >
                {t("additem")}+
              </button> */}
              <button
                onClick={() => router.push("/additem")}
                className=" items-center justify-center hidden tablet:flex bg-[#f1b51f] hover:bg-[#b8ae00] text-[#1c505e] font-bold py-3 px-4 rounded h-16">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 18a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1zM18 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1z" />
                </svg>
                <span>Add Item</span>
              </button>

            </>
          ) : (
            <></>
          )}
          {/* account & list & card */}
          <div className="text-white flex items-center text-xs space-x-6 mx-3 whitespace-nowrap">
            {/* pc login */}
            <LanguageDropdown/>
              {/* <button
                // onClick={() => {
                //   i18n.changeLanguage("ar");
                // }}
                onClick={()=>setlanPop(!lanPop)}
                className="text-white text-lg  font-bold border rounded-md p-4 h-16 flex items-center "
              >
                اللغة
                <FaSortDown className="text-xl mx-2"/>
              </button>
              {
                lanPop?
                <div className="bg-white flex flex-col gap-2 h-auto w-24 absolute top-24 z-50 rounded-md border border-solid boarder-2 border-black py-4 animate-[wiggle_1s_ease-in-out_infinite]">
                <button className='text-black text-lg cursor-pointer hover:bg-red-600 '>English</button>
                <button className='text-black text-lg cursor-pointer hover:bg-red-600'>العربية</button>
              </div>
              :<></>
              } */}
         
            {token ? (
              <Dropdown>
                <div
                  className="relative link flex items-center"
                  onClick={handelLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className=" h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <p className="font-extrabold md:text-sm md:inline ml-1">
                    {t("signout")}
                  </p>
                </div>
              </Dropdown>
            ) : (
              <div
                className="relative  cursor-pointer flex items-center"
                onClick={() => router.push("/signin")}
              >
                <UserCircleIcon className="h-10" />
                <p className="hidden font-extrabold md:text-sm md:inline ml-1">
                  {t("signin")}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="h-full bg-white text-black hidden tablet:flex">
          {searchResults.length > 0 && (
            <div className="top-full w-full bg-white text-white shadow-lg">
              {searchResults.slice(0, 3).map((result, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    handleClicked(
                      result._id
                    )
                  }
                >
                  <p className="text-black">{result.title}</p>
                </div>
              ))}

              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={handleSeeMore}
              >
                <p className="text-blue-500">{t("seemore")}</p>
              </div>
            </div>
          )}
        </div>
        {/* mobile search */}
        <div className="bg-[#1c505e]">
          <div className="flex w-[95%] mx-auto items-center h-[44px] rounded-md flex-grow cursor-pointer tablet:hidden">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              placeholder="Search Almalk"
              onChange={(e) => {
                setSearchText(e.currentTarget.value);
              }}
              onKeyUp={handleKeyUp}
            />
            <SearchIcon
              className="h-[44px] p-2 bg-[#f1b51f] text-white hover:bg-[#b8ae00] rounded-r-md"
              onClick={handleSearch}
            />

            {token ? (
              <>
                {/* <button
                  onClick={() => router.push("/additem")}
                  className="h-[44px] p-2 bg-[#f1b51f] ml-2 hover:bg-[#b8ae00] rounded-md"
                >
                  {t("additem")}+
                </button> */}
                <button
                  onClick={() => router.push("/additem")}
                  className="flex items-center justify-center h-[44px]  bg-[#f1b51f] hover:bg-[#b8ae00] text-white font-bold py-2 px-4 ml-2 rounded">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1zM18 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1z" />
                  </svg>
                  <span>Add Item</span>
                </button>

              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="h-full bg-white text-black flex tablet:hidden">
          {searchResults.length > 0 && (
            <div className="top-full w-full bg-white text-white shadow-lg">
              {searchResults.slice(0, 3).map((result, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    handleClicked(
                      result._id
                    )
                  }
                >
                  <p className="text-black">{result.title}</p>
                </div>
              ))}

              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={handleSeeMore}
              >
                <p className="text-blue-500">{t("seemore")}</p>
              </div>
            </div>
          )}
        </div>
        {/* bottom nav */}
        <div className="flex items-center space-x-8 p-2 pl-2 font-semibold md:text-lg text-sm bg-[#1c505e] text-white h-12 overflow-x-auto scrollbar-hide ">
          <p
            onClick={() => setSideBar(!sideBar)}
            className="link hidden tablet:flex items-center cursor-pointer"
          >
            <MenuIcon className="h-6 mr-1 cursor-pointer" />
            {t("allcategories")}
          </p>
          {/* <p className="link">{t("TodaysDeals")}</p>
          <p className="link">{t("customerservice")}</p>
          <p className="link">{t("Registry")}</p>
          <p className="link">{t("giftcards")}</p>
          <p className="link">{t("sell")}</p>
          <Link href='/SupportPage'>
          <button className="link">Support</button>
          </Link>
          <Link href='/wishList'>
          <button className="link">Wish List</button>
          </Link> */}
          
           <Link href='/'>
          <button className="link cursor-pointer">الربح من المالك</button>
          </Link>
           <Link href='/'>
          <button className="link cursor-pointer">تأجير سيارة</button>
          </Link>
           <Link href='/'>
          <button className="link cursor-pointer ltr">FBA المالك </button>
          </Link>
           <Link href='/'>
          <button className="link cursor-pointer">اكاديمية المالك</button>
          </Link>
           <Link href='/'>
          <button className="link cursor-pointer">محرك الوظائف</button>
          </Link>
           <Link href='/'>
          <button className="link cursor-pointer">المزاد العلني</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
