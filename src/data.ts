import { randomUUID } from "crypto";
import { contentCarouselProps } from "./types/content";
import { movieBannerProps } from "./types/content/movie";

export const data: movieBannerProps[] = [
  {
    id: "1",
    title: "Title 1",
    banner:
      "https://cinepop.com.br/wp-content/uploads/2023/04/beauisafraidbanner.jpg",
    rating: "4.5",
    shortDescription: "Short Description 1",
  },
  {
    id: "2",
    title: "La La Land",
    banner: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
    shortDescription: `La La Land", uma obra de arte romântica com trilha sonora incrível e um final realista que encanta e emociona.`,
  },
  {
    id: "3",
    title: "Title 3",
    banner:
      "https://cinepop.com.br/wp-content/uploads/2023/04/beauisafraidbanner.jpg",
    rating: "4.5",
    shortDescription: "Short Description 3",
  },
];

export const movies: contentCarouselProps[] = [
  {
    id: "1",
    title: "Title 1",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "2",
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "3",
    title: "Title 3",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "4",
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "5",
    title: "Title 5",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "6",
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "7",
    title: "Title 7",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: "8",
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
];

export const series: contentCarouselProps[] = [
  {
    id: randomUUID(),
    title: "Title 1",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "Title 3",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "Title 5",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "Title 7",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
  {
    id: randomUUID(),
    title: "La La Land",
    image: "https://images.alphacoders.com/808/808916.jpg",
    rating: "4.5",
  },
];
