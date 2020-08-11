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
  productUrl: any;
  products: any;
  constructor(private http: HttpClient) { }

  /** GET products from the express server */
  fetchProducts(farmerId): any {
    this.productUrl = this.baseUrl + '/farmers/' + farmerId + '/fetch';
    return this.http.get<any>(this.productUrl);
  }
  setProducts(products): void {
    this.products = products;
  }

  getProducts(): any {
    return this.products;
  }
}
