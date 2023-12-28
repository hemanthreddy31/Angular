import { Directive,ElementRef ,Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer:Renderer2) {

   }

   @Input() set style(styles:object){
      let styleEntries = Object.entries(styles);
      //console.log(styleEntries);
      for(let item of styleEntries){
        let[cssStyle,value]=item;
       // console.log(cssStyle,value);
       this.renderer.setStyle(this.element.nativeElement,cssStyle,value);
      }
   }

}
