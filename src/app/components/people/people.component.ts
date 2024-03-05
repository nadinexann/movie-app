import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  public data: any = [];

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllPeople().subscribe(({ results }) => {
      this.data = results;

      console.log(this.data);
    });
  }
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }
}
