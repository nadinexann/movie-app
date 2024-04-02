import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { GenreDetailInterface } from 'src/app/models/genre.detail.model';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import {
  LatestMovieInterface,
  MovieDetailInterface,
  MovieService,
  PopularMovieInterface,
} from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  first2: number = 1;
  rows2: number = 4;
  first: number = 1;
  rows: number = 4;
  public latestMovies: MovieDetailInterface[] = [];
  public data: MovieDetailInterface[] = [];
  public movieData: MovieDetailInterface[] = [];
  public genreData: GenreDetailInterface[] = [];
  public latestMovieData: MovieDetailInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;

  constructor(private router: Router, private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getAllGenres().subscribe(({ genres }) => {
      this.genreData = genres;
    });
    this.movieService
      .getAllMovies()
      .subscribe(({ results }: PopularMovieInterface) => {
        this.movieData = this.getImageAndReleaseYear(results);
        this.onPageChange2({ page: 0, rows: 4, first: 0 });
      });
    this.movieService
      .getAllLatestMovies()
      .subscribe(({ results }: LatestMovieInterface) => {
        this.onPageChange({ page: 0, rows: 4, first: 0 });
        this.latestMovieData = results.map((element: MovieDetailInterface) => {
          return {
            ...element,
            image: 'https://image.tmdb.org/t/p/w500/' + element.poster_path,
            releaseYear: element.release_date.split('-')[0],
          };
        });
      });
    this.responsiveOptions = [
      {
        breakpoint: '1483px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '1139px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '635px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  private getImageAndReleaseYear(
    results: MovieDetailInterface[]
  ): MovieDetailInterface[] {
    return results.map((element: MovieDetailInterface) => {
      return {
        ...element,
        image: 'https://image.tmdb.org/t/p/w500/' + element.poster_path,
        releaseYear: element.release_date.split('-')[0],
      };
    });
  }

  public redirect({ id }: MovieDetailInterface): void {
    this.router.navigateByUrl(`/movies/${id}`);
    console.log(id);
  }

  public redirectToMovieDetailsPage(movieDetail: MovieDetailInterface) {
    this.router.navigateByUrl(`/movies/${movieDetail.id}`);
  }
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }

  redirectedEvent({ id }: MovieDetailInterface) {
    this.router.navigateByUrl(`/movies/${id}`);
  }
  onPageChange2({ page, rows, first }: PaginatorState) {
    console.log('text');
    switch (page) {
      case 0:
        this.data = this.movieData.slice(0, 4);
        break;
      case 1:
        this.data = this.movieData.slice(4, 8);
        break;
      case 2:
        this.data = this.movieData.slice(8, 12);
        break;
      case 3:
        this.data = this.movieData.slice(12, 16);
        break;
      case 4:
        this.data = this.movieData.slice(16, 20);
        break;
    }
    this.first2 = first as number;
    this.rows2 = rows as number;
  }
  onPageChange({ page, rows, first }: PaginatorState) {
    console.log('text');
    switch (page) {
      case 0:
        this.latestMovies = this.movieData.slice(16, 20);
        break;
      case 1:
        this.latestMovies = this.movieData.slice(12, 16);
        break;
      case 2:
        this.latestMovies = this.movieData.slice(8, 12);
        break;
      case 3:
        this.latestMovies = this.movieData.slice(4, 8);
        break;
      case 4:
        this.latestMovies = this.movieData.slice(0, 4);
        break;
    }
    this.first = first as number;
    this.rows = rows as number;
  }
  parentMessage = 'Featured Today';
  seeMessage = 'See all';
  upcomingMessage = 'Upcoming';
}
