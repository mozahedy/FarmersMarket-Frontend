import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable,throwError, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class OrderService {
  orderListUrl='http://localhost:3000/api/farmers/pending/farmers/5f2f3159d5f2e432f096956b'
  constructor(private http: HttpClient) { }

  getOrders() :any {
      return this.http.get<any>(this.orderListUrl)
  }
}
