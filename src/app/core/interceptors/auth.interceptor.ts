import {inject} from "@angular/core";
import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable, switchMap, take} from "rxjs";
import {AuthService} from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const token$: Observable<string> = inject(AuthService).getAccessToken();
  return token$.pipe(
    take(1),
    switchMap(token => {
      if (token) {
        const modifiedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next(modifiedRequest);
      }
      return next(req);
    })
  );
};
