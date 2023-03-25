import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dummy } from 'src/assets/dummy';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Product[]>{
    console.log("work")
    console.log(this.http.get<Product[]>('src/assets/data.json'))
    return this.http.get<Product[]>('assets/data.json');
  }
}
