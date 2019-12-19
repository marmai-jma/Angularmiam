import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, ProductType } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  starters: Product[]; // undefined pour push ecrire starters : products : Product[] =[]
  mainCourses: Product[];
  desserts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => {
      this.products = data;
      this.starters = this.products.filter(p => p.type === ProductType.Entree);
      this.mainCourses = this.products.filter(p => p.type === ProductType.Plat);
      this.desserts = this.products.filter(p => p.type === ProductType.Dessert);
    });
  }

}
