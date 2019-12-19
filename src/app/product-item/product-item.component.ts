import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: []
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  numProducts: number;

  constructor(private cart: CartService) { }

ngOnInit() {
  this.numProducts = 0; // @TOTO: Initialiser avec le panier !!

}

add(event){
  event.stopPropagation();
  this.numProducts++;
  this.cart.addProduct(this.product);

}

remove(event){
  event.stopPropagation();
  this.numProducts--;
  this.cart.removeProduct(this.product);

}
}
