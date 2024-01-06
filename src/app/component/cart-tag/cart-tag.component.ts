import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-cart-tag',
  templateUrl: './cart-tag.component.html',
  styleUrls: ['./cart-tag.component.css']
})
export class CartTagComponent implements OnInit {

  cartItems: Products[] = [];

  currentRouteName: any = ""

  public subTotal: number = 0;
  public shippingCost: number = 5;
  public taxCost: number = 0;
  public totalCost: number = 0;

  ngOnInit(): void {
    this.getCurrentRouteName();
  }

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.cartItems = this.cartService.getCartItems();
    this.cartItems.forEach(product => {
      this.subTotal = this.subTotal + product.total;
      this.taxCost = this.subTotal * 0.15;
      this.totalCost = this.subTotal + this.shippingCost + this.taxCost
    })
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  navigateToDestination() {
    this.router.navigate(['/payment'], {queryParams: {totalCost: this.totalCost, routeName: this.currentRouteName }})
  }

  getCurrentRouteName() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path;
    console.log("current Router name : ", this.currentRouteName)
  }

}