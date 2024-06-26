"use client";

import { Form } from "@/components/Form";
import { useLoading } from "@/hooks/useLoading";

import { searchMovie, searchMovieProps } from "@/schemas/search/querySchema";
import { searchContentByTitle } from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./searchForm.module.css";

export function SearchForm() {
  const { isLoading, setIsLoading } = useLoading();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<searchMovieProps>({
    resolver: zodResolver(searchMovie),
  });

  const onSubmit = async ({ query }: searchMovieProps) => {
    setIsLoading((prevState) => !prevState);
    try {
      const response = await searchContentByTitle(query);
      useMoviesStore.setState({ movies: response });
      setIsLoading((prevState) => !prevState);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      toast.error("Não foi possível encontrar o filme");
    }
  };

  return (
    <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2>Procure seu filme favorito!</h2>
        <Form.Input
          type="text"
          placeholder="Título do filme"
          {...register("query")}
        />
        {errors.query?.message !== undefined && (
          <Form.Error errorMessage={errors.query.message} />
        )}
        <Form.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Buscando filme..." : "Buscar filme"}
        </Form.Button>
      </div>
    </Form.Wrapper>
  );
}
