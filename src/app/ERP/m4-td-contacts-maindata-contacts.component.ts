import { Component, Input } from '@angular/core';
import { TileGroupComponent } from '../tile-group.component';

@Component({
  selector: 'm4-td-contacts-maindata-contacts',
  templateUrl: './m4-td-contacts-maindata-contacts.component.html',
  styles: []
})
export class M4TdContactsMaindataContactsComponent{
  @Input() tileGroup : TileGroupComponent;

}
