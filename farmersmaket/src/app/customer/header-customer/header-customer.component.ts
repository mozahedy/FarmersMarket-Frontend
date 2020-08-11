import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css'],
})
export class HeaderCustomerComponent implements OnInit {
  farmer: string = 'farmer';
  orders: string = 'orders';
  shoppingcart: string = 'shoppingcart';
  constructor() {}

  ngOnInit(): void {}
}
