import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersDataService {

  private orders: string;


  constructor(public http: HttpClient) {

  }

  getOrderHistory() {
    if (!this.orders) {
      this.http.get('https://randomuser.me/api/?results=10')
        .subscribe((res: any) => {
          this.orders = JSON.stringify(res.results);

        })
    }
    

  }


  getCachedData() {
    return of(JSON.parse(this.localStorage));
  }
}
