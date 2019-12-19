import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {}

  getTotalProducts(){
    return this.cart.totalProducts;
  }

}
