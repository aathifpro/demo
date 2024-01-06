import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tag',
  templateUrl: './menu-tag.component.html',
  styleUrls: ['./menu-tag.component.css']
})
export class MenuTagComponent {

  ngOnInit(): void {
    console.log("retieve product - start");
    this.retrieveProducts();
    console.log("retieve product - end");
  }

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  productList?: Products[];

  retrieveProducts() {
    console.log("retieve product in function - start");
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.productList = data;
          console.log(data);
          console.log("hello retrieve");
        },
        error: (e) => {
          console.error(e)
          console.error("hello error")
        }
      })
  }

  @Input() visibleHeader: boolean | undefined;

  categoryList: { name: string; visible: boolean }[] = [
    { name: 'Rice', visible: true },
    { name: 'Curry', visible: false },
    { name: 'Rotti', visible: false },
    { name: 'Noodles', visible: false },
    { name: 'Dessert', visible: false },
    { name: 'Drink', visible: false },
  ];

  // Method to update category visibility
  visibleCategory(selectedCategory: string): void {
    // Set the visibility of the selected category to true
    this.categoryList.forEach(category => {
      category.visible = category.name === selectedCategory;
    });
  }

  navigateToDestination(id: any) {
    this.router.navigate(['/single-product'], {queryParams: {productId: id}})
  }


  // public productList1: Products[] = [
  //   { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 29 },
  //   { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
  //   { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
  //   { title: "Grilled Beef with potatoes", category: "breakfast", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
  //   { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
  //   { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
  //   { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
  //   { title: "Spicy chicken with rotti", category: "lunch", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
  //   { title: "Dinner special kabbab", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
  //   { title: "Dinner special kabbab", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
  //   { title: "Dinner special chilly fish", category: "dinner", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 12 },
  //   { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "drink", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "wine", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 39 },
  //   { title: "Grilled Beef with potatoes", category: "dessert", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
  // ]

}
