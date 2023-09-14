import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { CheckoutModule } from './checkout/checkout.module';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import { LogoutComponent } from './authentication/logout/logout.component';
const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
},
{
  path:'user',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
},

  {
    path:'out',loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
{path:'admin',loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
