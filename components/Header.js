import { useState, useEffect } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import User_drop_down from "./Dropdown";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "./../slice/cartSlice";
import SideNavigation from "./SideNavigation";
import TintBackground from "./TintBackground";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Dropdown from './Dropdown'
function Header() {
  const { t, i18n } = useTranslation();

  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const { userToken } = useSelector((state) => state.user);

  const [sideBar, setSideBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handelLogout = () => {
    Cookies.remove("loggedin", "true");
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

  return (
    <>
      <header>
        {/* Top nav */}
        <div className="flex items-center bg-[#232F3E] sm:bg-[#121921] p-1 flex-grow py-2">
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
          <div className="ml-20 tablet:ml-2 tablet:link mt-1 flex items-center flex-grow tablet:flex-grow-0 justify-center">
            <Image
              onClick={() => router.push("/")}
              src="/Images/amazon.webp"
              className="cursor-pointer ml-10 object-cover rounded-full"
              height={24}
              width={80}
              alt="amazon"
            />
          </div>
          {/* pc search bar */}
          <div className="hidden tablet:mt-0 tablet:flex items-center h-12 rounded-md flex-grow cursor-pointer px-5">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              onChange={(e) => {
                setSearchText(e.currentTarget.value);
              }}
              onKeyUp={handleKeyUp}
              placeholder="Search Amazon"
            />
            <SearchIcon
              className="h-12 p-4 bg-[#febd69] text-white hover:bg-[#F3A847] rounded-r-md"
              onClick={handleSearch}
            />
          </div>
          {userToken ? (
            <>
              {/* <button
                onClick={() => router.push("/additem")}
                className="h-12 p-2 bg-[#febd69] ml-5 text-white text-center hover:bg-[#F3A847] rounded-md hidden tablet:flex"
              >
                {t("additem")}+
              </button> */}
              <button
                onClick={() => router.push("/additem")}
                className=" items-center justify-center hidden tablet:flex bg-[#febd69] hover:bg-[#F3A847] text-white font-bold py-3 px-4 rounded">
                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            {i18n.language == "en" && (
              <button
                onClick={() => {
                  i18n.changeLanguage("ar");
                }}
                className="text-white text-md font-bold border rounded-md p-2"
              >
                AR
              </button>
            )}
            {i18n.language == "ar" && (
              <button
                onClick={() => {
                  i18n.changeLanguage("kr");
                }}
                className="text-white text-md font-bold border rounded-md p-2"
              >
                KR
              </button>
            )}
            {i18n.language == "kr" && (
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                className="text-white text-md font-bold border rounded-md p-2"
              >
                EN
              </button>
            )}
            {userToken ? (
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
                className="relative link flex items-center"
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
        <div className="bg-[#232F3E]">
          <div className="flex w-[95%] mx-auto items-center h-[44px] rounded-md flex-grow cursor-pointer tablet:hidden">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              placeholder="Search Amazon"
              onChange={(e) => {
                setSearchText(e.currentTarget.value);
              }}
              onKeyUp={handleKeyUp}
            />
            <SearchIcon
              className="h-[44px] p-2 bg-[#febd69] text-white hover:bg-[#F3A847] rounded-r-md"
              onClick={handleSearch}
            />

            {userToken ? (
              <>
                {/* <button
                  onClick={() => router.push("/additem")}
                  className="h-[44px] p-2 bg-[#febd69] ml-2 hover:bg-[#F3A847] rounded-md"
                >
                  {t("additem")}+
                </button> */}
                <button
                  onClick={() => router.push("/additem")}
                  className="flex items-center justify-center h-[44px]  bg-[#febd69] hover:bg-[#F3A847] text-white font-bold py-2 px-4 ml-2 rounded">
                  <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
        <div className="flex items-center space-x-8 p-2 pl-2 font-semibold md:text-lg text-sm bg-[#232F3E] text-white h-12 overflow-x-auto scrollbar-hide">
          <p
            onClick={() => setSideBar(!sideBar)}
            className="link hidden tablet:flex items-center"
          >
            <MenuIcon className="h-6 mr-1" />
            {t("allcategories")}
          </p>
          <p className="link">{t("TodaysDeals")}</p>
          <p className="link">{t("customerservice")}</p>
          <p className="link">{t("Registry")}</p>
          <p className="link">{t("giftcards")}</p>
          <p className="link">{t("sell")}</p>
        </div>
      </header>
    </>
  );
}

export default Header;
