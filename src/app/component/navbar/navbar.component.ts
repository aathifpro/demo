import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  navigateToNextPage(){
    this.router.navigate(['/about-screen']);
  }

  logout() {
    const confirmation = confirm("Do you want to logout!")
    if(confirmation) {
      localStorage.removeItem('JWT')
      this.router.navigate(['/login']);
    }
  }

}