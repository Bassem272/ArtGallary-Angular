import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CustomerInterface } from '../customer-interface';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { ArtWorkInterface } from '../art-work-interface';
import { UserInterface } from '../user-interface';
// import { UserService } from './user.service'; // Replace with your actual user service

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('loadingAnimation', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('true <=> false', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ProfileComponent implements OnInit {

   // Define a user object

  // constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch user data asynchronously using the user service
    // this.userService.getUserData().subscribe((userData: any) => {
    //   this.user = userData;
    // });
    this.getCustomers();
    this.createProduct();

    this.searchByName()//   // Your user data here
    setTimeout(() => {
      // this.user = {
      // };
    }, 2000); // Simulating a 2-second delay for data loading
  }
  constructor(private userService: UserServiceService) {}

  // getCustomerById(id){
  //   // return this.http.get(this.url+'/customers/'+id);
  // }

  // getCustomerByName(name){
  //   return this.http.get(this.url+'/customers/name/'+name);
  // }

  getCustomers() {
    this.userService.getCustomers().subscribe((data: CustomerInterface[]) => {
      this.customers = data;
      console.log(this.customers);
    });
  }
  product:ArtWorkInterface={
    "name": "Product Name",
    "price": 29.99,
    "description": "This is a sample product description.",
    "category_id": 1,
    "image": "sample-image.jpg",
    "stock": 100,
    "status": "active"
}
user:UserInterface= {
  "name": "assad Doe",
  "email": "assaddoe@example.com",
  "password": "assadasff",
  "role": "admin",
  "phone": "123-456-7890",
  "address": "123 Main Street"
}


customers!: CustomerInterface[];
// users!:UserInterface[];
name:string="Product Name";
  result: any;
createProduct(){
  this.userService.createProduct(this.product).subscribe((data: any) => {
      this.customers = data;
      console.log(this.customers);
    });
  }
  createUser(){
    this.userService.createUser(this.user).subscribe((data: any) => {
      this.customers = data;
      console.log(data);
    });
  }

  createOrder(){
    this.userService.createOrder(this.user).subscribe((data: any) => {
      this.customers = data;
      console.log(data);
    });
  }
  searchByName() {
    this.userService.searchByName(this.name).subscribe((data: any) => {
      this.result = data;
      console.log('result',this.result);
    });
  }



}
