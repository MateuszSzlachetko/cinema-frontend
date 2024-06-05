import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class TicketService {
  apiPath = "/api/tickets/check";
  http: HttpClient = inject(HttpClient);

  checkTicket(ticketId: string) {
    return this.http.patch(`${this.apiPath}?ticketId=${ticketId}`, {})
  }
}
