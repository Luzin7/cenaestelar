'use client'

import { Button } from '@components/ui/button'
import { HeroSwiperProps } from '@models/swiper/heroSwipper/index.'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'src/functions/slugify'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './swiper.module.css'

export function HeroSwiper({ banners }: HeroSwiperProps) {
  return (
    <section>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="rounded-xl py-4"
      >
        {banners.map(({ id, banner, shortDescription, title }) => (
          <SwiperSlide
            key={id}
            className="h-7"
            style={{
              width: '100%',
              height: '700px',
            }}
          >
            <div className={styles.banner_content__container}>
              <div>
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {title}
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {shortDescription}
                </p>
                <Link href={`movie/${slugify(title)}/${id}`}>
                  <Button variant="outline" className="text-xl py-5 font-bold">
                    Saiba mais
                  </Button>
                </Link>
              </div>
              <Image
                fill
                key={id}
                src={`https://image.tmdb.org/t/p/original${banner}`}
                alt={title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
