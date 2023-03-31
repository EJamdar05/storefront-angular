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
  catalog: Product[] = []
  nums: number[] = []
  constructor(private prodServ: ProductServiceService){}

  ngOnInit():void{
    this.prodServ.getItems().subscribe(res=>{
      this.products = res;
      this.catalog = res;
    })

    for(let prod of this.products){
      this.nums.push(prod.price);
    }

    this.prodServ.setPriceArray(this.nums)
  }
}

