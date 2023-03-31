import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Product[] = []
  hasSeen: Set<String> 
  constructor() { 
    this.hasSeen = new Set()
  }

  addProduct(product: Product){
    console.log("The price: "+product.price)
    const existingIndex = this.cart.findIndex(
      (p)=>p.name === product.name
    );

    if(existingIndex !== -1){
      this.cart[existingIndex].quantity+=product.quantity;
      this.cart[existingIndex].totalPrice = product.price * product.quantity;
    }else{
      this.cart.push(product);
    }
  }

  getCart(){
    return this.cart;
  }

  clearCart(){
    this.cart = []
  }


}
