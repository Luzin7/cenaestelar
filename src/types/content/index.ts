export type ContentCarouselProps = {
  id: string;
  title: string;
  image: string;
  rating: string;
};

export type ContentBannerProps = {
  id: string;
  title: string;
  banner: string;
  shortDescription: string;
};

export type ContentProps = {
  id: string;
  title: string;
  poster: string;
  media: string;
  banner: string;
  rating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: string[];
  cast?: string[];
  directors?: string[];
};
