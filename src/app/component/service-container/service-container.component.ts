import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'src/app/models/services.model';

@Component({
  selector: 'app-service-container',
  templateUrl: './service-container.component.html',
  styleUrls: ['./service-container.component.css']
})
export class ServiceContainerComponent implements OnInit {

  @Input() count: any | undefined;

  ngOnInit(): void {

  }

  public serviceList: Services[] = [
    { serviceName: "Master Chefs", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-user-tie" },
    { serviceName: "Quality Food", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-utensils" },
    { serviceName: "Online Order", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-cart-plus" },
    { serviceName: "24/7 Service", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-headset" },
    { serviceName: "Event Hosting", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-calendar" },
    { serviceName: "Family Packages", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-cubes" },
    { serviceName: "Online Reservations", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-blog" },
    { serviceName: "Cooking Classes", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", iconName: "fa-cloud-meatball" },
  ]

}
