import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieDetailInterface } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data?: MovieDetailInterface;

  @Output() redirectEvent = new EventEmitter<MovieDetailInterface>();
  redirect(value: MovieDetailInterface | undefined) {
    this.redirectEvent.emit(value);
  }
}
