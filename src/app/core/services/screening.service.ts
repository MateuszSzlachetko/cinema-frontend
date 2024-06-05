import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {ScreeningInterface, ScreeningsInterface} from "../interfaces/screening.interface";
import {MovieInterface} from "../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private apiPath: string = 'api/screenings';
  private screenings: Map<string, BehaviorSubject<ScreeningsInterface>> = new Map();
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  getScreeningsByDate(date: Date): Observable<ScreeningsInterface> {
    const dateParam = formatDate(date, "yyyy-MM-dd", 'en-US');

    if (!this.screenings.has(dateParam)) {
      const newSubject: BehaviorSubject<ScreeningsInterface> = new BehaviorSubject({
        movies: [],
        screenings: []
      } as ScreeningsInterface);
      this.screenings.set(dateParam, newSubject);
      this.http.get<ScreeningsInterface>(`${this.apiPath}?date=${dateParam}`).subscribe(
        screenings => newSubject.next(screenings))
    }

    return this.screenings.get(dateParam)!.asObservable();
  }

  getMovieByScreeningId(screeningId: string) {
    let scr: ScreeningInterface | undefined = this.getScreeningById(screeningId)
    let movie: MovieInterface | undefined;

    this.screenings.forEach(screenings => {
      movie = screenings.getValue().movies.find(m => m.id === scr?.movieId)
    })

    return movie;
  }

  getScreeningById(screeningId: string) {
    let scr: ScreeningInterface | undefined;

    this.screenings.forEach(screenings => {
      scr = screenings.getValue().screenings.find(s => s.id === screeningId)
    })

    return scr;
  }
}
