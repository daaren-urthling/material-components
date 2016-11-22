import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm4-date-edit',
  template: `
  <div m4-layout="row">
    <label class="m4-control-caption" m4-flex="{{staticWidth}}" [hidden]="compact">{{controlCaption}}</label>
    <div m4-flex="{{100 - staticWidth}}" m4-layout="column">
      <my-date-picker  [options]="myDatePickerOptions" (dateChanged)="onDateChanged($event)"></my-date-picker>
      <div class="md-input-underline" > <span class="md-input-ripple"></span> </div>
    </div>
  </div>
  `,
  styles: [`
    .m4-control-caption {
        text-align: end;
        align-self: center;
        padding-right: 6px;    
    }

    .md-input-underline {
      position: static;
    }
  `]
})
export class M4DateEditComponent implements OnInit {
  
  myDatePickerOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd-mm-yyyy',
      showDateFormatPlaceholder : false,
      firstDayOfWeek: 'mo',
      sunHighlight: true,
      height: 'auto',
      width: 'auto',
      inline: false,
      disableUntil: {year: 2016, month: 8, day: 10},
      selectionTxtFontSize: '14px'
  };

  @Input() staticWidth : number = 30;
  @Input() controlCaption : string;
  
  constructor() { }

  ngOnInit() {
  }

  onDateChanged(event) {

  }

}
