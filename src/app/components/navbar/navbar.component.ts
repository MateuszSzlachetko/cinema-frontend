import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {isLoggedIn, isUsher} from '../../core/guards/auth.guard';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn$ = isLoggedIn();
  isUsher$ = isUsher()
  authService: AuthService = inject(AuthService);
}
