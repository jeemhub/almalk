import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { useState } from "react";
import {
  UserIcon,
} from "@heroicons/react/outline"
import Image from "next/future/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Share_drop_down() {
  const { t, i18n } = useTranslation();
    const [copied, setCopied] = useState(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
      }
  return (
    <div className="z-40 hover:bg-opacity-70">
    <Menu as="div" className="ml-auto relative">
      <div>
        <Menu.Button id="text">
          <div>
          <svg className='ring-1 ring-[#ddd] rounded-full p-1 w-8 h-8' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.71 6.71L11 5.41V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V5.41L14.29 6.71C14.383 6.80373 14.4936 6.87812 14.6154 6.92889C14.7373 6.97966 14.868 7.0058 15 7.0058C15.132 7.0058 15.2627 6.97966 15.3846 6.92889C15.5064 6.87812 15.617 6.80373 15.71 6.71C15.8037 6.61704 15.8781 6.50644 15.9289 6.38458C15.9797 6.26272 16.0058 6.13201 16.0058 6C16.0058 5.86799 15.9797 5.73728 15.9289 5.61542C15.8781 5.49356 15.8037 5.38296 15.71 5.29L12.71 2.29C12.617 2.19627 12.5064 2.12188 12.3846 2.07111C12.2627 2.02034 12.132 1.9942 12 1.9942C11.868 1.9942 11.7373 2.02034 11.6154 2.07111C11.4936 2.12188 11.383 2.19627 11.29 2.29L8.29 5.29C8.1017 5.4783 7.99591 5.7337 7.99591 6C7.99591 6.2663 8.1017 6.5217 8.29 6.71C8.47831 6.8983 8.7337 7.00409 9 7.00409C9.2663 7.00409 9.5217 6.8983 9.71 6.71Z" fill="#0F1111"/>
                <path d="M18 9H15V11H18V20H6V11H9V9H6C5.46957 9 4.96086 9.21071 4.58579 9.58579C4.21071 9.96086 4 10.4696 4 11V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V11C20 10.4696 19.7893 9.96086 19.4142 9.58579C19.0391 9.21071 18.5304 9 18 9Z" fill="#0F1111"/>
            </svg>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-50 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-[#febd69]" : "",
                  "flex px-4 py-2 text-sm text-black"
                )} onClick={copy}
              >
            {t("CopyLink")}
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-[#febd69]" : "",
                  "block px-4 py-2 text-sm text-black"
                )}
              >
                {t("ShareToTweter")}
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
          {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-[#febd69]" : "",
                  "block px-4 py-2 text-sm text-black"
                )}
              >
                {t("ShareToFacebook")}
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  );
}
