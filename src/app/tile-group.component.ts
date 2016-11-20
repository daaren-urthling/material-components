import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styles: [`
  div {
    display:flex;
    flex-direction:row;
  }
  md-card {
    margin: 10px;
}
md-card m4-static {
    text-align: end;
    align-self: center;
    padding-right: 6px;
}
`]
})
export class TileGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() staticWidth : number = 30;

  onStaticStyle() {
    return   {flex : this.staticWidth};
    // return {flex : 0};
  }

  onInputStyle() {
    return   {flex : 100 - this.staticWidth};
    // return {flex : 1};
  }
}
