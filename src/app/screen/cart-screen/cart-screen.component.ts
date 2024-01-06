import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { HeaderItems } from 'src/app/models/header-items.model';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.css']
})
export class CartScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  breadCrumbs = "cart"

  public headerItems: HeaderItems = {
    headerTitle: "Cart Page",
    pageName: "Cart",
    headerImage: "assets/images/bg_3.jpg"
  };




}