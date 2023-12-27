import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

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

}
