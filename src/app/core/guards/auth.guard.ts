import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {filter, map, Observable} from "rxjs";

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

export const usherGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user$ = authService.getCurrentUser();

  return user$.pipe(
    map(currentUser => {
      return !!(currentUser.email && currentUser.role === "USHER");
    })
  );
}

// todo: z authService nie zapisywać użytkownika w local storage
export const isLoggedIn = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const user$ = authService.getCurrentUser();

  return user$.pipe(
    filter((currentUser) => currentUser !== undefined),
    map(currentUser => currentUser.email !== undefined)
  )
}

export const isUsher = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const user$ = authService.getCurrentUser();

  return user$.pipe(
    filter((currentUser) => currentUser !== undefined),
    map(currentUser => currentUser.email !== undefined && currentUser.role === "USHER")
  )
}
