import { MovieDetailGenreInterface } from './movie.detail.genre.model';

export interface MovieDetailInterface {
  adult: boolean;
  backdrop: string;
  genres: MovieDetailGenreInterface[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  image?: string;
  releaseYear?: string;
  hours?: number;
  minutes?: number;
  videoPlay?: string;
}
