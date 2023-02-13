import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import {
    UserIcon,
} from "@heroicons/react/outline"
import User_drop_down from './Dropdown';
import { useRouter } from "next/router";
import Link from 'next/link';
import React, { useState, useEffect } from "react";

export default function SideNavigation(props) {
    if (typeof window !== 'undefined') {
        document.querySelector("body").style.overflow = props.act?"hidden":"";
      } else {
        console.log('You are on the server')
      }
      
      const router = useRouter()
const [categories, setCategories] = useState([]);
useEffect(() => {
    fetch("http://almalk.org:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className={props.act ? "sideNavigation active":"sideNavigation"}>
      <div className="sideNavNameHead">
        <div className="pl-5 pt-12 text-white">
        <div className="text-xl font-bold">Browse</div>
        <div className="block text-3xl -mt-2">Almalek</div>
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

      <div className="bg-[#fff] text-[#111] font-bold text-xl p-5" onClick={() => {router.push('/'); props.button}}>Almalek Home</div>
      {/* <div className="bg-[#fff] text-[#111] p-5 mt-2">
        <div className="font-bold text-xl">Trending</div>
        <Link key={'1'} href={{
            pathname: '/categorys/[cat]',
            query: { cat: 'mobiles' },
          }}>
        <div className="mt-5 text-base cursor-pointer" onClick={props.button}>Mobiles</div>
        </Link>
      </div> */}
      <div className="bg-[#fff] text-[#111] p-5 mt-2">
        <div className="font-bold text-xl">Departments</div>
        {categories.map((category) => (
          
          <div className="flex flex-row mt-2" key={category._id}>
          <Link key={category._id} href={{
            pathname: '/categorys/[cat]',
            query: { cat: `${category.name}` },
          }} className="flex flex-row">
        <div onClick={props.button} className="flex flex-row cursor-pointer"> 
        <img src={category.image[0]} alt={category.name} className="w-10 h-10 object-contain bg-slate-200 rounded-lg" />
        <div className="text-base cursor-pointer text-center ml-3 my-auto">{category.name}</div>
        </div>
        </Link>
          </div>
        
      ))}
        
        
        
      </div>
    </div>
  );
}