import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: []
})
export class CartDetailComponent implements OnInit {
  productInfos: any;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.productInfos = this.cart.getAllProducts();
  }

}
