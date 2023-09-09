import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },{
    path:'products',component:ProductsComponent
  },{
    path:'**',redirectTo:'/home'
  },
  {
    path:'productdetails/:id',component:ProductDetailsComponent
  },{
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
