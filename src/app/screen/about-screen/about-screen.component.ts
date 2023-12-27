import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "About Page",
    pageName: "About",
    headerImage: "assets/images/bg_2.jpg",
  }



}
