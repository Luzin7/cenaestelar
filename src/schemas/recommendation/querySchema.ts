import { z } from "zod";

export const searchMovie = z.object({
  contentTitle: z.string().min(1, "Não há como encontrar o vazio."),
});

export type searchMovieProps = z.infer<typeof searchMovie>;
