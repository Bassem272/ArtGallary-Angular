import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header2Component } from './header2/header2.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderHomeComponent,
    Header2Component,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    FontAwesomeModule,
    FormsModule,

    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderHomeComponent,
    Header2Component,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
  ],
})
export class SharedModule {}
