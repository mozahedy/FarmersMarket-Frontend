import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  addProductUrl: any;
  uploadImageUrl = config.RestUrl + '/upload';
  constructor(private http: HttpClient) { }

  addProduct(product, farmerId): any {
    this.addProductUrl = config.RestUrl + '/farmers/' + farmerId + '/product';
    return this.http.post<any>(this.addProductUrl, product);
  }

  uploadProductImage(productImage): any {
    return this.http.post<any>(this.uploadImageUrl, productImage);
  }
}
