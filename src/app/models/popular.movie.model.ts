import { MovieDetailInterface } from './movie.detail.model';

export interface PopularMovieInterface {
  page: number;
  results: MovieDetailInterface[];
}
