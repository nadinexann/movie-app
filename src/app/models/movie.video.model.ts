import { MovieVideoDetailInterface } from './movie.video.detail.model';

export interface MovieVideoInterface {
  id: number;
  results: MovieVideoDetailInterface[];
}
