import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  OnSubscribe(){
    //Add User to Database
    //Send Email With Subscritpion Detail
    //Allow User to access the services
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('monthly');

  }
}
