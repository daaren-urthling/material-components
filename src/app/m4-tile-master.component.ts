import { Component, OnInit, Input } from '@angular/core';
import { TileGroupComponent } from './tile-group.component';

@Component({
  selector: 'm4-tile-master',
  templateUrl: './m4-tile-master.component.html',
  styles: []
})
export class M4TileMasterComponent {
  @Input() tileGroup : TileGroupComponent;
}
