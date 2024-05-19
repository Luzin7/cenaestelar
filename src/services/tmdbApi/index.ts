'use server'

import {
  TmdbContentFoundByIdProps,
  TmdbGeneralContentProps,
} from '@models/tmdb'
import { env } from 'process'
import apiClient from './axios.config'

const routes = {
  fetchMoviesByQuery: env.SEARCH_MOVIE_BY_QUERY_API_URL as string,
  fetchMovieById: env.SEARCH_MOVIE_BY_ID_API_URL as string,
}

export async function fetchMoviesByQuery(
  query: string,
): Promise<TmdbGeneralContentProps[]> {
  try {
    const { data } = await apiClient.get(routes.fetchMoviesByQuery, {
      params: {
        include_adult: 'true',
        language: 'pt-BR',
        page: '1',
        query,
      },
    })

    return data.results
  } catch (error) {
    throw new Error('Erro ao buscar filmes', error as ErrorOptions)
  }
}

export async function fetchMovieById(
  id: number,
): Promise<TmdbContentFoundByIdProps> {
  try {
    const { data } = await apiClient.get(`${routes.fetchMovieById}/${id}`, {
      params: {
        include_adult: 'true',
        language: 'pt-BR',
      },
    })

    return data
  } catch (error) {
    throw new Error('Erro ao buscar filme', error as ErrorOptions)
  }
}
