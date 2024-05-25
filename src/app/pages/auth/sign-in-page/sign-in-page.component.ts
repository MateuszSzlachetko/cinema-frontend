import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  signInForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);

  constructor() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }
}
