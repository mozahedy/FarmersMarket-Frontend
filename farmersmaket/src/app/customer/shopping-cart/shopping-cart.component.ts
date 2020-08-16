import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from '../services/orders-data.service'
import { AuthenticationService } from '../../authentication.service'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { MakeOrderService } from '../services/make-order.service'
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: any;
  customer: any;
  totalPrice: any;
  checkoutForm: FormGroup;
  createOrderSubscription: Subscription;

  constructor(private router: Router, private ordersDataService: OrdersDataService, private makeOrderService: MakeOrderService, private formBuilder: FormBuilder, private auth: AuthenticationService) {

    this.shoppingCart = this.makeOrderService.getCurrentCart();
    this.customer = this.auth.getUserAccount();
    let fullname = this.customer.name.firstname + ' ' + this.customer.name.lastname;
    let email = this.customer.email;
    let street = this.customer.address.street;
    let city = this.customer.address.city;
    let state = this.customer.address.state;
    let zip = this.customer.address.zip;

    this.totalPrice = 0;

    for (let item of this.shoppingCart.items) {

      this.totalPrice = this.totalPrice + (item.product.unit_price * item.quantity);
    }

    this.checkoutForm = formBuilder.group(
      {
        'fullname': [fullname],
        'email': [email],
        'street': [street],
        'city': [city],
        'state': [state],
        'zip': [zip],
        'cardname': [],
        'cardnumber': [],
        'expmonth': [],
        'expyear': [],
        'cvv': []
      }
    )
  }

  onSubmit() {
    
    this.createOrderSubscription = this.ordersDataService.createOrder(this.shoppingCart, this.customer.email).subscribe((res: any) => {
      this.router.navigate(['customers'])
    })
  }

  ngOnInit(): void {

    
  }

  ngOnDestroy(): void {
    this.createOrderSubscription.unsubscribe();
  }

}
