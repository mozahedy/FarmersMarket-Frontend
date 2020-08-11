import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable,throwError, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {AuthenticationService} from '../../authentication.service';



@Injectable({
  providedIn: 'root'
})


export class OrderService {

  orderListUrl='http://localhost:3000/api/orders/pending/farmers/'
  farmer = this.authService.getUserAccount();
  updateApi='http://localhost:3000/api/orders/'
  constructor(private http: HttpClient,private authService: AuthenticationService) { }

  getOrders() :any {
      return this.http.get<any>(this.orderListUrl+this.farmer._id);
  }
 //update ready orders 
  readyOrder(orderId,data) {
    console.log(data.customerEmail);
     return this.http.patch<any>(this.updateApi+orderId,data);
    
  }

  completeOrder(orderId,data) {
    console.log(data);
     return this.http.patch<any>(this.updateApi+orderId,data);
    
  }
 //get filtered ordered list
  getFilteredHistory(status: string) {
    console.log(status)
    return this.http.get<any>(this.updateApi+status+'/farmers/'+this.farmer._id);


  }
}
