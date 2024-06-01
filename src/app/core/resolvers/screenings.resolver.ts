import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {ScreeningsInterface} from "../interfaces/screening.interface";
import {ScreeningService} from "../services/screening.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";

export const screeningsResolver: ResolveFn<Observable<Observable<ScreeningsInterface>>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return of(inject(ScreeningService).getScreeningsByDate(new Date(route.queryParams["date"] || new Date())));
};
