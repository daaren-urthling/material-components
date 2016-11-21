import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector:'[m4-flex]'
})
export class M4FlexDirective{
    @Input('m4-flex') flex:string = '';

    @HostBinding('style.flex')
    get style(){
        return `${this.flex === '' ? '0':this.flex}%`;
    }
}