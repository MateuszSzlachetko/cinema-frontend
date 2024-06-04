import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ScreeningRoomInterface} from "../interfaces/screening-room.interface";

@Injectable({
  providedIn: 'root'
})
export class ScreeningRoomService {
  private apiPath: string = 'api/screening-rooms';
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  getScreeningRoomByScreeningId(screeningId: string) {
    return this.http.get<ScreeningRoomInterface>(`${this.apiPath}/screenings/${screeningId}`)
  }
}
