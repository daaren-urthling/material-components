import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

export class M4ControlItem {
  controlClass : string;
  controlCaption  : string;
}

@Component({
  selector: 'm4-control',
  templateUrl: './m4-control.component.html',
  styleUrls: ['./m4-control.component.css']
})
export class M4ControlComponent implements OnInit, AfterViewInit {

  @Input() staticWidth : number = 30;
  @Input() controlCaption : string;
  @Input() compact : boolean = false;
  @Input() controlClass : string = 'text';
  @Input() controlItem : M4ControlItem;
  placeholder : string;
  badValue : string;
  @ViewChild('datepicker') datepicker : ElementRef;

  ngAfterViewInit() {
    // var picker = new Pikaday({ field: document.getElementById('datepicker') });
    // var picker = new Pikaday({field: this.datepicker })
  }

  ngOnInit() {
    if (this.controlItem) {
      this.controlClass = this.controlItem.controlClass;
      this.controlCaption = this.controlItem.controlCaption;
    }

    switch (this.controlClass) {
      case 'text':
      case 'number':
      case 'perc':
        break; // ok

      default:
        this.badValue =this.controlClass; 
        this.controlClass = 'undefined';
    }

    if (this.compact) { 
      this.placeholder = this.controlCaption; 
      this.staticWidth = 0;
    }
  }

}
