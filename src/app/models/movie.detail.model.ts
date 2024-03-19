export interface MovieDetailInterface {
    map(arg0: (element: MovieDetailInterface) => { image: string; releaseYear: string; adult: boolean; backdrop: string; genre_ids: number[]; id: number; original_language: string; original_title: string; overview: string; popularity: number; poster_path: string; release_date: string; title: string; video: boolean; vote_average: number; vote_count: number; }): MovieDetailInterface[];
    adult: boolean;
    backdrop: string;
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
    image?: string;
    releaseYear?: string;
  }