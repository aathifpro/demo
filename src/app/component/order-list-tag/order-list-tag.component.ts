import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-order-list-tag',
  templateUrl: './order-list-tag.component.html',
  styleUrls: ['./order-list-tag.component.css']
})
export class OrderListTagComponent implements OnInit {

  ngOnInit(): void {
    
  }

  public orderList: Products[] = [
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 29, quantity: 2, total: 58, category: "food" },
    { title: "Fried Beef with BBQ", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35, quantity: 2, total: 70, category: "food" },
    { title: "Grilled Beef with french fries", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15, quantity: 3, total: 45, category: "food" },
    { title: "BBQ Beef with Chilly paste", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28, quantity: 2, total: 56, category: "food" },
    { title: "Fried Fish with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 12, quantity: 4, total: 48, category: "food" },
    { title: "Grilled Chicken with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39, quantity: 1, total: 39, category: "food" },
  ]

}
