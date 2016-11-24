import { Component, Input } from '@angular/core';
import { TileGroupComponent } from '../tile-group.component';

@Component({
  selector: 'm4-td-contacts-maindata-companydata',
  templateUrl: './m4-td-contacts-maindata-companydata.component.html',
  styles: []
})
export class M4TdContactsMaindataCompanydataComponent {
  @Input() tileGroup : TileGroupComponent;
}
