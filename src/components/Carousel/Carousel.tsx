"use client";

import { urlSlugMaker } from "@/functions/urlSlugMaker";
import { CarouselProps } from "@/types/swiper/carousel";
import { localPaths } from "@/utils/localPaths";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./carousel.module.css";

export function Carousel({ content, contentType, title }: CarouselProps) {
  const pageType =
    contentType === "movie" ? localPaths.MOVIE : localPaths.SERIE;

  return (
    <section className={styles.carousel_section}>
      <h1>{title}</h1>
      <Swiper slidesPerView={5.25} spaceBetween={20} grabCursor={true}>
        {content.map(({ id, title, poster }) => (
          <>
            {contentType === "wishList" ? (
              <SwiperSlide
                key={id}
                className={styles.carousel_wishlist__container}
              >
                <Image
                  fill
                  sizes="(max-width: 300px)"
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
                      fill
                      objectFit="cover"
                      objectPosition="center"
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
      </Swiper>
    </section>
  );
}
