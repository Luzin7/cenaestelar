import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  SEARCH_MOVIE_BY_QUERY_API_URL: z.string().url(),
  SEARCH_MOVIE_BY_ID_API_URL: z.string().url(),
  MOVIES_API_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);
