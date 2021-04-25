import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // LoginMode = true;
  signUpForm: FormGroup;
    constructor(private router: Router) {
   this.signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
   });
   }

  ngOnInit() {}
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      // console.log('Email:-', email , 'password:=>', password);
      localStorage.setItem('UserData' , JSON.stringify({email, password}));
      this.router.navigate(['dashboard']);
    }
  }

  // onModeSwitch() {
  //   this.LoginMode = !this.LoginMode;
  // }

}
