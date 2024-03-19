import { DateInterface } from "./date.model";
import { MovieDetailInterface } from "./movie.detail.model";

export interface LatestMovieInterface {
    dates?: DateInterface;
    page?: number;
    results: MovieDetailInterface[];
  }