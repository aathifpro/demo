import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';
import { Services } from 'src/app/models/services.model';

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.css']
})
export class ServiceScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  countNo = 8;

  public headerItems: HeaderItems = {
    headerTitle: "Service Page",
    pageName: "Service",
    headerImage: "assets/images/bg_7.jpg"
  };

}
