import { Component, Input } from '@angular/core';
import { M4ControlItem } from './m4-control.component';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.css']
})
export class TileGroupComponent {

  @Input() staticWidth : number = 30;
  @Input() compact : boolean = false;

  controlItems : M4ControlItem[] = [
    { controlCaption : 'Name'},
    { controlCaption : 'Address'},
    { controlCaption : 'ZIP'},
    { controlCaption : 'Telephone'},
    { controlCaption : 'email'},
  ]

  discount : M4ControlItem = { controlCaption : 'Discount'}
}
