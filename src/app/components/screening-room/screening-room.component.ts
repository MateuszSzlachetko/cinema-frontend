import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ScreeningRoomService} from "../../core/services/screening-room.service";
import {ScreeningRoomInterface, SeatInterface} from "../../core/interfaces/screening-room.interface";
import {SeatComponent} from "./seat/seat.component";

@Component({
  selector: 'app-screening-room',
  standalone: true,
  imports: [
    SeatComponent
  ],
  templateUrl: './screening-room.component.html',
  styleUrl: './screening-room.component.scss'
})
export class ScreeningRoomComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  screeningRoomService: ScreeningRoomService = inject(ScreeningRoomService);
  screeningRoom: ScreeningRoomInterface = {} as ScreeningRoomInterface;
  rows: Set<string> = new Set();
  columns: Set<string> = new Set();

  constructor() {
    this.activatedRoute.queryParams.subscribe(params => {
      const screeningId = params['screeningId'];
      if (screeningId)
        this.screeningRoomService.getScreeningRoomByScreeningId(screeningId).subscribe(
          screeningRoom => {
            this.screeningRoom = screeningRoom;
            this.initScreeningRoomSchema()
          }
        )
    })
  }

  initScreeningRoomSchema() {
    this.screeningRoom.seats.forEach(seat => {
      this.rows.add(seat.row)
      this.columns.add(seat.column)
    })
  }

  findSeatByRowAndColumn(row: string, column: string) {
    return this.screeningRoom.seats.find(seat =>
        seat.row === row && seat.column === column
      ) ||
      {} as SeatInterface;
  }
}
