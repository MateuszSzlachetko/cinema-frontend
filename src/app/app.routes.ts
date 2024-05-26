import {Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {SignInPageComponent} from "./pages/auth/sign-in-page/sign-in-page.component";
import {SignUpPageComponent} from "./pages/auth/sign-up-page/sign-up-page.component";
import {ScreeningsPageComponent} from "./pages/screenings-page/screenings-page.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'screenings',
    component: ScreeningsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
