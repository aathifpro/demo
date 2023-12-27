import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-order-list-screen',
  templateUrl: './order-list-screen.component.html',
  styleUrls: ['./order-list-screen.component.css']
})
export class OrderListScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "Order List Page",
    pageName: "Order List",
    headerImage: "assets/images/bg_3.jpg"
  };

}