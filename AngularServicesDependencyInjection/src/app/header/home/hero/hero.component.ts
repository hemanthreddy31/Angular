import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


    //1.How to PROVIDE Dependency
    // constructor(private subService: SubscribeService){

    // }
  subService=inject(SubscribeService);
  OnSubscribe(){
    //Add User to Database
    //Send Email With Subscritpion Detail
    //Allow User to access the services
   
    this.subService.OnSubscribeClicked('monthly');

  }
}
