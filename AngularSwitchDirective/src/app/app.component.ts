import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularSwitchDirective';

  tab:string='';

  onInfoClicked(){
    this.tab='info';
  }
  onServiceClicked(){
    this.tab='services';
  }
  onPrivacyClicked(){
    this.tab='privacy';
  }
  onUserClicked(){
    this.tab='user';
  }
}
