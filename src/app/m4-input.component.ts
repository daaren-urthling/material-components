import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm4-input',
  templateUrl: './m4-input.component.html',
  styleUrls: ['./m4-input.component.css']
})
export class M4InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (this.compact) { this.placeholder = this.caption; }
  }

  @Input() staticWidth : number = 30;
  @Input() caption : string;
  @Input() compact : boolean = false;
  placeholder : string;

  onStaticStyle() {
    return this.compact ?  { display : 'none' } : { flex : this.staticWidth };
  }

  onInputStyle() {
    return this.compact ?  { flex : 100 } :  { flex : 100 - this.staticWidth };
  }

}
