import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";
import {HttpClient} from "@angular/common/http";
import {TokenInterface} from "../interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiPath: string = 'api/auth';
  private currentUser: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>({} as UserInterface);
  private token: BehaviorSubject<TokenInterface> = new BehaviorSubject<TokenInterface>({} as TokenInterface);
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this.token.asObservable().subscribe(t =>
      this.saveToken(t)
    )
  }

  signOut() {
    this.saveToken({} as TokenInterface)
    this.currentUser.next({} as UserInterface)
    this.token.next({} as TokenInterface)
  }

  signIn(email: string, password: string) {
    const body = {email: email, password: password};
    this.http.post<TokenInterface>(`${this.apiPath}/authenticate`, body).subscribe(
      t => {
        this.token.next(t);
        this.getCurrentUser();
      }
    )
  }

  getCurrentUser(): Observable<UserInterface> {
    if (this.token.getValue().access_token)
      if (!this.currentUser.getValue().email) {
        this.http.get<UserInterface>(`api/users/details`).subscribe(
          u => this.currentUser.next(u)
        )
      }
    return this.currentUser.asObservable()
  }

  getAccessToken() {
    return of(this.token.getValue().access_token);
  }

  saveToken(token: TokenInterface) {
    localStorage.setItem('accessToken', JSON.stringify(token.access_token));
    localStorage.setItem('refreshToken', JSON.stringify(token.refresh_token));
  }
}
