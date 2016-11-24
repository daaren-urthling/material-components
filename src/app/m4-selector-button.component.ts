import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm4-selector-button',
  template: `
    <div class="m4-selector-button-container" [ngClass]="buttonContainerClass">
      <button md-button [ngClass]="buttonClass">
          <div m4-layout="column">
              <md-icon class="m4-selector-icon">{{icon}}</md-icon>
              <span *ngIf="!compact">{{caption}}</span>
          </div>
      </button>
    </div>
  `,
  styles: [`
    .m4-selector-icon {
        align-self : center;
        font-size: 32px;
        width: 32px;
        height: 32px;
    }

    button {
      max-width : 120px;
      vertical-align :middle;
    }

    .m4-narrow-selector {
      max-width : 80px;      
    }

    span {
      white-space: normal;
      line-height: 18px;      
    }

    .m4-selector-button-container {
        width: 100%;
        text-align: center;
    }

    .m4-selector-button-container:before{
      content:'';
      padding:30% 0;
      vertical-align:middle;
      display:inline-flex;
    }

    .m4-narrow-selector-button-container:before{
      padding:15% 0;
    }
  `]
})
export class M4SelectorButtonComponent implements OnInit {
  @Input() caption : string;
  @Input() icon : string;
  @Input() compact : string;
  buttonClass : string;
  buttonContainerClass : string;

  ngOnInit() {
    if (this.compact) {
      this.buttonClass = "m4-narrow-selector";
      this.buttonContainerClass = "m4-narrow-selector-button-container";
    }
  }
}
