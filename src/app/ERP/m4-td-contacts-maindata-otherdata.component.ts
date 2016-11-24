import { Component, Input } from '@angular/core';
import { TileGroupComponent } from '../tile-group.component';

@Component({
  selector: 'm4-td-contacts-maindata-otherdata',
  templateUrl: './m4-td-contacts-maindata-otherdata.component.html',
  styles: []
})
export class M4TdContactsMaindataOtherdataComponent{
  @Input() tileGroup : TileGroupComponent;

}
