"use client";

import { useLoading } from "@/hooks/useLoading";
import { fetchMoviesWithQuery } from "@/services/tmdbApi";
import { TmdbContentProps } from "@/types/content";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const searchMovie = z.object({
  query: z.string().min(1, "eh os guri"),
});

export type searchMovieProps = z.infer<typeof searchMovie>;

export default function Recommendation() {
  const { isLoading, setIsLoading } = useLoading();
  const [movies, setMovies] = useState<TmdbContentProps[]>([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<searchMovieProps>({
    resolver: zodResolver(searchMovie),
  });

  // FAZER O SISTREMA DE LOGIN
  const onSubmit = async (data: searchMovieProps) => {
    setIsLoading((prevState) => !prevState);
    try {
      const response = await fetchMoviesWithQuery(data.query);

      setMovies(response);
      // const userData = await login(data);
      // actions.updateUser({
      //   name: userData?.name,
      //   id: userData?.id,
      // });

      setIsLoading((prevState) => !prevState);
      // router.replace(localPaths.HOME);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      // setIsModalOpen((prev) => !prev);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex py-7 gap-7 bg flex-col w-11/12 lg:w-3/4">
          <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
            Pesquisa essa bomba ai
          </h2>
          <input
            type="text"
            placeholder="nome do filme"
            {...register("query")}
          />
          {/* {errors.email?.message !== undefined && (
          <GS.Error errorMessage={errors.email.message} />
        )} */}

          <button type="submit" disabled={!!isLoading}>
            {isLoading ? "Aguarde..." : "Buscar"}
          </button>
        </div>
      </form>
    </>
  );
}
