import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Lifecycle-Hook';

  inputVal:string='';
  toDestroy:boolean=false;
  constructor(){
    console.log('App component constructor called');
   }
   ngAfterViewInit(){
    console.log('ngAfterViewInit Parent Hook called');
   //  console.log('ngAfterViewInit',this.tempPara);
  }
  ngAfterViewChecked(){
   console.log('ngAfterViewChecked Parent Hook Called');
 
  }

   onBtnClicked(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value;
   }

   DestroyComponent(){
    this.toDestroy=!this.toDestroy;
   }

}
