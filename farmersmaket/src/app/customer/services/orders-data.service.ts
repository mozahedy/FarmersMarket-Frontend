import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { config } from '../../config/config';

@Injectable({ providedIn: 'root' })
export class OrdersDataService {
  

  constructor(public http: HttpClient) {

  }

  getOrderHistory(status: string, custEmail: string, fromDate: string, toDate: string) {
    const body: any = {
      "dateLower": fromDate,
      "dateUpper": toDate
    }

    return this.http.post(config.RestUrl + `/orders/${status}/customers/${custEmail}`, body)


  }

  createOrder(shoppingCart: any, custEmail: string): Observable<any> {

    let newOrder: any = {};
   

    let items: any[] = shoppingCart.items;

    newOrder.customer_email = custEmail;
    newOrder.farmer_id = shoppingCart.farmerId;
    newOrder.total = 0;
    newOrder.products = [];

    for (let item of items) {
      let product: any;
      product = item.product;
      product.quantity = item.quantity;
      newOrder.products.push(product)
      newOrder.total = newOrder.total + (product.unit_price * product.quantity);
    }
 
    return this.http.post(config.RestUrl + `/orders/`, newOrder)

  }



}
