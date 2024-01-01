import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable,ReplaySubject,Subject } from 'rxjs';
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
    // const subject=new ReplaySubject();
    // //const subject=new BehaviorSubject<number>(100);
     
    // subject.next(100);
    // subject.next(200);
    // subject.next(300);


    // //Subscriber 1
    // subject.subscribe((data)=>{console.log(data)})

    // //Subscriber 2
    // subject.subscribe((data)=>{console.log(data)})


    // subject.next(2020);


    //AJAX CALL
    // const subject =new Subject();
    // const data= ajax('https://randomuser.me/api/')
    // subject.subscribe((res)=>{
    //   console.log(res);
    // })
    // subject.subscribe((res)=>{
    //   console.log(res);
    // })
    // subject.subscribe((res)=>{
    //   console.log(res);
    // })
    // data.subscribe(subject);


    //ASYNC Subject
    // const asyncSubject=new AsyncSubject();
    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // asyncSubject.complete();
    // asyncSubject.subscribe(data=>console.log(`Subscriber 1: ${data}`));
    // asyncSubject.next(400);
    // asyncSubject.complete();


   //Difference between Promise and Observable
   const promise=new Promise((resolve, reject)=>{
    console.log('promises called');
    resolve(100);
    resolve(200);
    resolve(300);
   })
   promise.then((data)=>{
    console.log(data);
   })
   const obs=new Observable((sub)=>{
    console.log('observable called');
    sub.next(100);
    sub.next(200);
    sub.next(300);
   })
   obs.subscribe(data=>console.log(data));


  }
}
