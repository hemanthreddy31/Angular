import { Component,Input,OnChanges, SimpleChanges,OnInit,ElementRef,ViewChild }from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit{

  title:string = 'Demo Component';
  @Input() message:string[];
  @ViewChild('temp') tempPara: ElementRef;

   constructor(){
    console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
   }
   ngOnChanges(changes:SimpleChanges){
    console.log(' ng onchanges hook called ');
    // console.log(changes);
   }
   ngOnInit(){
    //perfect place to called any initilazation logic 
    //because it gets called only once and during first change detection cycle after the inputproperites are initialized.

     console.log('ngOnInit hook called');
   }
}