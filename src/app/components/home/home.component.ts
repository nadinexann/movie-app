import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  [x: string]: any;
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public movieData: any = [];
  public genreData: any = [];
  public latestMovieData: any = [];
  responsiveOptions: any[] | undefined;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllGenres().subscribe(({ genres }) => {
      this.genreData = genres;
      console.log(this.genreData);
    });
    this.movieService.getAllMovies().subscribe(({ results }) => {
      this.movieData = results.map((element: any) => {
        return {
          ...element,
          image: 'https://image.tmdb.org/t/p/w500/' + element.poster_path,
          releaseYear: element.release_date.split('-')[0],
        };
      });
      console.log(this.movieData);
    });
    this.movieService.getAllLatestMovies().subscribe((latest) => {
      this.latestMovieData = latest.results.map((element: any) => {
        return {
          ...element,
          image: 'https://image.tmdb.org/t/p/w500/' + element.poster_path,
          releaseYear: element.release_date.split('-')[0],
        };
      });
      console.log(this.latestMovieData);
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

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return;
  }

  public redirectToMovieDetailsPage(movieDetail: any) {
    this.router.navigateByUrl(`/movies/${movieDetail.id}`);
  }
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }
}
