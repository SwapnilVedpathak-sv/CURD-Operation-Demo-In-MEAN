import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleComponent } from './auth-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
