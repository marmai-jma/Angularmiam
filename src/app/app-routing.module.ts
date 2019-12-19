import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'liste', pathMatch: 'full'},
  {path: 'liste', component: ProductListComponent},
  {path: 'produit/:slug', component: ProductDetailComponent},
  {path: 'panier', component: CartDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
