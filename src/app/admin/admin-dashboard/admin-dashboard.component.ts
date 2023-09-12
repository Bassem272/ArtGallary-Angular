import { Component } from '@angular/core';
// import * as myScript from './script.js'
import * as myScript from 'script.js';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  // ngOnInit() {
  //   myScript.myFunction();
  // }
// inject myScript in the component
  // constructor() {
  //   myScript.myFunction();
  // }

}
