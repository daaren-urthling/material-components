import { Component, Input, OnInit } from '@angular/core';
import { M4ControlItem } from './m4-control.component';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.css']
})
export class TileGroupComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() compact : boolean = false;

  controlItems : M4ControlItem[];
  discount : M4ControlItem;

  ngOnInit() {
    this.controlItems = [
      { controlCaption : 'Name', compact : this.compact,  staticWidth : this.staticWidth},
      { controlCaption : 'Address', compact : this.compact,  staticWidth : this.staticWidth},
      { controlCaption : 'ZIP', compact : this.compact,  staticWidth : this.staticWidth},
      { controlCaption : 'Telephone', compact : this.compact,  staticWidth : this.staticWidth},
      { controlCaption : 'email', compact : this.compact,  staticWidth : this.staticWidth},
    ];

    this.discount = { controlCaption : 'Discount', compact : this.compact,  staticWidth : this.staticWidth};
  }
}
