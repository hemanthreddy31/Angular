import { 
  Component,
  Input,
  OnChanges,
   SimpleChanges,
   OnInit,
   ElementRef,
   ViewChild ,
   DoCheck,
    AfterContentInit,
     ContentChild, 
     AfterContentChecked,
     AfterViewInit,
     AfterViewChecked,
     OnDestroy
    }from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  title:string = 'Demo Component';
  @Input() message:string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent:ElementRef;

   constructor(){
    //console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
   }
   ngOnChanges(changes:SimpleChanges){
    //console.log(' ng onchanges hook called ');
    // console.log(changes);
   }
   ngOnInit(){
    //perfect place to called any initilazation logic 
    //because it gets called only once and during first change detection cycle after the inputproperites are initialized.

    //console.log('ngOnInit hook called');
   }


   ngDoCheck(){
    //console.log('ngDoCheck  hook called');
    //console.log('In ngDoCheck', this.paraContent);
   }


   ngAfterContentInit(){
      //console.log('ngAfterContentInit Hook called');
      //console.log('In ngAfterContentInit', this.paraContent.nativeElement);
   }


   ngAfterContentChecked(){
    // console.log('ngAfterContentChecked Hook called');
    // console.log('In ngAfterContentInit', this.paraContent.nativeElement);
    // console.log('In ngAfterContentchecked',this.tempPara);
   }

   ngAfterViewInit(){
     console.log('ngAfterViewInit Hook called');
    //  console.log('ngAfterViewInit',this.tempPara);
   }
   ngAfterViewChecked(){
    console.log('ngAfterViewChecked Hook Called');
    console.log(this.tempPara.nativeElement.textContent);
   }

   ngOnDestroy(){
    console.log('ng on Destroy Hook Called');
   }
}