import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,MatExpansionModule,MatToolbarModule
  ]
})
export class SharedModule { }
