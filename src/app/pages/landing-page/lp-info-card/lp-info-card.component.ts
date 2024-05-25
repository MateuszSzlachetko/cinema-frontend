import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-lp-info-card',
  standalone: true,
  imports: [],
  templateUrl: './lp-info-card.component.html',
  styleUrl: './lp-info-card.component.scss'
})
export class LpInfoCardComponent {
  header: InputSignal<string> = input.required<string>();
  description: InputSignal<string> = input.required<string>();
  redirectTo: InputSignal<string> = input.required<string>();
}
