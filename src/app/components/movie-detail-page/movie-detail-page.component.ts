import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, concatMap, map, tap } from 'rxjs';
import { MovieVideoInterface } from 'src/app/models/movie.video.model';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import {
  MovieDetailInterface,
  MovieService,
} from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent {
  public movieDetails$!: Observable<MovieDetailInterface>;
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public movieData: MovieDetailInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;
  public videoData$?: Observable<MovieVideoInterface>;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieDetails$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      tap(
        (id: string | null) =>
          (this.videoData$ = this.movieService.getMovieVideoDetails(id))
      ),
      concatMap((id: string | null) => this.movieService.getMovieDetails(id)),
      map((movieDetails: MovieDetailInterface) => {
        return {
          ...movieDetails,
          image: 'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path,
          releaseYear: movieDetails.release_date.split('-')[0],
          hours: Math.floor(movieDetails.runtime / 60),
          minutes: movieDetails.runtime % 60,
        };
      })
    );
  }
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }
  public redirectToPeopleDetailsPage({ id }: any) {
    this.router.navigateByUrl(`/people/${id}`);
  }
  public redirectToHome() {
    this.router.navigateByUrl(``);
  }
  public getTitle(movieDetails: MovieDetailInterface) {
    console.log(movieDetails);
  }
}
