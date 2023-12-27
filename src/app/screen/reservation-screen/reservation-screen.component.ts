import { Component, OnInit } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-reservation-screen',
  templateUrl: './reservation-screen.component.html',
  styleUrls: ['./reservation-screen.component.css']
})
export class ReservationScreenComponent implements OnInit {

  ngOnInit(): void {
    
  }

  public headerItems: HeaderItems = {
    headerTitle: "Reservation Page",
    pageName: "Reservation",
    headerImage: "assets/images/bg_1.jpg"
  };

}
