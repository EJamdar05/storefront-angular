import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class ProductServiceService {
    prices: number[] = [];
    constructor(private http: HttpClient) {}

    getItems(): Observable<Product[]> {
        console.log(this.http.get<Product[]>('src/assets/data.json'));
        return this.http.get<Product[]>('assets/data.json');
    }

    setPriceArray(price: number[]) {
        this.prices = price;
    }

    getPriceArray() {
        return this.prices;
    }
}
