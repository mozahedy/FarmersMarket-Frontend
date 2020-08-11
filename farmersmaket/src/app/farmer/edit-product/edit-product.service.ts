import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  editProductUrl: any;
  removeProductUrl: any;
  constructor(private http: HttpClient) { }

  editProduct(product, farmerId): any {
    this.editProductUrl = config.RestUrl + '/farmers/' + farmerId + '/update';
    return this.http.patch<any>(this.editProductUrl, product);
  }

  removeProduct(product, farmerId): any {
    this.removeProductUrl = config.RestUrl + '/farmers/' + farmerId + '/delete';
    return this.http.patch<any>(this.removeProductUrl, product);
  }
}
