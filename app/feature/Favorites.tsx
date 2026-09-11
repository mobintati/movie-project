"use client";

import { Heart, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFavorite } from "../redux/favoritesSlice";

export default function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.movies
  );

  return (
    <section className="mt-10">

      <h2 className="text-white text-2xl font-bold pb-5 pl-5">
        My Favorites
      </h2>

      <div className="grid grid-cols-2 px-5 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">

        {favorites.map((movie) => (
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
                className="fill-red-400 text-red-400 cursor-pointer"
                onClick={() => {
                  dispatch(removeFavorite(movie.id));
                }}
              />

              <p className="text-yellow-200 flex items-center gap-1 text-sm">
                <Star
                  size={18}
                  className="fill-amber-200"
                  color="yellow"
                />

                {movie.vote_average?.toFixed(1)}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}