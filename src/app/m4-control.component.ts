import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TileGroupComponent } from './tile-group.component';

///////////////////////////////////////////////////////////////////////////////
//								M4ControlBindings
///////////////////////////////////////////////////////////////////////////////
//
export class M4ControlBindings {
  record : Object;
  fieldName : string;
}

///////////////////////////////////////////////////////////////////////////////
//								M4ControlContainerComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-control-container',
  template: `
    <div m4-layout="row">
      <label *ngIf="!compact" class="m4-control-caption" m4-flex="{{staticWidth}}" [ngClass]="captionClass">{{controlCaption}}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .m4-control-caption {
        text-align: end;
        align-self: center;
        padding-right: 6px;    
        margin-top: 4px;
    }
    .m4-control-caption-baseline {
        align-self: baseline;
        margin-top: 4px;
    }
  `]
})
export class M4ControlContainerComponent implements OnInit {

  @Input() staticWidth : number = 30;
  @Input() controlCaption : string;
  @Input() compact : boolean;
  @Input() captionPositionBaseline : boolean;
  captionClass : string;

  ngOnInit() {
    if (this.captionPositionBaseline)
      this.captionClass = "m4-control-caption-baseline"; 
  }
}

///////////////////////////////////////////////////////////////////////////////
//								M4ControlComponent
///////////////////////////////////////////////////////////////////////////////
//
class M4ControlComponent {
  // @Input on derived classes
  staticWidth : number;
  controlCaption : string;
  tileGroup : TileGroupComponent;
  action : string;
  bindings : M4ControlBindings;

  placeholder : string;
  icon : string;
  hasAction : boolean = false;

  onInitControl() {
    this.placeholder = this.controlCaption; 

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

  isCompact() : boolean {
    return this.tileGroup != null && this.tileGroup.compact;
  }

  getStaticWidth() : number {
    if (this.staticWidth != null) {
      return this.staticWidth;
    }
    
    if (this.tileGroup != null)
       return this.tileGroup.staticWidth;
    
    return 0;
  }

  getBinding() {
    if (this.bindings)
      return this.bindings.record[this.bindings.fieldName];
    return null;
  }

  setBinding(value) {
    if (this.bindings)
      this.bindings.record[this.bindings.fieldName] = value;
  }
}

///////////////////////////////////////////////////////////////////////////////
//								M4StrEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-str-edit',
  template: `
    <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
      <md-input m4-flex="{{100 - getStaticWidth()}}" placeholder="{{isCompact() ? placeholder : ''}}" 
        [ngModel]="getBinding()"
        (ngModelChange)="setBinding($event)"
      >
        <span *ngIf="hasAction" md-suffix><md-icon class="material-icons">{{icon}}</md-icon></span>
      </md-input>
    </m4-control-container>
    `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'action', 'bindings']
})
export class M4StrEditComponent extends M4ControlComponent implements OnInit {

  ngOnInit() {
    super.onInitControl();
  }  
}

///////////////////////////////////////////////////////////////////////////////
//								M4TextEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-text-edit',
  template: `
    <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()" [captionPositionBaseline]="true">
      <md-textarea rows="3" m4-flex="{{100 - getStaticWidth()}}" placeholder="{{isCompact() ? placeholder : ''}}"
        [ngModel]="getBinding()"
        (ngModelChange)="setBinding($event)"
      >
        <span *ngIf="hasAction" md-suffix><md-icon class="material-icons">{{icon}}</md-icon></span>
      </md-textarea>
    </m4-control-container>
    `,
  styles: [`
  `],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'action', 'bindings']
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
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
    <md-input m4-flex="{{100 - getStaticWidth()}}" align="end" placeholder="{{isCompact() ? placeholder : ''}}">
      <span md-suffix>&nbsp;%</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'bindings']
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
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
    <md-input m4-flex="{{100 - getStaticWidth()}}" align="end" placeholder="{{isCompact() ? placeholder : ''}}">
      <span md-prefix>€</span>
      <span md-suffix>.00</span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'bindings']
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
    <m4-control-container *ngIf="!isLeftCaption()" [staticWidth]="0" [compact]="false">  
      <md-checkbox m4-flex="100" color="primary">{{controlCaption}}</md-checkbox>
    </m4-control-container>
    <m4-control-container *ngIf="isLeftCaption()" [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
      <md-checkbox m4-flex="{{100 - getStaticWidth()}}" color="primary"></md-checkbox>
    </m4-control-container>
  `,
  styles: [`
    md-checkbox {
      align-self : center;
    }
  `],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'leftCaption', 'bindings']
})
export class M4BoolButtonComponent extends M4ControlComponent implements OnInit {
  leftCaption : boolean = false;

  ngOnInit() {
    super.onInitControl();
  }  

  isLeftCaption() : boolean {
    if (this.isCompact()) {
      return false;
    }
    return this.leftCaption;
  }
}

///////////////////////////////////////////////////////////////////////////////
//								M4DateEditComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-date-edit',
  template: `
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
    <md-input id="{{uniqid}}" placeholder="{{isCompact() ? placeholder : ''}}" m4-flex="{{100 - getStaticWidth()}}">
      <span md-suffix><md-icon class="material-icons">event</md-icon></span>
    </md-input>
  </m4-control-container>
  `,
  styles: [],
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'bindings']
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

///////////////////////////////////////////////////////////////////////////////
//								M4EnumComboComponent
///////////////////////////////////////////////////////////////////////////////
//
@Component({
  selector: 'm4-enum-combo',
  template: `
  <m4-control-container [controlCaption]="controlCaption" [staticWidth]="getStaticWidth()" [compact]="isCompact()">
    <div class="m4-input-box" m4-flex="{{100 - getStaticWidth()}}" m4-layout="column">
      <select [style.margin-top]="isCompact() ? '24px' : '14px'">
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
  inputs : ['staticWidth', 'controlCaption', 'tileGroup', 'elements', 'bindings']
})
export class M4EnumComboComponent extends M4ControlComponent implements OnInit {
  
  elements : string[];

  ngOnInit() {
    super.onInitControl();
  }  
}
