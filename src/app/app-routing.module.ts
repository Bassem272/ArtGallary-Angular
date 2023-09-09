import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
},
{
  path:'user',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
