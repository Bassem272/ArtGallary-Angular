import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header2Component } from './header2/header2.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';



@NgModule({
  declarations: [
HeaderComponent,
FooterComponent,
HeaderHomeComponent,


    Header2Component,
      AdminFooterComponent
  ],
  imports: [
    CommonModule,MatExpansionModule,MatToolbarModule,MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderHomeComponent,
    Header2Component,
    AdminFooterComponent

  ]
})
export class SharedModule { }
