import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[] = []

  constructor(private cartServ: CartServiceService){}

  ngOnInit(){
    this.cart = this.cartServ.getCart();
  }

}
