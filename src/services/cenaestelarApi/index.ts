"use server";

import { BadRequestError } from "@/shared/errors/BadRequestError";
import { NotFoundError } from "@/shared/errors/NotFoundError";
import { ErrorPresenter } from "@/shared/presenter/ErrorPresenter";
import { ContentProps } from "@/types/content";
import { AxiosError } from "axios";
import * as tmdbServices from "../tmdbApi";
import apiClient from "./axios.config";

const routes = {
  fetchAllMovies: "/movies",
  fetchBestMoviesSeen: "/movies/top",
  fetchHighLights: "/movies/highlights",
  addMovie: "/movies",
  fetchMovieById: "/movie",
  searchMovie: "/movies?title=",
};

export async function fetchAllMovies(): Promise<ContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchAllMovies);

    return data.movies;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}

export async function fetchBestMoviesSeen(): Promise<ContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchBestMoviesSeen);

    return data.movies;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}

export async function fetchHighLights(): Promise<ContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchHighLights);

    return data.movies;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}

export async function fetchMovieById(id: string): Promise<ContentProps> {
  try {
    const { data } = await apiClient.get(`${routes.fetchMovieById}/${id}`);

    return data.movie;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}

export async function addMovie(
  id: number,
  shortDescription: string,
  description: string,
  rating: string,
): Promise<void> {
  try {
    const response = await tmdbServices.fetchMovieById(id);

    await apiClient.post(routes.addMovie, {
      banner: response.backdrop_path,
      cast: [],
      description,
      directors: [],
      genres: response.genres,
      media: response.video,
      poster: response.poster_path,
      rating,
      globalRating: response.vote_average.toString(),
      releaseDate: response.release_date,
      shortDescription,
      title: response.title,
    });
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}
export async function searchContentByTitle(
  ContentTitle: string,
): Promise<ContentProps[]> {
  try {
    const response = await apiClient.get(
      `${routes.searchMovie}${ContentTitle}`,
    );

    return response.data.movies;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      throw ErrorPresenter.hadleError(new NotFoundError());
    }

    throw ErrorPresenter.hadleError(new BadRequestError());
  }
}
