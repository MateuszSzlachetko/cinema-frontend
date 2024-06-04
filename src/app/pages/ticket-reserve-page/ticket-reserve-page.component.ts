import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ScreeningRoomInterface} from "../../core/interfaces/screening-room.interface";

@Component({
  selector: 'app-ticket-reserve-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './ticket-reserve-page.component.html',
  styleUrl: './ticket-reserve-page.component.scss'
})
export class TicketReservePageComponent {
  screeningRoom: ScreeningRoomInterface = {} as ScreeningRoomInterface;
}
