"use client";
import React from 'react'
// import Logo from '../components/Logo';
import Final from '../components/sections/Final';
import Link from 'next/link';
import "./logo.css";
import klogo from "../assets/img/k-logo.png";
import Image from 'next/image';


export default function page() {
  
  return (
    <>
    {/* <Logo /> */}
    <div className='bar-nav'>
        <ul>
         {/* <img className="logo-av" src={imga} alt="" /> */}
         <Image src={klogo} alt="" className="logo-av pt-2 pb-2" />
        <li><Link href="/about" className='active'>About</Link></li>
        <li><Link href="https://www.instagram.com/kohinoor_watches.__/">Contact</Link></li>
       
        <li><Link className="" href="/">Home</Link></li>
          
          
          
        </ul>
      </div>
    <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-[#f2f0ef] overflow-hidden">
      
      {/* Video Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
        <video 
          src="./vid.webm" 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted playsInline preload='auto'
        ></video>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center px-8 sm:px-12 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7b3911] mb-4">About Kohinoor Watches</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kohinoor Watches curates an exclusive collection of rare and vintage timepieces that define elegance and heritage. 
          Each watch is a masterpiece, telling a story of craftsmanship and precision.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          With an unwavering commitment to authenticity, we bring you timeless classics that stand as symbols of artistry and legacy.
        </p>
      </div>

    </div>
   
    </>
  )
}
