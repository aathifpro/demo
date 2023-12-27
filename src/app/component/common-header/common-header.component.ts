import { Component, Input } from '@angular/core';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent {

  @Input() headerItem: HeaderItems | undefined;


  @Input() inputString: string | undefined;
  @Input() inputPageName: string | undefined;
  @Input() inputHeaderImage: string | undefined;

}
