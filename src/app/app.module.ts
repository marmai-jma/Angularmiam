import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CartIconComponent,
    ProductListComponent,
    ProductItemComponent,
    OrderInfoComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:'BACKEND_URL', useValue: 'http://localhost:3004'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
