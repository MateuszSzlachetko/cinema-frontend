import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: '../auth-forms.scss'
})
export class SignUpPageComponent {
  signUpForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);

  constructor() {
    const phoneNumberRegex = RegExp("^([+]?[\\s0-9]+)?(\\d{3}|[(]?[0-9]+[)])?(-?\\s?[0-9])+$")

    this.signUpForm = this.fb.group({
      name:['',Validators.required],
      surname:['',Validators.required],
      phoneNumber:['',[Validators.required,Validators.pattern(phoneNumberRegex)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }
}
