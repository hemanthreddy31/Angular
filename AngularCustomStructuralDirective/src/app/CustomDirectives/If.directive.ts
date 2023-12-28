import  {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector:'[appIf]'
})
export class IfDirective{
    // 1. Get access to html element
    // 2. Get access to DOM Element which we want to add/remove
    constructor(private view: TemplateRef<any>, private template:ViewContainerRef){

    }
    @Input() set appIf(condition:boolean){
        if(condition){
            this.template.createEmbeddedView(this.view);
        }
        else{
            this.template.clear();
        }
    }
}