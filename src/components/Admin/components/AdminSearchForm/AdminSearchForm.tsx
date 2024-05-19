// 'use client'

// import { Form } from '@components/Form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useLoading } from '@hooks/useLoading'
// import { searchMovie, searchMovieProps } from '@schemas/search/querySchema'
// import { fetchMoviesByQuery } from '@services/tmdbApi'
// import { useRecommendationStore } from '@store/recommendation'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import styles from './adminSearchForm.module.css'

// export function AdminSearchForm() {
//   const { setIsLoading } = useLoading()

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<searchMovieProps>({
//     resolver: zodResolver(searchMovie),
//   })

//   const onSubmit = async ({ query }: searchMovieProps) => {
//     setIsLoading((prevState) => !prevState)
//     try {
//       const response = await fetchMoviesByQuery(query)

//       useRecommendationStore.setState({ content: response })

//       setIsLoading((prevState) => !prevState)
//     } catch (error) {
//       toast.error('Deu em arrobas, papai')
//       setIsLoading((prevState) => !prevState)
//     }
//   }

//   return (
//     <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
//       <div className={styles.container}>
//         <h2>Fala, meu pexe!</h2>
//         <Form.Input
//           type="text"
//           placeholder="Nome do filme"
//           {...register('query')}
//         />
//         {errors.query?.message !== undefined && (
//           <Form.Error errorMessage={errors.query.message} />
//         )}
//       </div>
//     </Form.Wrapper>
//   )
// }
