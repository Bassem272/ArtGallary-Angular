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
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, AuthenticationModule ,
MatCardModule,MatIconModule,

    MatButtonModule,
    MatInputModule,
    MatToolbarModule,MatFormFieldModule,MatExpansionModule
  ,FontAwesomeModule


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm);
  }
}
