import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ScreeningRoomInterface} from "../../core/interfaces/screening-room.interface";
import {TicketReserveService} from "./service/ticket-reserve.service";

@Component({
  selector: 'app-ticket-reserve-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './ticket-reserve-page.component.html',
  styleUrl: './ticket-reserve-page.component.scss',
  providers:[TicketReserveService]
})
export class TicketReservePageComponent {
  screeningRoom: ScreeningRoomInterface = {} as ScreeningRoomInterface;
}
