'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TrendingUp } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Star } from 'lucide-react';
import { useState } from "react";
import { useEffect } from "react";
import { Heart } from 'lucide-react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function TabsDemo() {
  const genreIds: Record<string, number> = {
    action: 28,
    adventure: 12,
    animation: 16,
    fiction: 878,
    heroes: 14,
    comedy: 35,
  };
  const [category, setCategory] = useState("trending");
  const [genre, setGenre] = useState("action");
  const [movies, setMovies] = useState<any[]>([]);
  const [active, setActive] = useState<number[]>([]);
useEffect(() => {
  const getMovies = async () => {
    let url = "";

    if (genre) {
      const genreId = genreIds[genre];
      url = `/api/movies?category=${category}&genre=${genreId}`;
    } else {
      url = `/api/movies?category=${category}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results || []);
  };

  getMovies();
}, [category, genre]);
  return (
    <div className="w-full">



      <Tabs
        value={category}
        onValueChange={setCategory}
        className="w-full"
      >
        <TabsList className="w-full bg-transparent">

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-full"
          >

            <SwiperSlide>
              <TabsTrigger
                value="trending"
                className="  w-full !bg-transparent  text-sm sm:text-base lg:text-lg  !text-gray-400  border-0  shadow-none  rounded-none
                px-1  py-2  hover:!bg-transparent  hover:!text-gray-400  data-[state=active]:!bg-transparent  data-[state=active]:!text-gray-400  data-[state=active]:shadow-none">
                <TrendingUp size={18} />
                Trending
              </TabsTrigger>
            </SwiperSlide>


            <SwiperSlide>
              <TabsTrigger
                value="popular"
                 className="  w-full !bg-transparent  text-sm sm:text-base lg:text-lg  !text-gray-400  border-0  shadow-none  rounded-none
                px-1  py-2  hover:!bg-transparent  hover:!text-gray-400  data-[state=active]:!bg-transparent  data-[state=active]:!text-gray-400  data-[state=active]:shadow-none">
                <Flame size={18} />
                Popular
              </TabsTrigger>
            </SwiperSlide>


            <SwiperSlide>
              <TabsTrigger
                value="recent"
                className="  w-full !bg-transparent  text-sm sm:text-base lg:text-lg  !text-gray-400  border-0  shadow-none  rounded-none
                px-1  py-2  hover:!bg-transparent  hover:!text-gray-400  data-[state=active]:!bg-transparent  data-[state=active]:!text-gray-400  data-[state=active]:shadow-none">
                <Plus size={18} />
                Recently added
              </TabsTrigger>
            </SwiperSlide>

            <SwiperSlide>
              <TabsTrigger
                value="premium" className="  w-full  !bg-transparent  text-sm sm:text-base lg:text-lg  !text-gray-400  border-0 shadow-none
                rounded-none px-1 py-2  hover:!bg-transparent hover:!text-gray-400 data-[state=active]:!bg-transparent  data-[state=active]:!text-gray-400 data-[state=active]:shadow-none"
              >
                <Star size={18} />
                Premium
              </TabsTrigger>
            </SwiperSlide>

          </Swiper>

        </TabsList>
      </Tabs>

      <Tabs
        value={genre}
        onValueChange={setGenre}
        className="w-full mt-8"
      >
        <TabsList className="w-full bg-transparent">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="w-full"
          >

            <SwiperSlide>
              <TabsTrigger
                value="action"
                className=" w-full  rounded-xl  border  bg-gray-700  px-3  py-3 text-sm text-white">
                Action
              </TabsTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <TabsTrigger
                value="adventure"
                 className=" w-full  rounded-xl  border  bg-gray-700  px-3  py-3 text-sm text-white">
              
                Adventure
              </TabsTrigger>
            </SwiperSlide>


            <SwiperSlide>
              <TabsTrigger
                value="animation"
                className=" w-full  rounded-xl  border  bg-gray-700  px-3  py-3 text-sm text-white">
                Animation
              </TabsTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <TabsTrigger
                value="fiction"
                className="
                w-full
                rounded-xl
                border
                bg-gray-700
                px-3
                py-3
                text-sm
                text-white
              "
              >
                Fiction
              </TabsTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <TabsTrigger
                value="heroes"  className="w-full rounded-xl border bg-gray-700  px-3  py-3  text-sm text-white">
                Heroes
              </TabsTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <TabsTrigger
                value="comedy"
                className="  w-full rounded-xl border bg-gray-70 px-3 bg-gray-700  py-3  text-sm text-white">
                Comedy
              </TabsTrigger>
            </SwiperSlide>
          </Swiper>
        </TabsList>
      </Tabs>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">

        {movies.map((movie) => (

          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full aspect-[2/3] object-cover rounded-xl"
            />
            <p className="mt-2 text-sm text-white text-center truncate">
              {movie.title}
            </p>
            <div className="flex items-center justify-around pt-2">
              <p className="text-white text-sm">
                {movie.release_date?.slice(0, 4)}
              </p>
              <Heart
                size={18}
                onClick={() => {
                  setActive((prev) =>
                    prev.includes(movie.id)
                      ? prev.filter((id) => id !== movie.id)
                      : [...prev, movie.id]
                  );
                }}
                className={
                  active.includes(movie.id)
                    ? "fill-red-400 text-red-400 cursor-pointer"
                    : "text-white cursor-pointer"
                }
              />

              <p className="text-yellow-200 flex items-center gap-1 text-sm">

                <Star
                  size={18}
                  className="fill-amber-200"
                  color="yellow"
                />

                {movie.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




