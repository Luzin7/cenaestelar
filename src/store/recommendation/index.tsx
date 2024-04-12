import { TmdbGeneralContentProps } from "@/types/tmdb";
import { create } from "zustand";

type Movie = TmdbGeneralContentProps;

export interface StoreProps {
  content: Movie[];
}

export const useRecommendationStore = create<StoreProps>(() => ({
  content: [],
}));
