import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.css']
})
export class TileGroupComponent {

  @Input() staticWidth : number = 30;
  @Input() compact : boolean = false;
  fields = [
    { caption : "Name" },
    { caption : "Address" },
    { caption : "Telephone" }
  ]

}
