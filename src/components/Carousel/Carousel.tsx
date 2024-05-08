"use client";

import { urlSlugMaker } from "@/functions/urlSlugMaker";
import { CarouselProps } from "@/types/swiper/carousel";
import { localPaths } from "@/utils/localPaths";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./carousel.module.css";

export function Carousel({ content, contentType, title }: CarouselProps) {
  const pageType =
    contentType === "movie" ? localPaths.MOVIE : localPaths.SERIE;

  return (
    <section className={styles.carousel_section}>
      <h1>{title}</h1>
      <Swiper
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
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
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 8.25,
          },
        }}
      >
        {content.map(({ id, title, poster }) => (
          <>
            {contentType === "wishList" ? (
              <SwiperSlide
                key={id}
                className={styles.carousel_wishlist__container}
              >
                <Image
                  width={200}
                  height={300}
                  src={`https://image.tmdb.org/t/p/w500${poster}`}
                  alt={title}
                  loading="lazy"
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={id}
                className={styles.carousel_content__container}
              >
                <Link href={`${pageType}/${urlSlugMaker(title)}/${id}`}>
                  <div className={styles.image_container}>
                    <Image
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
  );
}
