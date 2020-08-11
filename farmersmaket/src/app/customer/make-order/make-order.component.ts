import { Component, OnInit } from '@angular/core';
import { GetFarmersService } from '../services/get-farmers.service';
import { Router } from '@angular/router';
import { MakeOrderService } from '../services/make-order.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css'],
})
export class MakeOrderComponent implements OnInit {
  cartItems: any = [];
  customer: any;
  farmer: any;
  products: any = [];

  constructor(
    private farmerService: GetFarmersService,
    private orderService: MakeOrderService
  ) {}

  ngOnInit(): void {
    this.products = [
      {
        name: 'apple',
        image: 'assets/images/logo.png',
        unit_price: 10,
        unit: 'kg',
        inventory: 200,
        category: 'fruit',
      },
      {
        name: 'lemon',
        image: 'assets/images/logo.png',
        unit_price: 10,
        unit: 'kg',
        inventory: 200,
        category: 'fruit',
      },
      {
        name: 'cabbage',
        image: 'assets/images/logo.png',
        unit_price: 10,
        unit: 'kg',
        inventory: 200,
        category: 'fruit',
      },
      {
        name: 'orange',
        image: 'assets/images/logo.png',
        unit_price: 10,
        unit: 'kg',
        inventory: 200,
        category: 'fruit',
      },
    ];
  }
  addToCart(productFarmer:any) {
    let item = {};
    if (this.cartItems.length === 0) {
       item = {
        product: {
          name: productFarmer.name,
          unit: productFarmer.unit,
          unit_price: productFarmer.unit_price,
        },
        quantity: 1,
      };

      this.cartItems.push(item);
    } else {      
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].product.name === productFarmer.name) {
          this.cartItems[i].quantity++;

        } else {
           item = {
            product: {
              name: productFarmer.name,
              unit: productFarmer.unit,
              unit_price: productFarmer.unit_price,
            },
            quantity: 1,
          };
          
          this.cartItems.push(item);
          break;
        }
      }
    }
    
    this.orderService.setCurrentCart(this.cartItems);    
  }

}
