"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

// import {scrollAnimateLogo} from "./logoAnimate";
import {scrollFunction} from "../../compoenents/navbars/navShrink";

import logo from "../../../public/logo.svg";

const Landing = () => {

  const [viewWidth, setViewWidth] = useState();

  let txt ="Dobrodošli na web stranicu MBB-a, vašeg partnera za izradu personaliziranog namještaja koji odražava vaš stil i potrebe. Uvijek smo oduševljeni što možemo pretvoriti vaše ideje u stvarnost, stvarajući komade namještaja koji su savršeno prilagođeni vašem prostoru."
  
  useEffect(()=>{
    // window.onscroll = function() {scrollFunction()};
    setViewWidth(window.innerWidth)
    window.addEventListener("scroll", scrollFunction());
    // console.log(window !== null ? window : false)
},[scrollFunction])


  // const leadText = (txt) =>{
  //    txt.slice(0,32);
  // }
  // console.log(window.innerWidth)
  return (
    <div id='home' className='landing'>
      <div className='landing_rectangle'></div>
      <div className='landing_lead d-flex flex-column align-items-center justify-content-center'>
          <h1 className=''>
            Made by Boris
          </h1>
          {/* <p className='p-5'>Vaše ideje pretvaramo u stvarnost</p> */}
          <span className='w-50 text-center'>
            {viewWidth >= 992 ? txt : txt.slice(0,32)}
          </span>
          <Link href={"#offer"} className='btn btn-outline-light mt-5'>Jump to Offers</Link>
      </div>
      <Image className='landing_logo ms-lg-auto' id='landing_logo' src={logo} alt="" />
      <div className='landing_front'></div>
    </div>
  )
}

export default Landing