import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "./model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/produits';

  constructor(private httpClient: HttpClient) { }

  public createProduct(product: Product): Observable<any> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
