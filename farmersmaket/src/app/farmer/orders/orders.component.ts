import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

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
    message = '';
    message1 = '';
    orders: any[] = [];
    status: string;
    show : boolean =false;
    ordersQueryForm: FormGroup;
    public fb:FormBuilder;
    public orderProducts :any;

  constructor(private orderService: OrderService,private formBuilder: FormBuilder) {
    
    this.ordersQueryForm = formBuilder.group({
      'status': ['all'],
    });

   }

  ngOnInit(): void {
      this.orderService.getOrders()
       .subscribe(orders =>{
        this.orders=orders.data;  
        
       })   

      }
//update for ready for pick up
      submitUpdateReady(orderId,email){
        let order_status = "ready";
       let pickup_date = "2020-07-15";
       console.log(email);

      this.orderService.readyOrder(orderId, { status: order_status, pickupDateTime: pickup_date,customerEmail:email }).subscribe(res => {
           console.log(res);
      })
    
      }

      //update for ready for pick up
      submitUpdateCompleted(orderId){
        let order_status = "completed";
        

      this.orderService.completeOrder(orderId,{ status: order_status}).subscribe(res => {
        res.status(200).json({
          status: "ok",
          messege1: "Order Updated",
          
        });
      })
    
      }

      onSearch(){
       
        this.status = this.ordersQueryForm.value.status
        console.log(this.status);
        const fetchOrders$ = this.orderService.getFilteredHistory(this.status).subscribe((res: any) => {  
              this.orders = res.data;
              console.log(this.orders);
              this.message = `${this.status} order List`
              
            })
      }
}
