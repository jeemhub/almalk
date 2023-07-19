import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from 'axios';
import { clearAuthState } from '../slice/authSlice';
// import { FaViber } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { FaViber } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa6";
import { UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function User_drop_down({ session, children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  async function handleLogout() {
    const res = await fetch("https://almalik-application.onrender.com/api/logout/",{method: "POST"});
    const data =await res.json();
     //console.log("data of logout");  
     //console.log(data);
    dispatch(clearAuthState()); // Clear Redux state  
    // clearCookies();// Clear cookies
    router.push("/"); // Redirect to the desired page
  }
    // axios
    //   .post("https://almalik-application.onrender.com/api/logout/")
    //   .then(() => {
    //     clearCookies(); // Clear cookies

    //     dispatch(clearAuthState()); // Clear Redux state

    //     router.push("/"); // Redirect to the desired page
    //   })
    //   .catch((error) => {
    //      //console.log(error);
    //   });
  // }
  return (
    <div className="z-50 hover:bg-opacity-70">
      <Menu as="div" className="ml-auto relative">
        <div>
          <Menu.Button>
            {/* pc login icon */}
            <div className="hidden tablet:block link">
              <p>
                {session ? `Hello, ${session.user.name}` : "Hello, sign in"}
              </p>
              <p className="font-extrabold md:text-sm">
                {t("Account")} & {t("Lists")}
              </p>
            </div>
            {/* mobile login icon */}
            <div className="link tablet:hidden">
              <UserIcon className="h-8 text-white " />
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-40 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-50 focus:outline-none flex flex-col items-center justify-items-end">
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <button
                  onClick={()=>{router.push("/usersettings")}}
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black flex items-center font-bold w-full flex justify-end "
                  )}
                >
                  الملف الشخصي
                  <FaUserLarge className="text-xl ml-4" />
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a
                  href="/wishList"
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black  items-center font-bold w-full flex justify-end "
                  )}
                >
                  مفضلتي
                  <FaBookmark className="text-2xl ml-4" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a
                  href="/usersettings"
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black  items-center font-bold w-full flex justify-end "
                  )}
                >
                  الرصيد
                  <FaDollarSign className="text-2xl ml-4" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a
                  href="/usersettings"
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black  items-center font-bold w-full flex justify-end"
                  )}
                >
                  تعديل الحساب
                  <FaRegPenToSquare className="text-2xl ml-4" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a
                  href="/usersettings"
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black  items-center font-bold w-full flex justify-end"
                  )}
                >
                  مساعدة
                  <FaSeedling className="text-2xl ml-4" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <button
                  onClick={() => {handleLogout()}}
                  className={classNames(
                    active ? "bg-[#f1b51f]" : "",
                    "px-6 py-2 text-sm text-black  items-center font-bold w-full flex justify-end"
                  )}
                >
                  تسجيل الخروج
                  <FaRightFromBracket className="text-2xl ml-4" />
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item onClick={() => signOut()}>
            {({ active }) => (
              <a
                href='/'
                className={classNames(
                  active ? "bg-[#f1b51f]" : "",
                  "block px-4 py-2 text-sm text-black"
                )}
              >
               {children}
              </a>
            )}
          </Menu.Item> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
