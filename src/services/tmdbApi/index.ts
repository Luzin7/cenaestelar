"use server";

import { env } from "@/env";
import { TmdbContentProps } from "@/types/content";
import apiClient from "./axios.config";

const routes = {
  fetchMoviesWithQuery: env.MOVIES_API_URL,
};

export async function fetchMoviesWithQuery(
  query: string,
): Promise<TmdbContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchMoviesWithQuery, {
      params: {
        ...apiClient.defaults.params,
        query,
      },
    });

    return data.results;
  } catch (error) {
    throw new Error("Erro ao buscar filmes", error as ErrorOptions);
  }
}
