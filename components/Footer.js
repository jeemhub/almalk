import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t, i18n } = useTranslation();
    return (
      <div>
      <div class="bg-gray-100">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("Home")}</div>
            <a class="my-3 block" href="/#">{t("Services")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Products")}<span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("About Us")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Pricing")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Partners")} <span class="text-teal-600 text-xs p-1">{t("New")}</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("User")}</div>
            <a class="my-3 block" href="/#">{t("signin")}<span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("New Account")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Demo")} <span class="text-teal-600 text-xs p-1">{t("New")}</span></a><a class="my-3 block" href="/#">{t("Career")} <span class="text-teal-600 text-xs p-1">{t("We're hiring")}</span></a><a class="my-3 block" href="/#">{t("Surveys")} <span class="text-teal-600 text-xs p-1">{t("New")}</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("Resources")}</div>
            <a class="my-3 block" href="/#">{t("Documentation")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Tutorials")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Support")} <span class="text-teal-600 text-xs p-1">{t("New")}</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("Product")}</div>
            <a class="my-3 block" href="/#">{t("Our Products")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Great Deals")} <span class="text-teal-600 text-xs p-1">{t("New")}</span></a><a class="my-3 block" href="/#">{t("Analytics")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Mobile")} <span class="text-teal-600 text-xs p-1"></span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("Support")}</div>
            <a class="my-3 block" href="/#">{t("Help Center")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Privacy Policy")} <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">{t("Conditions")} <span class="text-teal-600 text-xs p-1"></span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">{t("Contact us")}</div>
            <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com <span class="text-teal-600 text-xs p-1"></span></a> 
         </div>
      </div>
   </div>
   
   <div class="bg-gray-100 pt-2 ">
      <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
         md:flex-row max-w-6xl">
         <div class="mt-2">© Copyright 2020. All Rights Reserved.</div>
         <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" class="p-1 bg-gray-500 rounded-xl mx-1">
                <FaFacebookF color='#fff'/>
            </a>
            <a href="/#" class="p-1 bg-gray-500 rounded-xl mx-1">
                <FaInstagram color='#fff'/>
            </a>
            <a href="/#" class="p-1 bg-gray-500 rounded-xl mx-1">
                <FaLinkedinIn color='#fff'/>
            </a>
            <a href="/#" class="p-1 bg-gray-500 rounded-xl mx-1">
                <FaPinterestP color='#fff'/>
            </a>
            <a href="/#" class="p-1 bg-gray-500 rounded-xl mx-1">
                <FaYoutube color='#fff'/>
            </a>
         
         </div>
      </div>
   </div>
     </div>
    )


  }

export default Footer