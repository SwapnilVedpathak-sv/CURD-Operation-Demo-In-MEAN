import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthModuleComponent } from './auth-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MaterialModule } from './../material/material.module'


@NgModule({
  declarations: [
    AuthModuleComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    MaterialModule
  ]
})
export class AuthModuleModule { }
