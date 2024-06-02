import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user$ = authService.getCurrentUser();

  return user$.pipe(
    map(currentUser => {
      if (!currentUser.email) {
        router.navigateByUrl('/sign-in');
        return false;
      }
      return true;
    })
  );
}
