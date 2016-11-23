import { Component, Input } from '@angular/core';
import { TileGroupComponent } from './tile-group.component';

@Component({
  selector: 'm4-tile-sales',
  templateUrl: './m4-tile-sales.component.html',
  styles: [`
    md-card {
      box-sizing: border-box;
      height: 100%;      
    }
  `]
})
export class M4TileSalesComponent {
  @Input() tileGroup : TileGroupComponent;

}
