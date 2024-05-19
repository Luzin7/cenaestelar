'use client'

import { useLoading } from '@hooks/useLoading'
import { useModal } from '@hooks/useModal'
import { TmdbGeneralContentProps } from '@models/tmdb'
import { useRecommendationStore } from '@store/recommendation'
import Image from 'next/image'
import { useState } from 'react'
import RecommendationModal from '../RecommendationModal'
import styles from './contentList.module.css'

export function ContentList() {
  const { isLoading } = useLoading()
  const { isModalOpen, setIsModalOpen } = useModal()
  const { content } = useRecommendationStore()
  const [movieData, setMovieData] = useState<TmdbGeneralContentProps>(
    {} as TmdbGeneralContentProps,
  )

  return (
    <>
      <RecommendationModal
        data={movieData}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Adicionar novo filme ao Cena Estelar!"
      />
      <div className={styles.container}>
        {content &&
          content.map((item) => (
            <div key={item.id} className={styles.content_wrapper}>
              {item.poster_path !== null ? (
                <div
                  onClick={() =>
                    isLoading === false
                      ? (() => {
                          setMovieData(item)
                          setIsModalOpen((prevState) => !prevState)
                        })()
                      : null
                  }
                >
                  <p>{isLoading ? 'Aguarde' : 'Adicionar'} </p>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div
                  onClick={() =>
                    isLoading === false
                      ? setIsModalOpen((prevState) => !prevState)
                      : null
                  }
                >
                  <p>{isLoading ? 'Aguarde' : 'Adicionar'} </p>
                  <Image
                    src="https://th.bing.com/th/id/OIP.Ar9SK2TemsrqK7vTus1BLgHaKT?rs=1&pid=ImgDetMain"
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  )
}
