import {Injectable} from "@angular/core";
import {SeatInterface} from "../../../core/interfaces/screening-room.interface";


@Injectable()
export class TicketReserveService {
  selectedSeats: SeatInterface[] = [];

  addSeat(seat: SeatInterface): void {
    this.selectedSeats.push(seat);
    console.log(this.selectedSeats);
  }

  removeSeat(seat: SeatInterface): void {
    this.selectedSeats = this.selectedSeats.filter(s => s.id !== seat.id);
    console.log(this.selectedSeats);
  }

  getSelectedSeats(): SeatInterface[] {
    return this.selectedSeats;
  }
}
