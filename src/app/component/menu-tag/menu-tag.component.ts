import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tag',
  templateUrl: './menu-tag.component.html',
  styleUrls: ['./menu-tag.component.css']
})
export class MenuTagComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input() visibleHeader: boolean | undefined;

}
