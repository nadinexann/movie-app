import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreInterface } from '../models/genre.model';
import { LatestMovieInterface } from '../models/latest.movie.model';
import { MovieDetailInterface } from '../models/movie.detail.model';
import { PeopleDetailInterface } from '../models/people.detail.model';
import { PeopleInterface } from '../models/people.model';
import { PopularMovieInterface } from '../models/popular.movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey: string = '4dc586e79814812a1b1de79d614a518e';

  constructor(private httpClient: HttpClient) {}

  private headers = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGM1ODZlNzk4MTQ4MTJhMWIxZGU3OWQ2MTRhNTE4ZSIsInN1YiI6IjY1ZTZkMWYxZjg1OTU4MDE3YjlhZTJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0hO8xAV0JfIR8ZHE9xRbFReOhKyXY2NxuMsRaN07a_s',
    }),
  };

  public getAllMovies(): Observable<PopularMovieInterface> {
    const url = `https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`;

    return this.httpClient.get<PopularMovieInterface>(url, this.headers);
  }

  public getMovieDetails(id: string | null): Observable<MovieDetailInterface> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    return this.httpClient.get<MovieDetailInterface>(url, this.headers);
  }

  public getAllPeople(): Observable<PeopleInterface> {
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US`;
    return this.httpClient.get<PeopleInterface>(url, this.headers);
  }
  public getAllGenres(): Observable<GenreInterface> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
    return this.httpClient.get<GenreInterface>(url, this.headers);
  }
  public getAllLatestMovies(): Observable<LatestMovieInterface> {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
    return this.httpClient.get<LatestMovieInterface>(url, this.headers);
  }
  public getPeopleDetails(
    person_id: string
  ): Observable<PeopleDetailInterface> {
    const url = `https://api.themoviedb.org/3/person/${person_id}?language=en-US`;
    return this.httpClient.get<PeopleDetailInterface>(url, this.headers);
  }
}
export { MovieDetailInterface, LatestMovieInterface, PopularMovieInterface };
