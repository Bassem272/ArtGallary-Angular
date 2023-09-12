import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CheckoutCartComponent,
    CheckoutDetailsComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,MatGridListModule,MatDividerModule
,  MatTableModule,
MatPaginatorModule,
MatSortModule,
MatInputModule,
MatCheckboxModule,
MatSidenavModule,
MatCardModule,
MatFormFieldModule,
FontAwesomeModule,FormsModule,
SharedModule
  ]
})
export class CheckoutModule{

constructor(library: FaIconLibrary) {
  library.addIcons(faPlus);
} }



