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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
const PapularMovie = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoding] = useState<any>(true)
    const [error, setError] = useState<any>(null)



    useEffect(() => {
        const apiGet = async () => {
            try {

                const respons = await axios.get('https://api.tvmaze.com/search/shows?q=breaking%20bad')
                console.log(respons.data)

                setData(respons.data)
            } catch (err) {
                setError(err)
                setData(null)


                
            } finally {
                setLoding(false)
            }


        }

        apiGet();


    }, [])

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                spaceBetween={12}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
            >
                {data?.map((item: any) => (
                    <SwiperSlide key={item.show.id}>
                        <img
                            className="w-full max-lg:w-50 max-lg:h-70
                             rounded-xl"
                            src={item.show.image?.medium}
                            alt={item.show.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous */}
            <button
                className="
        swiper-prev
        absolute left-1 sm:left-2 top-1/2
        -translate-y-1/2
        z-10
        flex items-center justify-center
        rounded-full
        bg-black/60
        p-1 sm:p-2
      "
            >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next */}
            <button
                className="
        swiper-next
        absolute right-1 sm:right-2 top-1/2
        -translate-y-1/2
        z-10
        flex items-center justify-center
        rounded-full
        bg-black/60
        p-1 sm:p-2
      "
            >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>
    );
}
export default PapularMovie
