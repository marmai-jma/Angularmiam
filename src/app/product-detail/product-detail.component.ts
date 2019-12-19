import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private ps: ProductService) { }

  ngOnInit() {
    const slug = (this.route.snapshot.paramMap.get('slug'));
    this.ps.getProductBySlug(slug)
      .subscribe(product => this.product = product);
  }

}
