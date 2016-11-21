import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm4-input',
  templateUrl: './m4-input.component.html',
  styleUrls: ['./m4-input.component.css']
})
export class M4InputComponent implements OnInit {

  ngOnInit() {
    if (this.compact) { 
      this.placeholder = this.caption; 
      this.staticWidth = 0;
    }
  }

  @Input() staticWidth : number = 30;
  @Input() caption : string;
  @Input() compact : boolean = false;
  placeholder : string;

  getStaticStyle() {
    return this.compact ?  { display : 'none' } : { };
  }

}
