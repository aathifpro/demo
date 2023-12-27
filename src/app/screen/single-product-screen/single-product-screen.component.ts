import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-single-product-screen',
  templateUrl: './single-product-screen.component.html',
  styleUrls: ['./single-product-screen.component.css']
})
export class SingleProductScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "Single Product Page",
    pageName: "Single Product",
    headerImage: "assets/images/bg_5.jpg"
  };

}