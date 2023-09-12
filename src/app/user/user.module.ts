import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderHomeComponent } from '../shared/header-home/header-home.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,MatToolbarModule,
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
MatPaginatorModule,
MatSortModule,

SharedModule


  ]
})
export class UserModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus,faCartPlus);
  }
}
