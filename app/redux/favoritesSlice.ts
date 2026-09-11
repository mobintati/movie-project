import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface FavoritesState {
  movies: Movie[];
}
const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;