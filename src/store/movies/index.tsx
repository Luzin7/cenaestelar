import { ContentProps } from "@/types/content";
import { create } from "zustand";

type Movie = ContentProps;

type ActionsProps = {
  updateMoviesState: (update: ContentProps[]) => void;
};

export interface StoreProps {
  movieState: {
    movies: Movie[];
    topMovies: Movie[];
    highlights: Movie[];
  };
  actions: ActionsProps;
}

export const useMoviesStore = create<StoreProps>((set) => ({
  movieState: {
    movies: [],
    topMovies: [],
    highlights: [],
  },
  actions: {
    updateMoviesState: (update) =>
      set(({ movieState }) => ({
        movieState: {
          ...movieState,
          movies: {
            ...movieState.movies,
            ...update,
          },
        },
      })),
  },
}));
