import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header2Component } from './header2/header2.component';



@NgModule({
  declarations: [


  
    Header2Component
  ],
  imports: [
    CommonModule,MatExpansionModule,MatToolbarModule
  ]
})
export class SharedModule { }
