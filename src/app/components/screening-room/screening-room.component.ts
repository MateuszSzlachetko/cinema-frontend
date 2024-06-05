import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ScreeningRoomService} from "../../core/services/screening-room.service";
import {ScreeningRoomInterface, SeatInterface} from "../../core/interfaces/screening-room.interface";
import {SeatComponent} from "./seat/seat.component";

@Component({
  selector: 'app-screening-room',
  standalone: true,
  imports: [
    SeatComponent,
    RouterLink
  ],
  templateUrl: './screening-room.component.html',
  styleUrls: ['./screening-room.component.scss', './seat/seat.component.scss'],
})
export class ScreeningRoomComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  screeningRoomService: ScreeningRoomService = inject(ScreeningRoomService);
  screeningRoom: ScreeningRoomInterface = {} as ScreeningRoomInterface;
  screeningId: string = '';
  rows: Set<string> = new Set();
  columns: Set<string> = new Set();
  router: Router = inject(Router);

  constructor() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.screeningId = params['screeningId'];
      if (this.screeningId)
        this.screeningRoomService.getScreeningRoomByScreeningId(this.screeningId).subscribe(
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

  navigate() {
    this.router.navigate(['/screenings/reserve/finalize'], {queryParams: {screeningId: this.screeningId}}).then()
  }
}
