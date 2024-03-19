import { Component, Input, OnInit } from '@angular/core';
interface LinkInterface {
  header: string;
  image: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public appName: string = 'Cinematica';
  public links: LinkInterface[] = [
    {
      header: 'Home',
      image:
        '',
    },
    {
      header: 'People',
      image:
        '',
    },
  ];

  @Input() title!: string;


  ngOnInit(): void {
    //here you can console.log and call backend endpoints
  }
}
