import { Component, Input } from '@angular/core';
import { TileGroupComponent } from '../tile-group.component';

@Component({
  selector: 'm4-td-contacts-maindata-address',
  templateUrl: './m4-td-contacts-maindata-address.component.html',
  styles: []
})
export class M4TdContactsMaindataAddressComponent {
  @Input() tileGroup : TileGroupComponent;

}
