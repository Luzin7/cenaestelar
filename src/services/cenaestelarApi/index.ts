"use server";

import { ContentProps } from "@/types/content";
import * as tmdbServices from "../tmdbApi";
import apiClient from "./axios.config";

const routes = {
  fetchAllMovies: "/movies",
  addMovie: "/movies",
  fetchMovieById: "/movie",
};

export async function fetchAllMovies(): Promise<ContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchAllMovies);

    return data.movies;
  } catch (error) {
    return [];
  }
}

export async function fetchMovieById(id: string): Promise<ContentProps> {
  try {
    const { data } = await apiClient.get(`${routes.fetchMovieById}/${id}`);

    return data.movie;
  } catch (error) {
    throw new Error("Erro ao buscar filme", error as ErrorOptions);
  }
}

export async function addMovie(id: number): Promise<void> {
  try {
    const response = await tmdbServices.fetchMovieById(id);

    await apiClient.post(routes.addMovie, {
      banner: response.backdrop_path,
      cast: [],
      description: response.overview,
      directors: [],
      genres: response.genres,
      media: response.video,
      poster: response.poster_path,
      rating: response.vote_average.toString(),
      releaseDate: response.release_date,
      shortDescription: response.tagline,
      title: response.title,
    });
  } catch (error) {
    throw new Error("Erro ao buscar filme", error as ErrorOptions);
  }
}
