import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm4-static',
  template: '<label><ng-content></ng-content></label>',
  styles: []
})
export class M4StaticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// http://stackoverflow.com/questions/37244788/are-layout-directives-supported-by-angular-2-material-design-components
// layout="row" is same as style="display:flex;flex-direction:row"
// layout="column" => style="display:flex;flex-direction:column"

// And flex is equal to style="flex:1"

// @Directive({
//   selector:'[layout]'
// })
// export class LayoutDirective{
//   @Input() layout:string;
//   @HostBinding('style.display') display = 'flex';

//   @HostBinding('style.flex-direction')
//   get direction(){
//        return (this.layout === 'column') ? 'column':'row';
//   }
// }

// @Directive({
//   selector:'[flex]'
// })
// export class FlexDirective{
//     @Input() shrink:number = 1;
//     @Input() grow:number = 1;
//     @Input() flex:string;

//     @HostBinding('style.flex')
//     get style(){
//         return `${this.grow} ${this.shrink} ${this.flex === '' ? '0':this.flex}%`;
//     }
// }
