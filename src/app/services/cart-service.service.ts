import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Product[] = []
  constructor() { }

  addProduct(product: Product){
    this.cart.push(product);
  }

  getCart(){
    return this.cart;
  }


}
