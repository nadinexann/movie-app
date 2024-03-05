import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public data: any = [];

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(({ results }) => {
      this.data = results;

      console.log(this.data);
    });
  }

  public redirectToMovieDetailsPage(movieDetail: any) {
    this.router.navigateByUrl(`/movies/${movieDetail.id}`);
  }
}
