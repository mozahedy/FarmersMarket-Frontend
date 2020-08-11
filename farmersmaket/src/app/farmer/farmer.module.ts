import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FarmerHomeComponent } from './home/farmerhome.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderFarmerComponent } from './header-farmer/header-farmer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FarmerHomeComponent, OrdersComponent, HeaderFarmerComponent, AddProductComponent, EditProductComponent],
  imports: [
   CommonModule,
   ReactiveFormsModule,
   RouterModule.forChild([
     {path : '', component : FarmerHomeComponent},
     {path : 'product/add' , component : AddProductComponent},
     {path : 'product/:id/edit' , component : EditProductComponent},
     {path : 'orders', component : OrdersComponent},
   ])]
})
export class FarmerModule {}
