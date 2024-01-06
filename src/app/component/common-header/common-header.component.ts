import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit{

  public currentRouteName: any = ''

  ngOnInit(): void {
    this.getCurrentRouteName();
  }

  constructor(
    private route: ActivatedRoute,
  ) {

  }

  @Input() headerItem: HeaderItems | undefined;

  @Input() showedbreadCrumbs: any | undefined;


  @Input() inputString: string | undefined;
  @Input() inputPageName: string | undefined;
  @Input() inputHeaderImage: string | undefined;


  getCurrentRouteName() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path;
    console.log("current Router name : ", this.currentRouteName)
  }
  

}
