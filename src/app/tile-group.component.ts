import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styles: [`
  div {
    display:flex;
    flex-direction:row;
  }
  `]
})
export class TileGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
