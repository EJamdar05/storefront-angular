import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CurrentViewService } from '../service/current-view.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  numbers: number[] = []
  @Input() product: Product;
  @Input('num') num: number = 1;

  constructor (private curr: CurrentViewService) {
    for(let i = 1 ; i <= 20 ; i++){
      this.numbers.push(i);
    }
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  add(product: Product){
    alert('Added to cart')
  }

  navigate(product: Product){
    this.curr.setProduct(product);
    console.log(this.curr.getProduct())
  }
}
