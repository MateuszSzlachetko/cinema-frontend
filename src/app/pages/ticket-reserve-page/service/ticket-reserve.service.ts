import {inject, Injectable} from "@angular/core";
import {SeatInterface} from "../../../core/interfaces/screening-room.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketResponseInterface} from "../../../core/interfaces/ticket.interface";

@Injectable()
export class TicketReserveService {
  selectedSeats: SeatInterface[] = [];
  http: HttpClient = inject(HttpClient)

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

  removeAllSeats(): void {
    this.selectedSeats = [];
  }

  reserve(screeningId: string, seats: SeatInterface[]): Observable<TicketResponseInterface> {
    const body = {
      screeningId: screeningId,
      seats: seats,
    }
    return this.http.post<TicketResponseInterface>('/api/tickets/purchase', body)
  }
}
