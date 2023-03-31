import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
    constructor(private cart: CartServiceService) {}

    ngOnInit() {
        this.cart.clearCart();
    }
}
