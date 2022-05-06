import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnChanges{
  @Input()
  appCustomDirective:string ='';


  constructor(
    private _element: ElementRef)
  {

  }


  ngOnChanges() {

    if(this.appCustomDirective == '')
    {
        // show ---  add the dom element
      this._element.nativeElement.style.textShadow = '2px 2px red';
    }
    else
    {
      // hide---  removes the dom element
      this._element.nativeElement.style.textShadow = `2px 2px ${this.appCustomDirective}`; 
    }
  }

}
