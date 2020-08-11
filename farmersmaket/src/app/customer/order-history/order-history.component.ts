import { Component, OnInit, Input } from '@angular/core';
import { OrdersDataService } from '../services/orders-data.service'
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: any[] = [];
  message = '';
  noOrderMsg ='Specify Search Criteria';
  custEmail: string = 'cust123@gmail.com';
  toDate: string;
  fromDate: string;
  status: string;
  initial: boolean = true;

  ordersQueryForm: FormGroup;

  constructor(private ordersDataService: OrdersDataService, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder) {
    // this.subscription = activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.lowerDate = params['lowerDate'];
    //     this.upperDate = params['upperDate'];
    //     this.status = params['status'];
    //   }
    // );

    this.ordersQueryForm = formBuilder.group({
      'status': ['all'],
      'fromDate': [],
      'toDate': [],
    });

  }

  checkOrders() : boolean{
  
     if(this.orders.length > 0) 
      return true;
    else {
      if(!this.initial)
      this.noOrderMsg ='No Orders Available'
      return false;
    }
       
  }



  onSearch(){
    
    this.initial=false;
    this.toDate = this.ordersQueryForm.value.toDate;
    this.fromDate = this.ordersQueryForm.value.fromDate;
    this.status = this.ordersQueryForm.value.status
    const fetchOrders$ = this.ordersDataService.getOrderHistory(this.status, this.custEmail, this.fromDate, this.toDate)
        
        fetchOrders$
        .subscribe((res: any) => {
          
          
          this.orders = res.data;
          for(let order of this.orders){
            order.order_date = new Date(order.order_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
          }
          this.message = `${this.status} order history`
        })
  }

  ngOnInit(): void {

        // const fetchOrders$ = this.ordersDataService.getOrderHistory(this.status, this.custEmail, this.lowerDate, this.upperDate)
        
        // fetchOrders$
        // .subscribe((res: any) => {
        //   console.log("inside subscribe",res);
          
        //   this.orders = res.data;
        //   for(let order of this.orders){
        //     order.order_date = new Date(order.order_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        //   }
        // })
       


  }

  ngOnDestroy() {
 
  }

}
