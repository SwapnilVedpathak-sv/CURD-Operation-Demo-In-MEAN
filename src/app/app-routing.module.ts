import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth-module/login-page/login-page.component';

const routes: Routes = [
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {
    path: '', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
