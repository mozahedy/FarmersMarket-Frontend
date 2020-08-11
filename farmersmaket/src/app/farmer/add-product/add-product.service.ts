import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  addProductUrl = config.RestUrl + '/farmers/5f2f3159d5f2e432f096956b/addproduct';
  uploadImageUrl = config.RestUrl + '/upload';
  constructor(private http: HttpClient) { }

  addProduct(product): any {
    return this.http.post<any>(this.addProductUrl, product);
  }

  uploadProductImage(productImage): any {
    return this.http.post<any>(this.uploadImageUrl, productImage);
  }
}
