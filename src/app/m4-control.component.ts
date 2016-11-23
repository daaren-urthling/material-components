import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, ContentChild } from '@angular/core';

///////////////////////////////////////////////////////////////////////////////
//								M4ControlItem
///////////////////////////////////////////////////////////////////////////////
//
export class M4ControlItem {
  controlCaption : string;
  staticWidth : number = 30;
  compact : boolean = false;
}

///////////////////////////////////////////////////////////////////////////////
//								M4ControlContainerComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-control-container',
  template: `
    <div m4-layout="row">
      <label class="m4-control-caption" m4-flex="{{staticWidth}}" [hidden]="compact">{{controlCaption}}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .m4-control-caption {
        text-align: end;
        align-self: center;
        padding-right: 6px;    
    }
  `]
})
export class M4ControlContainerComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() controlCaption : string;
  @Input() compact : boolean = false;

  ngOnInit() {
  }

}

///////////////////////////////////////////////////////////////////////////////
//								M4ControlComponent
///////////////////////////////////////////////////////////////////////////////
//
class M4ControlComponent {
  placeholder : string;
  staticWidth : number = -1;
  controlCaption : string;
  compact : boolean;
  controlItem : M4ControlItem;

  onInitControl() {
    if (!this.controlItem)
      this.controlItem = new M4ControlItem;

    if (this.controlCaption != null && this.controlCaption !== "") {
       this.controlItem.controlCaption = this.controlCaption;
    }

    if (this.staticWidth != null && this.staticWidth != -1) {
       this.controlItem.staticWidth = this.staticWidth;
    }

    if (this.compact &&  this.compact != this.controlItem.compact) {
       this.controlItem.compact = this.compact;
    }

    if (this.controlItem.compact) { 
      this.placeholder = this.controlItem.controlCaption; 
      this.controlItem.staticWidth = 0;
    }
  }
}

///////////////////////////////////////////////////////////////////////////////
//								M4StrEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-str-edit',
  template: `
    <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
      <md-input m4-flex="{{100 - controlItem.staticWidth}}" placeholder="{{placeholder}}"></md-input>
    </m4-control-container>
    `,
  styles: [`
    md-input {
      margin-right : 5px;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
})
export class M4StrEditComponent extends M4ControlComponent implements OnInit {

  ngOnInit() {
    super.onInitControl();
  }  
}

///////////////////////////////////////////////////////////////////////////////
//								M4PercEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-perc-edit',
  template: `
  <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
    <md-input m4-flex="{{100 - controlItem.staticWidth}}" align="end" placeholder="{{placeholder}}">
      <span md-suffix>&nbsp;%</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [`
    md-input {
      margin-right : 5px;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
})
export class M4PercEditComponent extends M4ControlComponent implements OnInit {

  ngOnInit() {
    super.onInitControl();
  }  
}

///////////////////////////////////////////////////////////////////////////////
//								M4MoneyEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-money-edit',
  template: `
  <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
    <md-input m4-flex="{{100 - controlItem.staticWidth}}" align="end" placeholder="{{placeholder}}">
      <span md-prefix>€</span>
      <span md-suffix>.00</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [`
    md-input {
      margin-right : 5px;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
})
export class M4MoneyEditComponent extends M4ControlComponent implements OnInit {
  
  ngOnInit() {
    super.onInitControl();
  }  
}

///////////////////////////////////////////////////////////////////////////////
//								M4DateEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-date-edit',
  template: `
  <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
    <div class="date-box" m4-flex="{{100 - controlItem.staticWidth}}" m4-layout="row">
      <md-input id="{{uniqid}}" placeholder="{{placeholder}}" m4flex="95"></md-input>
      <md-icon class="material-icons md-18" m4flex="5">event</md-icon>
    </div>
  </m4-control-container>
  `,
  styles: [`
    md-icon {
      align-self : center;
      font-size: 18px;
    }

    md-input {
      width:100%;
    }

    .date-box {
      margin-right : 5px;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
})
export class M4DateEditComponent extends M4ControlComponent implements OnInit, AfterViewInit {
  uniqid : string;

  constructor() {
    super();
    // give the date input an unique name 
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    this.uniqid = randLetter + Date.now();
  }

  ngOnInit() {
   super.onInitControl();
  }

  ngAfterViewInit() {
    // angular adds a "-input" after the id
    var picker = new Pikaday(
    {
      field: document.getElementById(this.uniqid + '-input'),
      firstDay: 1,
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      yearRange: [2000,2020],
      onSelect: function(date) {
            var value = picker.toString();
        }
      
    });

  }

}

// ///////////////////////////////////////////////////////////////////////////////
// //								M4DateEditComponent
// ///////////////////////////////////////////////////////////////////////////////
// //
// @Component({
//   selector: 'm4-date-edit',
//   template: `
//   <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
//     <div class="date-box" m4-flex="{{100 - controlItem.staticWidth}}" m4-layout="row">
//       <md-input placeholder="{{placeholder}}" m4flex="95"></md-input>
//       <md-icon class="material-icons md-18" m4flex="5">event</md-icon>
//     </div>
//   </m4-control-container>
//   `,
//   styles: [`
//     md-icon {
//       align-self : center;
//       font-size: 18px;
//     }

//     md-input {
//       width:100%;
//     }

//     .date-box {
//       margin-right : 5px;
//     }
//   `],
//   inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
// })
// export class M4DateEditComponent extends M4ControlComponent implements OnInit {
  
//   ngOnInit() {
//     super.onInitControl();
//   }

// }

// ///////////////////////////////////////////////////////////////////////////////
// //								M4DateEditComponent
// ///////////////////////////////////////////////////////////////////////////////
// //
// @Component({
//   selector: 'm4-date-edit',
//   template: `
//   <m4-control-container [controlCaption]="controlItem.controlCaption" [staticWidth]="controlItem.staticWidth" [compact]="controlItem.compact">
//     <div class="date-box" m4-flex="{{100 - controlItem.staticWidth}}" m4-layout="column">
//       <my-date-picker  [options]="myDatePickerOptions" (dateChanged)="onDateChanged($event)"></my-date-picker>
//       <div class="md-input-underline" > <span class="md-input-ripple"></span> </div>
//     </div>
//   </m4-control-container>
//   `,
//   styles: [`
//     .date-box {
//       margin-right : 5px;
//     }

//     .md-input-underline {
//       position: static;
//     }

//     :host {
//       padding-top : 10px;
//     }
//   `],
//   inputs : ['staticWidth', 'controlCaption', 'compact', 'controlItem']
// })
// export class M4DateEditComponent extends M4ControlComponent implements OnInit, AfterViewInit {

//   myDatePickerOptions = {
//       todayBtnTxt: 'Today',
//       dateFormat: 'dd-mm-yyyy',
//       showDateFormatPlaceholder : false,
//       firstDayOfWeek: 'mo',
//       sunHighlight: true,
//       height: 'auto',
//       width: 'auto',
//       inline: false,
//       disableUntil: {year: 2016, month: 8, day: 10},
//       selectionTxtFontSize: '14px'
//   };
//   // @ViewChild('datepicker') datepicker : ElementRef;

//   ngAfterViewInit() {
//     // var picker = new Pikaday({ field: document.getElementById('datepicker') });
//     // var picker = new Pikaday({field: this.datepicker })
//   }
  
//   ngOnInit() {
//     super.onInitControl();
//   }

//   onDateChanged(event) {

//   }

// }





