import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any[] = [];
  addToCart(product: any){
    this.cart.push(product);
  }
  removeFromCart(product: any){
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }
  getCart(){
    return this.cart;
  }

  constructor() { }
}
