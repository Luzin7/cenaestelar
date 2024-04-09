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
        {content.map(({ id, rating, title, poster }) => (
          <SwiperSlide key={id} className={styles.carousel_content__container}>
            <div title={rating}>
              {contentType === "wishList" ? (
                <Image fill key={id} src={poster} alt={title} />
              ) : (
                <Link href={`${pageType}/${urlSlugMaker(title)}/${id}`}>
                  <Image fill key={id} src={poster} alt={title} />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
