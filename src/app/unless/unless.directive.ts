import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if(!condition)
    {
      this.vcon.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcon.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcon: ViewContainerRef) { }

}
