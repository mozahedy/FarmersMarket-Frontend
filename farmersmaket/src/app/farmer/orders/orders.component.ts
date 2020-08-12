import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError, of, Subscription } from 'rxjs';
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
  form: FormGroup;
  message = '';
  message1 = '';
  orders: any[] = [];
  status: string;
  show: boolean = false;
  ordersQueryForm: FormGroup;
  public fb: FormBuilder;
  public orderProducts: any;

  getOrdersSubscription: Subscription;
  readyOrderSubscription: Subscription;
  completeOrderSubscription: Subscription;
  filteredHistorySubscription: Subscription;


  constructor(private orderService: OrderService, private formBuilder: FormBuilder) {

    this.ordersQueryForm = formBuilder.group({
      'status': ['all'],
    });

  }

  ngOnInit(): void {
    this.getOrdersSubscription = this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders.data;

      })

  }
  //update for ready for pick up
  submitUpdateReady(orderId, email) {
    let order_status = "ready";
    var currDate = new Date();
    let pickup_date = "2020-07-15";

    this.readyOrderSubscription = this.orderService.readyOrder(orderId, { status: order_status, pickupDateTime: pickup_date, customerEmail: email }).subscribe(res => {

    })

  }

  //update for ready for pick up
  submitUpdateCompleted(orderId) {
    let order_status = "completed";


    this.completeOrderSubscription = this.orderService.completeOrder(orderId, { status: order_status }).subscribe(res => {
      res.status(200).json({
        status: "ok",
        messege1: "Order Updated",

      });
    })

  }

  onSearch() {

    this.status = this.ordersQueryForm.value.status

    this.filteredHistorySubscription = this.orderService.getFilteredHistory(this.status).subscribe((res: any) => {
      this.orders = res.data;

      this.message = `${this.status} order List`

    })
  }

  ngOnDestroy(): void {

    this.getOrdersSubscription.unsubscribe;
    this.readyOrderSubscription.unsubscribe;
    this.completeOrderSubscription.unsubscribe;
    this.filteredHistorySubscription.unsubscribe;
    
  }
}
