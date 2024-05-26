import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {ScreeningsInterface} from "../interfaces/screening.interface";

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private apiPath: string = 'api/screenings';
  private screenings: Map<string, BehaviorSubject<ScreeningsInterface>> = new Map();
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  getScreeningsByDate(date: Date): Observable<any> {
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
}
