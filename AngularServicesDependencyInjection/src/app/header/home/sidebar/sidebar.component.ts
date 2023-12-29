import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  OnSubscribe(){
    //Add User to Database
    //Send Email With Subscritpion Detail
    //Allow User to access the services
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('monthly');

  }
}
