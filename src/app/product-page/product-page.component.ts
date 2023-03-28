import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CurrentViewService } from '../service/current-view.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  name: string = '';
  desc: string = '';
  price: number = 0;
  img: string = '';
  numbers: number[] = []
  constructor(private curr: CurrentViewService){
    for(let i = 1 ; i <= 20 ; i++ ){
      this.numbers.push(i);
    }
  }

  ngOnInit(){
    this.name = this.curr.getProduct().name;
    this.desc = this.curr.getProduct().description;
    this.img = this.curr.getProduct().url;
    this.price = this.curr.getProduct().price;

  }



}
