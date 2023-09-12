import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  searchResults: string[] = [];
  customers: any[] = []; // Initialize with your customer data
  users: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  searchUsers(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const query = target.value;
    // Implement your user search logic here
    // For example, you can make an HTTP request to fetch search results
    // Replace the following mock data with actual search results from your API
    this.searchResults = [
      'User 1',
      'User 2',
      'User 3'
    ];
  }
}
addCustomer() {
  // Implement the logic to add a customer
}

deleteCustomer(customer: any) {
  // Implement the logic to delete a customer
}

editCustomer(customer: any) {
  // Enable editing for the selected customer
  customer.editing = true;
}

confirmEditCustomer(customer: any) {
  // Implement the logic to confirm and save edited customer data
  customer.editing = false;
}

cancelEditCustomer(customer: any) {
  // Cancel the editing of the customer
  customer.editing = false;
}

addUser() {
  // Implement the logic to add a user
}

deleteUser(user: any) {
  // Implement the logic to delete a user
}

editUser(user: any) {
  // Enable editing for the selected user
  user.editing = true;
}

confirmEditUser(user: any) {
  // Implement the logic to confirm and save edited user data
  user.editing = false;
}

cancelEditUser(user: any) {
  // Cancel the editing of the user
  user.editing = false;
}
}




