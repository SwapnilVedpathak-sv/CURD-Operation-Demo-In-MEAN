import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RootService } from './../../root.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm:any = FormGroup;
  collections:any= [];

  constructor(private root: RootService, private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
   
  }

  isValid(controlName:any){
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  loginUser(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.root.loginUser(this.loginForm.value)
      .pipe(first())
      .subscribe(data => {
        console.log("Ran", data);
        this.collections = data;
        console.log("DID", this.collections.token)
        localStorage.setItem("token", this.collections.token.toString())
        Swal.fire({
          text: 'Login Successful !',
          timer: 1000,
        })
        this.router.navigate(['home']);
      },
        error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error.error}`
          })
        });
    }
  }
}
