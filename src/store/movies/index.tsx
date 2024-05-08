import { ContentProps } from "@/types/content";
import { create } from "zustand";

type Movie = ContentProps;

export interface StoreProps {
  movies: Movie[];
  topMovies: Movie[];
  highlights: Movie[];
}

export const useMoviesStore = create<StoreProps>(() => ({
  movies: [],
  topMovies: [],
  highlights: [],
}));
