import { z } from 'zod'

export const searchMovie = z.object({
  query: z.string().min(1, 'Não há como encontrar o vazio.'),
})

export type searchMovieProps = z.infer<typeof searchMovie>
