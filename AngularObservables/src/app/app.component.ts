import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularObservables';
  data: any[]=[];


  myObservable = new Observable((observer)=>{
      observer.next([1,2,3,4,5]);
  });
}
