'use client'

import { CarouselProps } from '@models/swiper/carousel'
import { localPaths } from '@utils/localPaths'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'src/functions/slugify'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Carousel({ content, contentType, title }: CarouselProps) {
  const pageType = contentType === 'movie' ? localPaths.MOVIE : localPaths.SERIE

  return (
    <section className="py-7">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        {title}
      </h4>
      <Swiper
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        breakpoints={{
          390: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 3.25,
          },
          1024: {
            slidesPerView: 5.25,
          },
          1920: {
            slidesPerView: 5.5,
          },
        }}
      >
        {content.map(({ id, title, poster }) => (
          <>
            {contentType === 'wishList' ? (
              <SwiperSlide key={id} className="h-80">
                <Image
                  className="rounded-xl"
                  width={200}
                  height={300}
                  src={`https://image.tmdb.org/t/p/w500${poster}`}
                  alt={title}
                  loading="lazy"
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={id} className="h-80">
                <Link href={`${pageType}/${slugify(title)}/${id}`}>
                  <div>
                    <Image
                      className="rounded-xl"
                      width={200}
                      height={300}
                      src={`https://image.tmdb.org/t/p/w500${poster}`}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            )}
          </>
        ))}
        <div className="swiper-button-prev prev-button"></div>
        <div className="swiper-button-next next-button"></div>
      </Swiper>
    </section>
  )
}
