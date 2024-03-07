import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  public imageHouse: string =
    'https://banner2.cleanpng.com/20190218/zse/kisspng-portable-network-graphics-film-vector-graphics-com-movie-ticket-svg-png-icon-free-download-125477-5c6b3dd11a8ac2.8354680615505320491087.jpg';
  public data: any = [];
  responsiveOptions: any[] | undefined;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllPeople().subscribe(({ results }) => {
      this.data = results.map((element:any) => {
        return {
          ...element,
          image: 'https://image.tmdb.org/t/p/w500/' + element.profile_path,
        };
      });
      console.log(this.data);
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
  public redirectToPeople() {
    this.router.navigateByUrl(`/people`);
  }
  public redirectToPeopleDetailsPage(peopleDetail: any) {
    this.router.navigateByUrl(`/people/${peopleDetail.id}`);
  }
  public redirectToHome(){
    this.router.navigateByUrl(``);
  }

}
