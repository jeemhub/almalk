import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
import {
  UserIcon,
} from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function User_drop_down({ session }) {
  return (
    <div className="z-40 hover:bg-opacity-70">
    <Menu as="div" className="ml-auto relative">
      <div>
        <Menu.Button>
          {/* pc login icon */}
          <div className="hidden tablet:block link">
        <p>
              {session ? `Hello, ${session.user.name}` : 'Hello, sign in'}
              
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-50 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-[#febd69]" : "",
                  "block px-4 py-2 text-sm text-black"
                )}
              >
                Your Profile
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
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item onClick={() => signOut()}>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-[#febd69]" : "",
                  "block px-4 py-2 text-sm text-black"
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  );
}
