"use server";

import { ContentProps } from "@/types/content";
import apiClient from "./axios.config";

const routes = {
  fetchAllMovies: "/movies",
  fetchMovieById: "/movie",
};

export async function fetchAllMovies(): Promise<ContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchAllMovies);

    return data.movies;
  } catch (error) {
    throw new Error("Erro ao buscar filmes", error as ErrorOptions);
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
