import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // If you want to use icons in the card
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './shared/footer/footer.component';
// import {
  // FaIconLibrary,
// } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserModule,
    MatExpansionModule,
    FontAwesomeModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
