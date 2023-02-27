import Header from "../components/Header"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from './../components/Profile';
export default function usersettings() {
  return (
    <div >
        <Header></Header>
        <div className="">
             <Profile/>
        </div>
    </div>
  )
}