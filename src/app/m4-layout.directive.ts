import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector:'[m4-layout]'
})
export class M4LayoutDirective{
  @Input('m4-layout') layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
       return (this.layout === 'column') ? 'column':'row';
  }
}