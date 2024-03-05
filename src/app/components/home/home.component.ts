import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public image: string =
    'https://png.pngtree.com/png-clipart/20190921/original/pngtree-movie-board-icon-png-image_4751062.jpg';
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
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }
}
