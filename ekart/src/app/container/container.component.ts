import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name:string='Iphone';
  price:number=999;
  color:string='Red'
  product={
    year:2023,
    Model:'15 Pro Max',
    pImage:'./../../assets/iphone.jpg',
    instock:10

  }
  count=0;
  
  onNameChange(event:any){
    console.log(event.target.value);
  }
  
  getDiscountedPrice(){
    return 900.003;
  }
  Increment(){
    this.count++;
    console.log(this.count);
  }
  Decrement(){
    this.count--;
    console.log(this.count);
  }
}
