import {Component, inject, input, InputSignal} from '@angular/core';
import {MovieInterface} from "../../core/interfaces/movie.interface";
import {ScreeningInterface} from "../../core/interfaces/screening.interface";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-screening-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './screening-card.component.html',
  styleUrl: './screening-card.component.scss'
})
export class ScreeningCardComponent {
  movie: InputSignal<MovieInterface> = input.required<MovieInterface>();
  screenings: InputSignal<ScreeningInterface[]> = input.required<ScreeningInterface[]>();
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  reserveTicket(screening: ScreeningInterface) {
    this.router.navigate(['reserve'], {
      relativeTo: this.activatedRoute,
      queryParams: {screeningId: screening.id}
    }).then()
  }
}
