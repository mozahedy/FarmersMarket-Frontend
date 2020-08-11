import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class FarmerProductService {
  baseUrl = config.RestUrl;
  productUrl = 'http://localhost:3000/api/farmers/5f2f3159d5f2e432f096956b/fetch';
  products: any;
  constructor(private http: HttpClient) { }

  /** GET products from the express server */
  fetchProducts(): any {
    return this.http.get<any>(this.productUrl);
  }
  setProducts(products): void {
    this.products = products;
  }

  getProducts(): any {
    return this.products;
  }
}
