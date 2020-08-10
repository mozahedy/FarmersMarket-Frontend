import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
import { config } from '../../config/config';

@Injectable({ providedIn: 'root' })
export class OrdersDataService {


  constructor(public http: HttpClient) {

  }

  getOrderHistory(status: string, custEmail: string, lowerDate: string, upperDate: string) {
    const body: any = {
      "dateLower": lowerDate,
      "dateUpper": upperDate
    }
    console.log(custEmail)
    return this.http.post(config.RestUrl + `/orders/${status}/customers/${custEmail}`, body)
      
     
  }


}
