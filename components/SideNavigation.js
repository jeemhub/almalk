import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import {
    UserIcon,
} from "@heroicons/react/outline"
import User_drop_down from './Dropdown';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function SideNavigation(props) {
    if (typeof window !== 'undefined') {
        document.querySelector("body").style.overflow = props.act?"hidden":"";
      } else {
        console.log('You are on the server')
      }
      
      const router = useRouter()

  return (
    <div className={props.act ? "sideNavigation active":"sideNavigation"}>
      <div className="sideNavNameHead">
        <div className="pl-5 pt-12 text-white">
        <div className="text-xl font-bold">Browse</div>
        <div className="block text-3xl -mt-2">Amazon</div>
        </div>
        <CloseIcon
          style={{
            color: "white",
            marginLeft: "auto",
            height: "35px",
            width: "35px"
          }}
          onClick={props.button}
        />
      </div>

      <div className="bg-[#fff] text-[#111] font-bold text-xl p-5" onClick={() => {router.push('/'); props.button}}>Amazon Home</div>
      <div className="bg-[#fff] text-[#111] p-5 mt-2">
        <div className="font-bold text-xl">Trending</div>
        <Link key={'1'} href={{
            pathname: '/categorys/[cat]',
            query: { cat: 'mobiles' },
          }}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>Mobiles</div>
        </Link>
      </div>
      <div className="bg-[#fff] text-[#111] p-5 mt-2">
        <div className="font-bold text-xl">Departments</div>
        <Link key={'2'} href={{
            pathname: '/categorys/[cat]',
            query: { cat: 'mobiles' },
          }}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>Mobiles</div>
        </Link>
        <Link key={'3'} href={'/categorys/tablets'}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>Tablets</div>
        </Link>
        <Link key={'4'} href={{
            pathname: '/categorys/[cat]',
            query: { cat: 'jewelery' },
          }}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>jewelery</div>
        </Link>
        <Link key={'5'} href={'/categorys/Headphones'}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>Headphones</div>
        </Link>
        <Link key={'5'} href={'/categorys/electronics'}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>electronics</div>
        </Link>
      </div>
    </div>
  );
}
