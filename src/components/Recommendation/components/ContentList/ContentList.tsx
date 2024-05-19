'use client'

import { useLoading } from '@hooks/useLoading'
import { addToWishlist } from '@services/firebase'
import { useRecommendationStore } from '@store/recommendation'
import { useUserStore } from '@store/user'
import Image from 'next/image'
import { toast } from 'react-toastify'
import styles from './contentList.module.css'

export function ContentList() {
  const { isLoading, setIsLoading } = useLoading()
  const { userState } = useUserStore()
  const { content } = useRecommendationStore()

  const handleRecommend = async (id: number, title: string) => {
    setIsLoading((prevState) => !prevState)
    const whoRecommend = {
      name: userState.user.displayName,
      email: userState.user.email,
      profilePhoto: userState.user.photoURL,
    }

    try {
      await addToWishlist(id, whoRecommend)
      setIsLoading((prevState) => !prevState)
      toast(`${title} foi recomendado.`)
    } catch (error) {
      setIsLoading((prevState) => !prevState)
      toast.error(`O seu filme não foi recomendado`)
    }
  }

  return (
    <>
      <div className={styles.container}>
        {content &&
          content.map((content) => (
            <div key={content.id} className={styles.content_wrapper}>
              {content.poster_path !== null ? (
                <div
                  onClick={() =>
                    isLoading === false
                      ? handleRecommend(content.id, content.title)
                      : null
                  }
                >
                  <p>{isLoading ? 'Aguarde' : 'Recomendar'} </p>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
                    alt="sss"
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div
                  onClick={() =>
                    isLoading === false
                      ? handleRecommend(content.id, content.title)
                      : null
                  }
                >
                  <p>{isLoading ? 'Aguarde' : 'Recomendar'} </p>
                  <Image
                    src="https://th.bing.com/th/id/OIP.Ar9SK2TemsrqK7vTus1BLgHaKT?rs=1&pid=ImgDetMain"
                    alt="sss"
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
