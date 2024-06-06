import {Component, inject} from '@angular/core';
import {TicketReserveService} from "../../pages/ticket-reserve-page/service/ticket-reserve.service";
import {ScreeningService} from "../../core/services/screening.service";
import {ActivatedRoute} from "@angular/router";
import {MovieInterface} from "../../core/interfaces/movie.interface";
import {ScreeningInterface} from "../../core/interfaces/screening.interface";
import {SeatComponent} from "../screening-room/seat/seat.component";
import {DatePipe} from "@angular/common";
import {UserInterface} from "../../core/interfaces/user.interface";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    SeatComponent,
    DatePipe
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss'
})
export class TicketFormComponent {
  ticketReserveService: TicketReserveService = inject(TicketReserveService);
  screeningService: ScreeningService = inject(ScreeningService);
  authService: AuthService = inject(AuthService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  user: UserInterface = {} as UserInterface;
  movie: MovieInterface = {} as MovieInterface;
  screening: ScreeningInterface = {} as ScreeningInterface;
  reservationCode: string = '';

  constructor() {
    this.authService.getCurrentUser().subscribe(user => this.user = user)
    this.activatedRoute.queryParams.subscribe(params => {
      this.movie = this.screeningService.getMovieByScreeningId(params['screeningId']) || {} as MovieInterface;
      this.screening = this.screeningService.getScreeningById(params['screeningId']) || {} as ScreeningInterface;
    })
  }

  confirm() {
    this.ticketReserveService.reserve(this.screening.id, this.ticketReserveService.getSelectedSeats())
      .subscribe(response => {
        this.reservationCode = response.reservationCode
        setTimeout(()=> this.reservationCode = '',10000)
      })
  }
}
