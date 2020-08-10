import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerHomeComponent } from './home/farmerhome.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderFarmerComponent } from './header-farmer/header-farmer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FarmerHomeComponent, OrdersComponent, HeaderFarmerComponent],
  imports: [CommonModule,
   RouterModule.forChild([
     {path:'',component:FarmerHomeComponent},
     {path:'orders',component:OrdersComponent},
   ])]
})
export class FarmerModule {}
