import {Component, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ScreeningService} from "../../core/services/screening.service";

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
  screeningService: ScreeningService = inject(ScreeningService);
  dates = Array.from({length: 7},
    (_, i) => new Date(Date.now() + i * dayInMilliseconds));

  constructor() {
    this.screeningService.getScreeningsByDate(this.dates[0]).subscribe(s => console.log(s));
  }
}
