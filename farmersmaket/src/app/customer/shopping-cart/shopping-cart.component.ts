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

  constructor(private ordersDataService: OrdersDataService, private makeOrderService: MakeOrderService, private formBuilder: FormBuilder, private auth: AuthenticationService) {

    this.checkoutForm = formBuilder.group(
      {
        'fullname': [],
        'email': [],
        'street': [],
        'city': [],
        'state': [],
        'zip': [],
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

    })
  }

  ngOnInit(): void {

    this.shoppingCart = this.makeOrderService.getCurrentCart();
    this.customer = this.auth.getUserAccount();
    this.checkoutForm.value.fullname = this.customer.name.firstname + ' ' + this.customer.name.lastname;
    this.checkoutForm.value.email = this.customer.email;
    this.checkoutForm.value.street = this.customer.address.street;
    this.checkoutForm.value.city = this.customer.address.city;
    this.checkoutForm.value.state = this.customer.address.state;
    this.checkoutForm.value.zip = this.customer.address.zip;

    this.totalPrice = 0;

    for (let item of this.shoppingCart.items) {

      this.totalPrice = this.totalPrice + (item.product.unit_price * item.quantity);
    }
  }

  ngOnDestroy(): void {
    this.createOrderSubscription.unsubscribe();
  }

}
