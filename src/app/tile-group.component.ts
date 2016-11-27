import { Component, Input, OnInit } from '@angular/core';

export class Contact {
  code : string = "";
  companyName : string = "";
  address : string = "";
}

@Component({
  selector: 'app-tile-group',
  templateUrl: './tile-group.component.html',
  styles: [`
    .m4-selector-sidenav {
        margin-top:10px; 
        margin-bottom:10px; 
        overflow:hidden;
      }
  `]
})
export class TileGroupComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() compact : boolean = false;

  contact : Contact = new Contact;

  show : boolean = false;
  opened : boolean = true;

  ngOnInit() {
    // this.contact = new Contact;
    console.log('starting');
  }

  onNotesClicked() {
    console.log(this.contact);
  }
}
