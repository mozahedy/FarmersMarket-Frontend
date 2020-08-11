import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Observable, throwError, of } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
//this is my module
   public orderProducts :any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
      this.orderService.getOrders()
       .subscribe(orders =>{
        this.orderProducts=orders.data;
        console.log(this.orderProducts);
       })   

      }
}
