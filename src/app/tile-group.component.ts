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
    { controlClass : 'text', controlCaption : 'Name'},
    { controlClass : 'text', controlCaption : 'Address'},
    { controlClass : 'text', controlCaption : 'ZIP'},
    { controlClass : 'text', controlCaption : 'Telephone'},
    { controlClass : 'text', controlCaption : 'email'},
  ]

}
