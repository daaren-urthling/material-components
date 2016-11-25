import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styles: [`
    .m4-selector-sidenav {
        margin-top:10px; 
        margin-bottom:10px; 
        overflow:hidden;
      }
    .m4-tile-container {
      padding-top: 5px;
      padding-bottom: 10px;
      padding-right: 5px;      
    }
  `]
})
export class TileGroupComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() compact : boolean = false;

  show : boolean = false;
  opened : boolean = true;

  ngOnInit() {
    console.log('starting');
  }
}
