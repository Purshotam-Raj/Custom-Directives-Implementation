import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() setColor: string = 'blue';
  // @Input('appBetterHighlight') setColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private eleref : ElementRef,private render : Renderer2) { }
  ngOnInit(){
    // this.render.setStyle(this.eleref.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.eleref.nativeElement,'background-color','blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.setColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.render.setStyle(this.eleref.nativeElement,'background-color','transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
