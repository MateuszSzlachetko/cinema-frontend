import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TicketService} from "../../core/services/ticket.service";

@Component({
  selector: 'app-validate-ticket-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './validate-ticket-page.component.html',
  styleUrl: './validate-ticket-page.component.scss'
})
export class ValidateTicketPageComponent {
  validateTicketForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  ticketService: TicketService = inject(TicketService);
  responseMessage: any;

  constructor() {
    this.validateTicketForm = this.fb.group({
      id: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.validateTicketForm.valid) {
      this.ticketService.checkTicket(this.validateTicketForm.controls['id'].value).subscribe(res => {
        this.responseMessage = res;
        console.log(this.responseMessage);
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.validateTicketForm.controls;
  }
}
