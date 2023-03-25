import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []
  constructor(private prodServ: ProductServiceService){}

  ngOnInit():void{
    this.prodServ.getItems().subscribe(res=>{
      console.log("poo")
      console.log("Res: "+res)
      this.products = res;
    })
  }
}
