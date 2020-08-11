import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
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


  

}
