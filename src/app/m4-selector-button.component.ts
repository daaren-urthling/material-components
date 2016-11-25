import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm4-selector-button',
  template: `
    <div class="m4-selector-button-container">
      <button md-button class="m4-selector-button">
          <div m4-layout="column">
              <md-icon class="m4-selector-icon">{{icon}}</md-icon>
              <span class="m4-selector-caption">{{caption}}</span>
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

    .m4-selector-button {
      max-width : 100px;
      min-width : 0;
      vertical-align :middle;
      padding-right: 5px;
      padding-left: 5px;
      }

    .m4-selector-caption {
      white-space: normal;
      line-height: 18px;      
      font-weight : normal;
      font-size : 12px;
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

    @media screen and (max-width: 1200px) {
      .m4-selector-button-container:before{
        padding:50% 0;
      }
      .m4-selector-button {
        max-width : 70px;      
      }
      .m4-selector-caption {
        display : none;
      }
    }
  `]
})
export class M4SelectorButtonComponent implements OnInit {
  @Input() caption : string;
  @Input() icon : string;

  ngOnInit() {
  }
}
