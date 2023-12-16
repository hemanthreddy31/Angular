import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name:string='Iphone';
  price:number=999;
  color:string='Red'
  product={
    year:2023,
    Model:'15 Pro Max'
  }

  getDiscountedPrice(){
    return 900.003;
  }
}
