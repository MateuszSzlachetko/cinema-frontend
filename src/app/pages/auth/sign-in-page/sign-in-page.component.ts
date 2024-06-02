import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: '../auth-forms.scss'
})
export class SignInPageComponent {
  signInForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService)

  constructor() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.signIn(
        this.signInForm.controls['email'].value,
        this.signInForm.controls['password'].value
      )
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }
}
