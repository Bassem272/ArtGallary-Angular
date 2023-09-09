import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = []; // Replace 'any' with your actual cart item data type

  constructor() {
    // Initialize 'cartItems' with sample cart item data
    this.cartItems = [
      {
        id: 1,
        name: 'Artwork 1',
        price: 100,
        quantity: 2
      },
      {
        id: 2,
        name: 'Artwork 2',
        price: 75,
        quantity: 1
      }
      // Add more cart items as needed
    ];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
