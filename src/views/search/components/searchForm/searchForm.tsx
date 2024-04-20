"use client";
import { Form } from "@/components/Form";
import { useLoading } from "@/hooks/useLoading";
import {
  searchMovie,
  searchMovieProps,
} from "@/schemas/recommendation/querySchema";
import { searchTitle } from "@/services/cenaestelarApi";
import { useMoviesStore } from "@/store/movies";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    setIsLoading(true);
    try {
      const response = await searchTitle(query);
      useMoviesStore.setState({ movieState: { movies: response } });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2>Faça a sua Busca!</h2>
        <Form.Input
          type="text"
          placeholder="Nome do filme"
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
