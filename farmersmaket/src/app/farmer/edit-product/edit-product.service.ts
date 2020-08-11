import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  editProductUrl = config.RestUrl + '/farmers/5f2f3159d5f2e432f096956b/update';
  removeProductUrl = config.RestUrl + '/farmers/5f2f3159d5f2e432f096956b/delete';
  constructor(private http: HttpClient) { }

  editProduct(product): any {
    return this.http.patch<any>(this.editProductUrl, product);
  }

  removeProduct(product): any {
    return this.http.patch<any>(this.removeProductUrl, product);
  }
}
