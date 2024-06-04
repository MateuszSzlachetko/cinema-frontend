import {Component, inject} from '@angular/core';
import {DatePipe, formatDate, NgClass} from "@angular/common";
import {ScreeningService} from "../../core/services/screening.service";
import {ScreeningCardComponent} from "../../components/screening-card/screening-card.component";
import {ScreeningInterface, ScreeningsInterface} from "../../core/interfaces/screening.interface";
import {MovieInterface} from "../../core/interfaces/movie.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MoviesCarouselComponent} from "../../components/movies-carousel/movies-carousel.component";

const dayInMilliseconds: number = 1000 * 60 * 60 * 24;
const numOfDaysInAdvance: number = 7;

@Component({
  selector: 'app-screenings-page',
  standalone: true,
  imports: [
    DatePipe,
    ScreeningCardComponent,
    MoviesCarouselComponent,
    NgClass
  ],
  templateUrl: './screenings-page.component.html',
  styleUrl: './screenings-page.component.scss'
})
export class ScreeningsPageComponent {
  screeningService: ScreeningService = inject(ScreeningService);
  dates = Array.from({length: numOfDaysInAdvance},
    (_, i) => new Date(Date.now() + i * dayInMilliseconds));
  moviesWithScreenings: Map<MovieInterface, ScreeningInterface[]> = new Map();
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  buttonSelected: boolean[] = Array.from({length: numOfDaysInAdvance}, _ => false);


  constructor() {
    this.activatedRoute.data.subscribe(({screenings$}) => {
      screenings$.subscribe((response: ScreeningsInterface) => this.updateScreenings(response))
    });

    this.activatedRoute.queryParams.subscribe(params => {
      const date = params["date"] || Date.now();
      this.updateSelectedButton(new Date(date));
    })

  }

  getScreenings(index: number) {
    const date = this.dates[index];
    this.updateUrl(date)
    this.updateSelectedButton(date);
    this.screeningService.getScreeningsByDate(date).subscribe(
      (response: ScreeningsInterface) => this.updateScreenings(response)
    );
  }

  updateScreenings(data: ScreeningsInterface) {
    this.moviesWithScreenings = new Map();
    data.movies.forEach(movie => {
      const screeningsForMovie = data.screenings.filter(
        s => s.movieId === movie.id)
      this.moviesWithScreenings.set(movie, screeningsForMovie)
    })
  }

  updateUrl(date: Date) {
    const dateParam = formatDate(date, "yyyy-MM-dd", 'en-US');
    const queryParams: Params = {date: dateParam};

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
      }
    ).then(r => r);
  }

  updateSelectedButton(date: Date) {
    const compareDates = (date1: Date, date2: Date) => {
      date1.setHours(0, 0, 0, 0)
      date2.setHours(0, 0, 0, 0)
      return date1.getTime() === date2.getTime()
    }
    const index = this.dates.findIndex(d => compareDates(d, date));
    this.buttonSelected = Array.from({length: numOfDaysInAdvance}, _ => false);
    this.buttonSelected[index] = true;
  }
}
