import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponsiveOptionsInterface } from 'src/app/models/responsive.option.model';
import { MovieDetailInterface } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  responsiveOptions: ResponsiveOptionsInterface[] | undefined;
  @Input() data?: MovieDetailInterface;

  @Output() redirectEvent = new EventEmitter<MovieDetailInterface>();
  redirect(value: MovieDetailInterface | undefined) {
    this.redirectEvent.emit(value);
  }
  ngOnInit(): void {
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
}
