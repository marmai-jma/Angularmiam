import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private baseUrl: string) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products`)
    .pipe(
      map((productArray: any[]) => productArray.map(data => new Product(data)))
    );
  }

  getProduct(productId: number): Observable<Product>{
    return this.http.get(`${this.baseUrl}/products/${productId}`)
    .pipe(
      map((productData: any) => new Product(productData)),
      catchError(this.muteRequestError)
    );
  }

  decrementStock(productId: number, numUnits: number) {}

  // Catch (and rethrow).
  private muteRequestError(err: any): Observable<any> {
    const errorMsg = `${err.statusText} (${err.status})`;
    return of(null);
  }

  getProductBySlug(slug: string): Observable<Product>{
    return this.http.get(`${this.baseUrl}/products?slug=${slug}`)
    .pipe(
      map(results => results[0]), // garde le 1er objet dans la liste des obj renvoyés
      map((productData: any) => new Product(productData)),
      catchError(this.muteRequestError)
    );
  }

}
