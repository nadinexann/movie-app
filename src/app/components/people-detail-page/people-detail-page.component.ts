import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleDetailInterface } from 'src/app/models/people.detail.model';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-people-detail-page',
  templateUrl: './people-detail-page.component.html',
  styleUrls: ['./people-detail-page.component.scss'],
})
export class PeopleDetailPageComponent {
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public data: PeopleDetailInterface[] = [];
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {}

  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }

  public redirectToPeopleDetailsPage({ id }: PeopleDetailInterface) {
    this.router.navigateByUrl(`/people/${id}`);
  }

  public redirectToHome() {
    this.router.navigateByUrl(``);
  }
}
