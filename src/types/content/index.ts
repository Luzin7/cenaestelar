export interface ContentCarouselProps {
  id: string;
  title: string;
  poster: string;
  rating: string;
}

export interface ContentBannerProps {
  id: string;
  title: string;
  banner: string;
  shortDescription: string;
}

export interface ContentProps {
  id: string;
  title: string;
  poster: string;
  media: string;
  banner: string;
  rating: string;
  globalRating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: string[];
  cast?: string[];
  directors?: string[];
}
