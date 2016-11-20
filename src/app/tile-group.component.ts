import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.css']
})
export class TileGroupComponent implements OnInit {

  @Input() staticWidth : number = 30;
  fields = [
    { caption : "Telephone" }
  ]

  constructor() { 
    
  }

  ngOnInit() {
  }


  onStaticStyle() {
    return   {flex : this.staticWidth};
    // return {flex : 0};
  }

  onInputStyle() {
    return   {flex : 100 - this.staticWidth};
    // return {flex : 1};
  }

}
