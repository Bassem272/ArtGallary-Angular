import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as myScript from 'script.js';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

@NgModule({
  declarations: [

    AdminLogInComponent,
    AdminDashboardComponent,
    AdminUserManagementComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    AdminLogoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

    MatInputModule,
    MatSidenavModule,MatGridListModule

  ]
})
export class AdminModule { }
