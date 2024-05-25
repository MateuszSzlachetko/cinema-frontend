import { Component } from '@angular/core';
import {LpInfoCardComponent} from "./lp-info-card/lp-info-card.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    LpInfoCardComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
