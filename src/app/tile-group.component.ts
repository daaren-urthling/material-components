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

  ngOnInit() {
  }
}
