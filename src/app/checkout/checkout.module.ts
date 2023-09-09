import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';


@NgModule({
  declarations: [
    CheckoutCartComponent,
    CheckoutDetailsComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
