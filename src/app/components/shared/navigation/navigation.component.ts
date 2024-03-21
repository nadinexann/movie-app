import { Component } from '@angular/core';
export interface LinkInterface {
  header?: string;
  image?: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  value: string | undefined;
  public imageHouse: string =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png';
  public appName: string = '';
  public links: LinkInterface[] = [
    {
      header: 'Home',
      image: '',
      link: '',
    },
    {
      header: 'Celebs',
      image: '',
      link: '/people',
    },
  ];
}
