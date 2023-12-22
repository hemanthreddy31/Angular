import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Lifecycle-Hook';

  inputVal:string='';
  constructor(){
    console.log('App component constructor called');
   }


   onBtnClicked(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value;
   }
}
