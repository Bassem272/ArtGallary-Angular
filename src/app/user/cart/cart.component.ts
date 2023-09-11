import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() quantity = 1;
  @Input() price = 17.9;
  cartItems: any[] = []; // Replace 'any' with your actual cart item data type
  faMinus = faMinus;
  itemSubtotals: number[] = [];



  constructor(private cdr: ChangeDetectorRef) {
    this.calculateSubtotals();
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
      },
      {
        id: 3,
        name: 'Artwork 3',
        price: 75,
        quantity: 1
      }
      // Add more cart items as needed
    ];
  }

  // increaseQuantity() {
  //   this.quantity++;
  //   this.cdr.detectChanges(); // Manually trigger change detection
  // }

  // decreaseQuantity() {
  //   if (this.quantity > 0) {
  //     this.quantity--;
  //     this.cdr.detectChanges(); // Manually trigger change detection
  //   }
  // }
  increaseQuantity(item: any) {
    item.quantity++;
    this.calculateSubtotals();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.calculateSubtotals();
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }
  // arr:any[]=[];
  // getTotalPrice1(item: any): number {
  //   return item.quantity * this.price;
  // }


  getTotalPrice2(item: any): number {
    return item.quantity * this.price;
  }
  // this form the array
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }



  calculateSubtotals() {
    this.itemSubtotals = this.cartItems.map((item) => this.getTotalPrice2(item));
  }
  getTotalCost(): number {
    return this.itemSubtotals.reduce((total, subtotal) => total + subtotal, 0);
  }
}
