import { HeaderComponent } from './../../shared/header/header.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.scss'],

})
export class AdminLogInComponent {
  constructor(private headerComponent: HeaderComponent) {}
}
