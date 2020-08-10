import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable,throwError, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class OrderService {
  orderListUrl='http://localhost:3000/api/orders/pending/farmers/1'

  updateApi='http://localhost:3000/api/orders/'
  constructor(private http: HttpClient) { }

  getOrders() :any {
      return this.http.get<any>(this.orderListUrl);
  }
 //update ready orders 
  readyOrder(orderId,data) {
    console.log(data.customerEmail);
     return this.http.patch<any>(this.updateApi+orderId,data);
    
  }
}
