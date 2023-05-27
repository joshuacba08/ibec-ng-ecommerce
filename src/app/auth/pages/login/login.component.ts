import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // reactive form example with formBuilder
  loginForm = this.formBuilder.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
  });

  // Constructor
  constructor( private formBuilder: FormBuilder ){}



  onSubmit(){
    console.log('submit: ', this.loginForm.value);
    if (this.loginForm.invalid){
      console.log('invalid form', this.loginForm.invalid);
      return;
    }
    console.log('valid form', this.loginForm.valid);
  }

}
