"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselProps } from "@/types/swiper/carousel";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./carousel.module.css";

export function Carousel({ content, contentType, title }: CarouselProps) {
  return (
    <section className={styles.carousel_section}>
      <h1>{title}</h1>
      <Swiper slidesPerView={5.25} spaceBetween={20} grabCursor={true}>
        {content.map(({ id, image, rating, title }) => (
          <SwiperSlide key={id} className={styles.carousel_content__container}>
            <div>
              <Image fill key={id} src={image} alt={title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
