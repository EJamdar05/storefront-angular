import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product', component: ProductPageComponent },
    { path: 'checkout', component: CartComponent },
    { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
