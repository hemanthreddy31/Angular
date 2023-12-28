import { Directive, ElementRef, OnInit, Renderer2 ,Input} from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
    // private element:ElementRef;
    //private renderer:Renderer2;

//    @Input('setBackground') backColor: string='#36454F';
//    @Input() textColor: string='White';
   @Input('setBackground') changeTextAndBackColor: {backColor: string, textColor: string};
    constructor(private element:ElementRef, private renderer:Renderer2){
        //this.element=element;
        //this.renderer=renderer;
    }
    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor='green';
        // this.element.nativeElement.style.color='white';
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextAndBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextAndBackColor.textColor);
       // this.renderer.setAttribute(this.element.nativeElement, 'title','This is Example title');
    }
}