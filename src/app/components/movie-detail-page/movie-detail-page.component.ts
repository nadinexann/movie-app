import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
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
  movieDetails: MovieDetailInterface | undefined;
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public movieData: MovieDetailInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => params.get('id')),
        tap((res) => console.log(res)),
        switchMap((id: string | null) => this.movieService.getMovieDetails(id))
      )
      .subscribe((result: MovieDetailInterface) => {
        return (this.movieDetails = {
          ...result,
          image: 'https://image.tmdb.org/t/p/w500/' + result.poster_path,
          releaseYear: result.release_date.split('-')[0],
        });
      });
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
}
