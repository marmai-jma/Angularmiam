import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: []
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

ngOnInit() {

}

}
