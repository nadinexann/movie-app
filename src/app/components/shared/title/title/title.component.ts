import { Component, Input } from '@angular/core';
import { MovieDetailInterface } from 'src/app/models/movie.detail.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
@Input() title?: string;
@Input() releaseYear?: string;
}
