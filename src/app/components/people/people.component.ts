import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleDetailInterface } from 'src/app/models/people.detail.model';
import { PeopleInterface } from 'src/app/models/people.model';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public peopleData: PeopleDetailInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getAllPeople()
      .subscribe(({ results }: PeopleInterface) => {
        this.peopleData = results.map((element: PeopleDetailInterface) => {
          console.log(element);
          return {
            ...element,
            image:
              'https://image.tmdb.org/t/p/w500' +
              (element.profile_path === 'null'
                ? element.profile_path
                : results[0].profile_path),
          };
        });
        console.log(this.peopleData);
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

  public redirectToPeopleDetailsPage({ id }: any) {
    this.router.navigateByUrl(`/people/${id}`);
  }
}
