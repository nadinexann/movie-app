import { MovieDetailInterface } from "./movie.detail.model";

export interface PeopleDetailInterface {
    adult: boolean;
    gender: number;
    id: number;
    known_for: MovieDetailInterface[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
  }