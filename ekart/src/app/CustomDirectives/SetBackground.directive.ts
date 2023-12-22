import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
    // private element:ElementRef;
    //private renderer:Renderer2;
    constructor(private element:ElementRef, private renderer:Renderer2){
        //this.element=element;
        //this.renderer=renderer;
    }
    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor='green';
        // this.element.nativeElement.style.color='white';
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','green');
        this.renderer.setStyle(this.element.nativeElement,'color','white');
       // this.renderer.setAttribute(this.element.nativeElement, 'title','This is Example title');
    }
}