import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[] = []
  total: number = 0;
  address: string = ''
  cardNumber: string = ''
  name: string = ''
  constructor(private cartServ: CartServiceService, private router: Router){}

  ngOnInit(){
    this.cart = this.cartServ.getCart();
    console.log("Cart: "+this.cart[0])
    this.getTotal()
    
    
  }

  checkout(){
    this.router.navigate(['confirmation'])
  }

  onSubmit(){

  }

  update(event: any){
    this.total = 0;
    this.getTotal()
  }

  getTotal(){
    for(let items of this.cart){
      if(items.totalPrice != items.price * items.quantity){
        items.totalPrice = items.price * items.quantity;
      }
      if(items.quantity == 0){
        const index = this.cart.indexOf(items);
        if(index > -1) this.cart.splice(index, 1);
      }
      this.total+=items.totalPrice
    }
  }

}
