import { Component, OnInit, Input } from '@angular/core';
import { OrdersDataService } from '../services/orders-data.service'
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: any[] = [];
  subscription: Subscription;
  custEmail: string = 'cust123@gmail.com';
  lowerDate: string = "2019-12-15";
  upperDate: string = "2020-09-28";
  status: string = 'pending';

  constructor(private ordersDataService: OrdersDataService, private activatedRoute: ActivatedRoute) {
    // this.subscription = activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.lowerDate = params['lowerDate'];
    //     this.upperDate = params['upperDate'];
    //     this.status = params['status'];
    //   }
    // );
  }

  checkOrders() : boolean{
  
     if(this.orders.length > 0) 
      return true;
    else 
      return false; 
  }

  //this will submit request for orders. code snippet 
  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("name", this.form.get('name').value);
  //   formData.append("avatar", this.form.get('avatar').value);

  //   this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }

  ngOnInit(): void {

        const fetchOrders$ = this.ordersDataService.getOrderHistory(this.status, this.custEmail, this.lowerDate, this.upperDate)
        
        fetchOrders$
        .subscribe((res: any) => {
          console.log("inside subscribe",res);
          
          this.orders = res.data;
          for(let order of this.orders){
            order.order_date = new Date(order.order_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
          }
        })
       


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
