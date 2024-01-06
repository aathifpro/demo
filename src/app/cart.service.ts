import { Injectable } from '@angular/core';
import { Products } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.loadCartItems();
   }

  cartItems: Products[] = []


  addToCrat(product: Products): void {
    this.cartItems.push(product);
    this.saveCartItems();
  }

  getCartItems(): Products[] {
    return this.cartItems;
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.saveCartItems();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartItems(): void {
    const storedCartItems = localStorage.getItem('cartItems');
    this.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  }

}
