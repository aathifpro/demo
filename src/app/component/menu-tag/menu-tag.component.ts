import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-menu-tag',
  templateUrl: './menu-tag.component.html',
  styleUrls: ['./menu-tag.component.css']
})
export class MenuTagComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input() visibleHeader: boolean | undefined;


  public productList: Products[] = [
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 29 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 12 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
  ]

}
