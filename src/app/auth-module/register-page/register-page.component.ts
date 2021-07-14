import { Component, OnInit } from '@angular/core';
import { RootService } from './../../root.service'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  authForm: any = FormGroup;
  successMsg: any;
  constructor(private root: RootService) {
    this.authForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null)
    });

    this.authForm.controls.password.valueChanges.subscribe(
      () => this.authForm.cnfpass.updateValueAndValidity()
    );
  }

  ngOnInit() {
  }

  isValid(controlName: any) {
    return this.authForm.get(controlName).invalid && this.authForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }

  register() {
    console.log(this.authForm.value);
    if (this.authForm.valid) {
      this.root.registerUser(this.authForm.value)
        .pipe(first())
        .subscribe(data => {
          console.log("Ran", data);
          Swal.fire({
            title: "User Registered Successfully !",
            text: "Please Login With Same E-mail",
            icon: "success",
          })
          this.authForm.reset();
        },
          error => {
            console.log("error", error.error.error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.error}`
            })
          });
    }
  }
}
