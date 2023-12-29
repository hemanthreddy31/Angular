import { Component } from '@angular/core';
import { Observable,from,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularObservables';
  data: any[] = [];

  array1=[1,3,5,7,9];
  array2=['A','B','C','D'];

  //Observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(
  //   //     new Error('Something Went wrong . Please try again later')
  //   //   );
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete()
  //   }, 6000);
  // });

  //myObservable=of(this.array1,this.array2,20,30,'Hello',true);
  promiseData = new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50]);
  })
  myObservable=from(this.promiseData);

  GetAsyncData() {
    //Observer
    //next, error , complete
    // this.myObservable.subscribe(
    //   (val: any) => {
    //     this.data.push(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   ()=>{
    //     alert('All the data is streamed');
    //   }
    // );


    this.myObservable.subscribe({
      next:(val:any)=>{
        this.data.push(val);
        console.log(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed!')
      }
    })
  }
}
