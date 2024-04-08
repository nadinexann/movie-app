import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { MovieCreditDetailInterface } from 'src/app/models/movie.credit.detail.model';
import { MovieCreditInterface } from 'src/app/models/movie.credit.model';
import { MovieVideoDetailInterface } from 'src/app/models/movie.video.detail.model';
import { MovieVideoInterface } from 'src/app/models/movie.video.model';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import {
  MovieDetailInterface,
  MovieService,
} from 'src/app/services/movie.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent {
  public movieId: string = '';
  public directors: MovieCreditDetailInterface[] = [];
  public writers: MovieCreditDetailInterface[] = [];
  public stars: MovieCreditDetailInterface[] = [];
  public movieDetails$!: Observable<MovieDetailInterface>;
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public videoKey: string = '';
  public movieData: MovieDetailInterface[] = [];
  public videoData: MovieVideoInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;
  public videoDetails$!: Observable<MovieVideoDetailInterface[]>;
  public creditDetails$!: Observable<MovieCreditDetailInterface[]>;
  constructor(
    private router: Router,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.movieService.getCreditDetails(this.movieId).pipe(
      tap(({ crew }: MovieCreditInterface) => {
        this.directors = crew.filter(
          (director) => director.known_for_department === 'Directing'
        );
        console.log(this.directors)
        this.writers = crew.filter(
          (writer) => writer.known_for_department === 'Writing'
        );
        this.stars = crew.filter(
          (star) => star.known_for_department === 'Acting'
        );
      })
    ).subscribe()


    this.movieService
      .getMovieVideoDetails(this.movieId)
      .pipe(
        map(({ results }: MovieVideoInterface) =>
          results.filter((video) => video.name === 'Official Trailer')
        ),
        tap((data: MovieVideoDetailInterface[]) => {
          const [firstElement] = data;
          this.videoDetails$ = this.movieService
            .getVideoDetails(this.movieId, firstElement.key)
            .pipe(
              map(({ results }: MovieVideoInterface) =>
                results.filter((video) => video.name === 'Official Trailer')
              ),
              tap((data: MovieVideoDetailInterface[]) => {
                this.videoKey = data[0].key;
              })
            );
        })
      )
      .subscribe();

    this.movieDetails$ = of(this.movieId).pipe(
      switchMap((id: string | null) => this.movieService.getMovieDetails(id)),

      map((movieDetails: MovieDetailInterface) => {
        return {
          ...movieDetails,
          image: 'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path,
          releaseYear: movieDetails.release_date.split('-')[0],
          hours: Math.floor(movieDetails.runtime / 60),
          minutes: movieDetails.runtime % 60,
          //videoPlay: `//api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=${videoDetails.key}&language=en-US`
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
