import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

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
  ticketService:

  constructor() {
    this.validateTicketForm = this.fb.group({
      id: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.validateTicketForm.valid) {
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.validateTicketForm.controls;
  }
}
