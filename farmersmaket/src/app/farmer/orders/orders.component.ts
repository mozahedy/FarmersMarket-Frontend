import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
//this is my module
   pending: [];;
   ready: [];
   complete: [];
    form:FormGroup;
    public fb:FormBuilder;
   public orderProducts :any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
      this.orderService.getOrders()
       .subscribe(orders =>{
        this.orderProducts=orders.data;
        console.log(this.orderProducts);
       })   

      }
//update 
      submitUpdateReady(orderId,email){
        let order_status = "ready";
       let pickup_date = "2020-07-15";
       console.log(email);

      this.orderService.readyOrder(orderId, { status: order_status, pickupDateTime: pickup_date,customerEmail:email }).subscribe(res => {
           console.log(res);
      })
    
      }
}
