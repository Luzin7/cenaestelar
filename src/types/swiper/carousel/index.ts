import { ContentCarouselProps } from "@/types/content";

export type CarouselProps = {
  title: string;
  contentType: "movie" | "serie" | "wishList";
  content: ContentCarouselProps[];
};
