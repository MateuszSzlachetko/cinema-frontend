import {Component, inject, input, InputSignal} from '@angular/core';
import {SeatInterface} from "../../../core/interfaces/screening-room.interface";
import {NgClass} from "@angular/common";
import {TicketReserveService} from "../../../pages/ticket-reserve-page/service/ticket-reserve.service";

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss'
})
export class SeatComponent {
  seat: InputSignal<SeatInterface> = input.required<SeatInterface>()
  selected: boolean = false;
  ticketReserveService: TicketReserveService = inject(TicketReserveService);

  selectSeat() {
    if (!this.seat().isFree)
      return;

    this.selected = !this.selected
    if (this.selected)
      this.ticketReserveService.addSeat(this.seat())
    else
      this.ticketReserveService.removeSeat(this.seat())
  }
}
