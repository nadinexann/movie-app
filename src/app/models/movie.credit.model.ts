import { MovieCreditDetailInterface } from "./movie.credit.detail.model";

export interface MovieCreditInterface {
    id?: number;
    cast: MovieCreditDetailInterface[];
    crew: MovieCreditDetailInterface[];
  }