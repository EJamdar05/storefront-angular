import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CurrentViewService } from '../services/current-view.service';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  name: string = '';
  desc: string = '';
  price: number;
  img: string = '';
  numbers: number[] = []
  totalQuantity: number = 1;
  constructor(private curr: CurrentViewService, private cart: CartServiceService){
    for(let i = 1 ; i <= 20 ; i++ ){
      this.numbers.push(i);
    }
    this.name = this.curr.getProduct().name;
    this.desc = this.curr.getProduct().description;
    this.img = this.curr.getProduct().url;
    this.price = this.curr.getProduct().price;
  }

  onSelected(value:string):void{
    console.log(value)
    this.totalQuantity = parseInt(value)
  }

  add(){
    let product = this.curr.getProduct();
    product.quantity = this.totalQuantity
    product.totalPrice = this.totalQuantity * this.price
    this.cart.addProduct(product);
    console.log(this.cart.getCart())
    alert("Item has been added to cart")
  }





}
