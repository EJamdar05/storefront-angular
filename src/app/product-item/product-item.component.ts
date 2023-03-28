import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CurrentViewService } from '../service/current-view.service';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  numbers: number[] = []
  @Input() product: Product;
  @Input('num') num: number = 1;
  totalQuantity: number = 1;

  constructor (private curr: CurrentViewService, private cart: CartServiceService) {
    for(let i = 1 ; i <= 20 ; i++){
      this.numbers.push(i);
    }
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1
    }
  }

  onSelected(value:string):void{
    console.log(value)
    this.totalQuantity = parseInt(value)
  }

  add(product: Product){
    product.quantity = this.totalQuantity
    this.cart.addProduct(product);
    alert('Added item to cart')
    console.log(this.cart.getCart())
  }

  navigate(product: Product){
    this.curr.setProduct(product);
    console.log(this.curr.getProduct())
  }
}
