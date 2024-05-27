import {Component, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ScreeningService} from "../../core/services/screening.service";
import {ScreeningCardComponent} from "../../components/screening-card/screening-card.component";
import {ScreeningInterface, ScreeningsInterface} from "../../core/interfaces/screening.interface";
import {MovieInterface} from "../../core/interfaces/movie.interface";

const dayInMilliseconds: number = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-screenings-page',
  standalone: true,
  imports: [
    DatePipe,
    ScreeningCardComponent
  ],
  templateUrl: './screenings-page.component.html',
  styleUrl: './screenings-page.component.scss'
})
export class ScreeningsPageComponent {
  screeningService: ScreeningService = inject(ScreeningService);
  dates = Array.from({length: 7},
    (_, i) => new Date(Date.now() + i * dayInMilliseconds));
  moviesWithScreenings: Map<MovieInterface, ScreeningInterface[]> = new Map();

  constructor() {
    this.getScreenings(0)
  }

  getScreenings(index: number) {
    this.moviesWithScreenings = new Map();
    this.screeningService.getScreeningsByDate(this.dates[index]).subscribe(
      (response: ScreeningsInterface) => {
        response.movies.forEach(movie => {
            const screeningsForMovie = response.screenings.filter(
              s => s.movieId === movie.id)
            this.moviesWithScreenings.set(movie, screeningsForMovie)
          }
        )
      }
    );
  }


}
