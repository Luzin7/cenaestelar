"use client";

import { urlSlugMaker } from "@/functions/urlSlugMaker";
import { HeroSwiperProps } from "@/types/swiper/heroSwipper/index.";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";

export function HeroSwiper({ banners }: HeroSwiperProps) {
  return (
    <section>
      <div className={styles.mask}></div>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        modules={[Autoplay, Pagination]}
      >
        {banners.map(({ id, banner, shortDescription, title }) => (
          <SwiperSlide
            key={id}
            style={{
              width: "1800px",
              height: "500px",
              marginLeft: "40px",
            }}
          >
            <div className={styles.banner_content__container}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                }}
              >
                <h2>{title}</h2>
                <p>{shortDescription}</p>
                <Link href={`movie/${urlSlugMaker(title)}/${id}`}>
                  Saiba mais
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
  );
}
