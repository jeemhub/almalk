import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
      <div>
      <div class="bg-gray-100">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
            <a class="my-3 block" href="/#">Services <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Products <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">About Us <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Pricing <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Partners <span class="text-teal-600 text-xs p-1">New</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">User</div>
            <a class="my-3 block" href="/#">Sign in <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">New Account <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Demo <span class="text-teal-600 text-xs p-1">New</span></a><a class="my-3 block" href="/#">Career <span class="text-teal-600 text-xs p-1">We're hiring</span></a><a class="my-3 block" href="/#">Surveys <span class="text-teal-600 text-xs p-1">New</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Resources</div>
            <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Product</div>
            <a class="my-3 block" href="/#">Our Products <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Great Deals <span class="text-teal-600 text-xs p-1">New</span></a><a class="my-3 block" href="/#">Analytics <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Mobile <span class="text-teal-600 text-xs p-1"></span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Support</div>
            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
         </div>
         <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Contact us</div>
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
}

export default Footer