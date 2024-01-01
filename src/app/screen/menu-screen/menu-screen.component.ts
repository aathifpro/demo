import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';
import { VisibleCategory } from 'src/app/models/visible-category.model';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "Menu Page",
    pageName: "Menu",
    headerImage: "assets/images/bg_3.jpg"
  }

  public visibleTitle: boolean = false;

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


}
