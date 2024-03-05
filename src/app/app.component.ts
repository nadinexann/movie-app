import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getAllMovies()
      .subscribe((result) => console.log(result, 'RESULT'));
  }
}
