import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { CheckoutModule } from './checkout/checkout.module';
const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
},
{
  path:'user',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
},
// {path:'**',component:HomeComponent },
  {
    path:'out',loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
