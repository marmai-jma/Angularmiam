import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  getProducts(): Observable<Product[]> {return EMPTY;  }
  getProduct(productId: number): Observable<Product>{return EMPTY; }
  decrementStock(productId: number, numUnits: number) {}

}
