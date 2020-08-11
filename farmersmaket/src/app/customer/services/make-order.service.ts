import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeOrderService { 
  farmerId: string;
  currentCart: any;
  upperCartLimitCount: number;
  lowerCartLimitCount: number;
  constructor() { }
  /* {
    "customer_email": "cust123@gmail.com",
    "farmer_id": "123",
    "total_price": 200, 
     "products":[{
             "product_name": "potato",
             "unit":"kg",
             "unit_price": 12,
             "quantity": 15
         }]
  } */

  getCurrentCart(){
    return this.currentCart;
  }
}
