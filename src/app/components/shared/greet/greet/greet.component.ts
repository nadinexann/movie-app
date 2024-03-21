import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss'],
})
export class GreetComponent {
  @Input() message?: string;
  @Input() see?: string;
  @Input() upcoming?: string
}
