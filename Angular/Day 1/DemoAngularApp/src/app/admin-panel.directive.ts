import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminPanel]'
})
export class AdminPanelDirective implements OnChanges {
  @Input()
  appAdminPanel: string = '';


  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }


  ngOnChanges() {
console.log(this.appAdminPanel);
      if(this.appAdminPanel!=='Sam') {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
  }

}
