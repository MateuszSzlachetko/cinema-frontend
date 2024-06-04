import {Component, input, InputSignal} from '@angular/core';
import {SeatInterface} from "../../../core/interfaces/screening-room.interface";
import {NgClass} from "@angular/common";

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

  selectSeat() {
    this.selected = !this.selected
  }
}
