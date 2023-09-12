import { Component, OnInit } from '@angular/core';
// import { UserService } from './user.service'; // Replace with your actual user service

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any; // Define a user object

  // constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch user data asynchronously using the user service
    // this.userService.getUserData().subscribe((userData: any) => {
    //   this.user = userData;
    // });
  }
}
