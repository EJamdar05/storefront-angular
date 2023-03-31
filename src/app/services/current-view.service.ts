import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root',
})
export class CurrentViewService {
    private prod!: Product;
    constructor() {}

    setProduct(item: Product) {
        this.prod = item;
    }

    getProduct() {
        return this.prod;
    }
}
