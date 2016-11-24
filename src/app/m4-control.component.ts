import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TileGroupComponent } from './tile-group.component';

///////////////////////////////////////////////////////////////////////////////
//								M4ControlContainerComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-control-container',
  template: `
    <div m4-layout="row">
      <label class="m4-control-caption" [ngClass]="captionClass" m4-flex="{{staticWidth}}" [hidden]="compact">{{controlCaption}}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .m4-control-caption {
        text-align: end;
        align-self: center;
        padding-right: 6px;    
    }
    .m4-control-caption-baseline {
        align-self: baseline;
        margin-top: 11px;
    }
  `]
})
export class M4ControlContainerComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() controlCaption : string;
  @Input() compact : boolean = false;
  @Input() captionPositionBaseline : boolean;
  captionClass : string;

  ngOnInit() {
    if (this.captionPositionBaseline)
      this.captionClass = "m4-control-caption-baseline"; 
  }

  isCompact() {
    return this.compact;
  }
}

///////////////////////////////////////////////////////////////////////////////
//								M4ControlComponent
///////////////////////////////////////////////////////////////////////////////
//
class M4ControlComponent {
  // @Input on derived classes
  staticWidth : number = -1;
  controlCaption : string;
  compact : boolean;
  tileGroup : TileGroupComponent;
  action : string;

  placeholder : string;
  icon : string;
  hasAction : boolean = false;

  onInitControl() {
    if ((this.staticWidth == null || this.staticWidth == -1) && this.tileGroup != null) {
      this.staticWidth = this.tileGroup.staticWidth;
    }

    if (this.compact == null && this.tileGroup != null) {
      this.compact = this.tileGroup.compact;
    }

    if (this.compact) { 
      this.placeholder = this.controlCaption; 
      this.staticWidth = 0;
    }

    if (this.action != null && this.action != "") {
      this.hasAction = true;
      switch (this.action) {
        case "autonum" : this.icon = "flash_on"; break;
        case "hkl" : this.icon = "search"; break; 
        case "map" : this.icon = "place"; break; 
        case "mail" : this.icon = "mail_outline"; break; 
      }
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
    <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
      <md-input m4-flex="{{100 - staticWidth}}" placeholder="{{placeholder}}">
        <span *ngIf="hasAction" md-suffix><md-icon class="material-icons">{{icon}}</md-icon></span>
      </md-input>
    </m4-control-container>
    `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup', 'action']
})
export class M4StrEditComponent extends M4ControlComponent implements OnInit {
  ngOnInit() {
    super.onInitControl();
  }  
}

  // <div class="m4-input-box" m4-flex="{{100 - staticWidth}}" m4-layout="row">
  //   <md-textarea rows="3" placeholder="{{placeholder}}" m4flex="95"></md-textarea>
  //   <md-icon class="material-icons md-18" m4flex="5">event</md-icon>
  // </div>

///////////////////////////////////////////////////////////////////////////////
//								M4TextEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-text-edit',
  template: `
    <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact" [captionPositionBaseline]="true">
      <md-textarea rows="3" m4-flex="{{100 - staticWidth}}" placeholder="{{placeholder}}">
        <span *ngIf="hasAction" md-suffix><md-icon class="material-icons">{{icon}}</md-icon></span>
      </md-textarea>
    </m4-control-container>
    `,
  styles: [`
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup', 'action']
})
export class M4TextEditComponent extends M4ControlComponent implements OnInit {

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
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
    <md-input m4-flex="{{100 - staticWidth}}" align="end" placeholder="{{placeholder}}">
      <span md-suffix>&nbsp;%</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup']
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
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
    <md-input m4-flex="{{100 - staticWidth}}" align="end" placeholder="{{placeholder}}">
      <span md-prefix>€</span>
      <span md-suffix>.00</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup']
})
export class M4MoneyEditComponent extends M4ControlComponent implements OnInit {
  
  ngOnInit() {
    super.onInitControl();
  }  
}

///////////////////////////////////////////////////////////////////////////////
//								M4BoolButtonComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-bool-button',
  template: `
    <m4-control-container *ngIf="!leftCaption" [staticWidth]="0" [compact]="false">  
      <md-checkbox m4-flex="100" color="primary">{{controlCaption}}</md-checkbox>
    </m4-control-container>
    <m4-control-container *ngIf="leftCaption" [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
      <md-checkbox m4-flex="{{100 - staticWidth}}" color="primary"></md-checkbox>
    </m4-control-container>
  `,
  styles: [`
    md-checkbox {
      align-self : center;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup', 'leftCaption']
})
export class M4BoolButtonComponent extends M4ControlComponent implements OnInit {
  leftCaption : boolean = false;

  ngOnInit() {
    super.onInitControl();
    if (this.compact) {
      this.leftCaption = false;
    }
  }  
}

    // <div class="m4-input-box" m4-flex="{{100 - staticWidth}}" m4-layout="row">
    //   <md-input id="{{uniqid}}" placeholder="{{placeholder}}" m4flex="95"></md-input>
    //   <md-icon class="material-icons md-18" m4flex="5">event</md-icon>
    // </div>

///////////////////////////////////////////////////////////////////////////////
//								M4DateEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-date-edit',
  template: `
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
    <md-input id="{{uniqid}}" placeholder="{{placeholder}}" m4-flex="{{100 - staticWidth}}">
      <span md-suffix><md-icon class="material-icons">event</md-icon></span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup']
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
    //
  //  <div class="date-box" m4-flex="{{100 - staticWidth}}" m4-layout="row">
  //     <md-input id="{{uniqid}}" placeholder="{{placeholder}}" m4flex="95"></md-input>
  //     <md-icon class="material-icons md-18" m4flex="5">event</md-icon>
  //   </div>
      //<md-icon class="material-icons" m4flex="5">keyboard_arrow_down</md-icon>
      //<md-input placeholder="{{placeholder}}" m4-flex="95"></md-input>

// +    <div class="date-box" m4-flex="{{100 - staticWidth}}" m4-layout="column">
//  +      <my-date-picker  [options]="myDatePickerOptions" (dateChanged)="onDateChanged($event)"></my-date-picker>
//  +      <div class="md-input-underline" > <span class="md-input-ripple"></span> </div>
//  +    </div>

///////////////////////////////////////////////////////////////////////////////
//								M4EnumComboComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-enum-combo',
  template: `
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="staticWidth" [compact]="compact">
    <div class="m4-input-box" m4-flex="{{100 - staticWidth}}" m4-layout="column">
      <select>
        <option *ngFor="let elem of elements">{{elem}}</option>
      </select>
      <div class="md-input-underline"> <span class="md-input-ripple"></span> </div>
      </div>
  </m4-control-container>
  `,
  styles: [`
    select {
      border: 0;
      margin-top : 14px;
      margin-bottom : 5px;
    }
    select:focus {
      outline: none;
    }
    .md-input-underline {
      position: static;
    }    
  `],
  inputs : ['staticWidth', 'controlCaption', 'compact', 'tileGroup', 'elements']
})
export class M4EnumComboComponent extends M4ControlComponent implements OnInit {
  
  elements : string[];

  ngOnInit() {
    super.onInitControl();
  }  
}





