import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.css']
})
export class ContactScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "Contact Page",
    pageName: "Contact",
    headerImage: "assets/images/about-2.jpg"
  };


}
