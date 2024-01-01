import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(){
    // let obs=new Observable((observer)=>{
    //   observer.next(Math.random())
    // }) 
    // const subject=new Subject();
    // //Subscriber 1
    // subject.subscribe((data)=>{console.log(data)})

    // //Subscriber 2
    // subject.subscribe((data)=>{console.log(data)})


    // subject.next(Math.random());
    const subject =new Subject();
    const data= ajax('https://randomuser.me/api/')
    subject.subscribe((res)=>{
      console.log(res);
    })
    subject.subscribe((res)=>{
      console.log(res);
    })
    subject.subscribe((res)=>{
      console.log(res);
    })
    data.subscribe(subject);
  }
}
