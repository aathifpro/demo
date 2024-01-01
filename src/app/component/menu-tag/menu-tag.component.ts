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

  categoryList: { name: string; visible: boolean }[] = [
    { name: 'Breakfast', visible: true },
    { name: 'Lunch', visible: false },
    { name: 'Dinner', visible: false },
    { name: 'Drinks', visible: false },
    { name: 'Dessert', visible: false },
    { name: 'Wine', visible: false },
  ];

  // Method to update category visibility
  visibleCategory(selectedCategory: string): void {
    // Set the visibility of the selected category to true
    this.categoryList.forEach(category => {
      category.visible = category.name === selectedCategory;
    });
  }


  public productList: Products[] = [
    { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 29 },
    { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
    { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
    { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
    { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Dinner special kabbab", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
    { title: "Dinner special kabbab", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
    { title: "Dinner special chilly fish", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 12 },
    { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
    { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
  ]

}
