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
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: string[];
  cast?: string[];
  directors?: string[];
}

export interface TmdbContentProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
