import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmerProductService {
  productUrl = 'http://localhost:3000/api/farmers/5f2f3159d5f2e432f096956b/fetch';
  constructor(private http: HttpClient) { }

/*   getProducts(): any {
    return this.getProductRest;
  } */

  /** GET products from the express server */
  getProducts(): any {
    return this.http.get<any>(this.productUrl);
  }
}
