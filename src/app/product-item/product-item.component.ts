import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  numbers: number[] = []
  @Input() product: Product;
  constructor () {
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
}
