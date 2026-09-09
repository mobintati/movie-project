'use client'
import React, { useEffect, useState } from 'react'
import { Slice, Star } from 'lucide-react';
import { Play } from 'lucide-react';
import { House } from 'lucide-react';
import { Download } from 'lucide-react';
import { HouseWifi } from 'lucide-react';
import { StarMinus } from 'lucide-react';
import { Search } from 'lucide-react';
import { FiSearch } from "react-icons/fi";
import axios from 'axios';
import { error } from 'console';
import PageLoader from 'next/dist/client/page-loader';
import PapularMovie from '../feature/PapularMovie';
import { ChevronLeft } from 'lucide-react';
// import { TabsLine } from '../feature/TabsLine';
import { TabsDemo } from '../feature/TabsLine';
import MenuHam from '../feature/MenuHam';




// import { IoMdNotifications } from "react-icons/io";
const itemsui: string[] = ["New", "Movie", "Series", "Cartoons"];
const iconLeft: any[] = [<House />, <Download />, <HouseWifi />, <StarMinus />]
function header() {

  return (
    <div className='bg-black'>
      <div style={{ backgroundImage: "url('/image/IMG_0727.jpeg')" }} className=" bg-center bg-cover h-200">
        <div className='flex justify-between items-center max-lg:justify-center pt-5 '>
          <div className='pl-20 max-lg:hidden'>
            <ul className='flex space-x-7 text-gray-300'>
              {itemsui.map((i, index) => (
                <li className='cursor-pointer' key={index}>{i}</li>

              )


              )}
            </ul>


          </div>
          <div className='max-lg:flex flex max-lg:space-x-3 max-lg:justify-center max-lg:items-center'>
            <div className='max-sm:pl-50'>
              <MenuHam />
            </div>
            <div className='max-lg:flex max-md:justify-center lg:pr-32 max-md:items-center'>
              <h1 className='lg:pr-83 text-2xl  text-white'>AGENCY</h1>
            </div>

            <div className='pr-20 max-lg:pl-5 flex space-x-1 text-white '>
              {/* <IoMdNotifications className='size-7' /> */}
              <p className='text-lg max-sm:pr-50'>jao M</p>


            </div>
          </div>


        </div>
        <div className='flex'>
          <div className='text-white max-lg:hidden pt-26 space-y-7 pl-5'>
            {iconLeft.map((i, index) => (
              <div key={index}>
                {i}
              </div>
            )
            )}
          </div>
          <div className='pl-9 '>
            <div className="relative w-full max-w-sm mt-5">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="search"
                className="w-70  max-md:w-50 rounded-lg border text-white border-gray-300 py-2 pl-10  outline-none focus:border-blue-500" />
            </div>
            <h1 className='text-6xl text-white pt-3'>STARS WARS</h1>
            <h1 className='text-4xl text-white pt-2'>The Rise oF skywalker</h1>
            <p className='pt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in <br /> asperiores aliquam eum? Veniam optio enim, minima modi est facilis <br /> veritatis omnis error, iusto laudantium voluptatibus, ex eos! Ullam, a!</p>
            <div className='flex space-x-1 text-yellow-300 pt-5'>
              <Star className='' fill='yellow' />
              <Star fill='yellow' />
              <Star fill='yellow' />
              <Star fill='yellow' />
              <Star />
            </div>

            <div className='pt-5 flex space-x-4 max-md:flex-col max-md:space-y-2 max-md:justify-center max-md:items-center '>
              <button className='w-45 cursor-pointer  rounded-3xl h-12 bg-sky-400 text-white flex justify-center items-center  '>   <Play size={19} fill='white' className='pt-1' /> watch now</button>
              <button className='rounded-3xl h-10 cursor-pointer max-md:mr-5 text-white mt-1 w-25 border'>Trailer</button>
            </div>
          </div>
        </div>
        <div className='bg-black/30 backdrop-blur-2xl border border-white/10 rounded-4xl p-5 m-10 mx-15    shadow-[0_8px_32px_rgba(0,0,0,0.35)]'>
          <PapularMovie />
        </div>
        <div className=''>
          <button className="swiper-next w-10 h-10 absolute left-2 top-1/2 -translate-y-1/2 z-100 ">
            <ChevronLeft />
          </button>
        </div>





      </div>
      <div className='  max-sm:pt-59 flex justify-center items-center pt-10 pb-10 px-5 '>
        <TabsDemo />

      </div>
    </div>
  )
}


export default header

