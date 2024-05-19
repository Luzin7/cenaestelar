'use client'

import { Form } from '@components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoading } from '@hooks/useLoading'
import { TmdbGeneralContentProps } from '@models/tmdb'
import { addContent, addContentProps } from '@schemas/admin/addContent'
import { addMovie } from '@services/cenaestelarApi'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from '../../../../styles/modal.module.css'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
  data: TmdbGeneralContentProps
}

export function RecommendationModal({
  data,
  isOpen,
  setIsOpen,
  title,
}: ModalProps) {
  const { isLoading, setIsLoading } = useLoading()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<addContentProps>({
    resolver: zodResolver(addContent),
  })

  const handleRecommend = async ({
    description,
    shortDescription,
    rating,
  }: addContentProps) => {
    setIsLoading((prevState) => !prevState)

    try {
      await addMovie(data.id, shortDescription, description, rating)
      setIsLoading((prevState) => !prevState)
      toast('Filme adicionado ao cena estelar!')
      setIsOpen(!isOpen)
    } catch (error) {
      setIsLoading((prevState) => !prevState)
      toast.error('Não foi possível adicionar o conteúdo ao Cena Estelar!')
      setIsOpen(!isOpen)
    }
  }

  if (isOpen) {
    return (
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          <Form.Wrapper onSubmit={handleSubmit(handleRecommend)}>
            <h2>{title}</h2>
            <Form.Input
              type="text"
              placeholder="Nota da bomba"
              {...register('rating')}
            />
            {errors.rating?.message !== undefined && (
              <Form.Error errorMessage={errors.rating.message} />
            )}
            <Form.Input
              type="text"
              placeholder="Descrição curta da parada"
              {...register('shortDescription')}
            />
            {errors.shortDescription?.message !== undefined && (
              <Form.Error errorMessage={errors.shortDescription.message} />
            )}
            <textarea
              style={{ color: 'black' }}
              placeholder="Descrição poggers"
              {...register('description')}
              cols={70}
              rows={4}
            />
            {errors.description?.message !== undefined && (
              <Form.Error errorMessage={errors.description.message} />
            )}
            <Form.Button type="submit">
              {isLoading ? 'AUUUUU' : 'Xama!'}
            </Form.Button>
          </Form.Wrapper>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
