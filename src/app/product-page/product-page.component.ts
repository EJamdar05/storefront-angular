import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CurrentViewService } from '../service/current-view.service';
import { CartServiceService } from '../services/cart-service.service';
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
  totalQuantity: number = 0;
  constructor(private curr: CurrentViewService, private cart: CartServiceService){
    for(let i = 1 ; i <= 20 ; i++ ){
      this.numbers.push(i);
    }
  }

  onSelected(value:string):void{
    console.log(value)
    this.totalQuantity = parseInt(value)
  }

  ngOnInit(){
    this.name = this.curr.getProduct().name;
    this.desc = this.curr.getProduct().description;
    this.img = this.curr.getProduct().url;
    this.price = this.curr.getProduct().price;
  }

  add(){
    const product = this.curr.getProduct();
    product.quantity = this.totalQuantity
    this.cart.addProduct(product);
    alert('Added item to cart')
    console.log(this.cart.getCart())
  }





}
