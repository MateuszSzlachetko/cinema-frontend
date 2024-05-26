import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

const dayInMilliseconds: number = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-screenings-page',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './screenings-page.component.html',
  styleUrl: './screenings-page.component.scss'
})
export class ScreeningsPageComponent {
  dates = Array.from({length: 7},
    (_, i) => new Date(Date.now() + i * dayInMilliseconds));

  constructor() {
  }
}
