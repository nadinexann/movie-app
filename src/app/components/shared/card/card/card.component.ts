import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieDetailInterface } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  first2: any = 0;
  rows2: any = 10;

  @Input() data?: MovieDetailInterface;

  @Output() redirectEvent = new EventEmitter<MovieDetailInterface>();
  redirect(value: MovieDetailInterface | undefined) {
    this.redirectEvent.emit(value);
  }
  onPageChange2(event: any) {
    switch (event){
      case 0:
      break;
      case 1:
      break;
    }
    console.log(event)
    this.first2 = event.first;
    this.rows2 = event.rows;
  }
}
