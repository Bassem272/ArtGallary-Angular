import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path:'admin-login',component:AdminLogInComponent},
  {path:'dashboard',component:AdminDashboardComponent}
  ,{path:'admin-logout',component:AdminLogoutComponent}
  ,{path:'customers',component:CustomersComponent},
  {
    path:'products',component:ProductsComponent},
    {path:'orders',component:OrdersComponent},
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
