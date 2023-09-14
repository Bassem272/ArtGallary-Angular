import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.scss']
})
export class AdminLogoutComponent {
  constructor(private router: Router) {}
  confirmLogout() {
    // Perform logout actions (e.g., clearing session, redirecting, etc.)


  // Redirect to the login page
  this.router.navigate(['/login']); // Replace 'login' with your actual login page route
  }
}
