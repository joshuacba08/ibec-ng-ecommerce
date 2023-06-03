import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // reactive form example with formBuilder
  loginForm = this.formBuilder.group({
    email: ['juan.cruz@test.com', [Validators.required, Validators.email]], // default value, validators
    password: [
      'Abc123',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ], // default value, validators
  });

  // Constructor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    // submit form function
    console.log('submit: ', this.loginForm.value);
    if (this.loginForm.invalid) {
      console.error('invalid form', this.loginForm.invalid);
      return;
    }

    console.log('valid form', this.loginForm.valid);
    // si estoy aqui es porque el formulario es valido

    const dataLogin = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    }

    this.authService.login(dataLogin).subscribe({
      next: (data) => { // se ejecuta cuando el observable devuelve un valor
        console.log('data: ', data);
      },
      error: (error) => { // se ejecuta cuando el observable devuelve un error
        console.log('error: ', error);
      },
    })
  }
}
