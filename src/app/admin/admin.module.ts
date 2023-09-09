import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminLogInComponent,
    AdminDashboardComponent,
    AdminUserManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
