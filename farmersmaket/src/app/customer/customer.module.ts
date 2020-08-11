import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './home/customerhome.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderCustomerComponent } from './header-customer/header-customer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [CustomerHomeComponent, OrderHistoryComponent, ShoppingCartComponent, HeaderCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path:'',redirectTo:'farmers', pathMatch:'full'},
      {path:'farmers',component:CustomerHomeComponent},
      {path:'orders',component:OrderHistoryComponent},
      {path:'shoppingcart',component:ShoppingCartComponent},

    ]),
    ReactiveFormsModule,
    FormsModule
  ]  
})
export class CustomerModule { }
