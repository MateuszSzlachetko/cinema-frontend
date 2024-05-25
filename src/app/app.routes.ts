import {Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {SignInPageComponent} from "./pages/auth/sign-in-page/sign-in-page.component";

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
    path: '**',
    redirectTo: '',
  }
];
