'use client'

import { Form } from '@components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoading } from '@hooks/useLoading'
import { searchMovie, searchMovieProps } from '@schemas/search/querySchema'
import { fetchMoviesByQuery } from '@services/tmdbApi'
import { useRecommendationStore } from '@store/recommendation'
import { useForm } from 'react-hook-form'
import styles from './recommendationForm.module.css'

export function RecommendationForm() {
  const { setIsLoading } = useLoading()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<searchMovieProps>({
    resolver: zodResolver(searchMovie),
  })

  const onSubmit = async ({ query }: searchMovieProps) => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await fetchMoviesByQuery(query)

      useRecommendationStore.setState({ content: response })

      setIsLoading((prevState) => !prevState)
    } catch (error) {
      setIsLoading((prevState) => !prevState)
    }
  }

  return (
    <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2>Nos recomende algum filme interessante!</h2>
        <Form.Input
          type="text"
          placeholder="Nome do filme"
          {...register('query')}
        />
        {errors.query?.message !== undefined && (
          <Form.Error errorMessage={errors.query.message} />
        )}
      </div>
    </Form.Wrapper>
  )
}
