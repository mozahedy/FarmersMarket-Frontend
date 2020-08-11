import { Injectable } from '@angular/core';
import { GetFarmersService} from '../services/get-farmers.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MakeOrderService { 
  farmerId: string;
  currentCart: any;
  constructor(private getFarmer:GetFarmersService, private router: Router) { }

  getCurrentCart(){
    this.farmerId = this.getFarmer.getFarmerId();
    let shoppingCart = {
      items:this.currentCart,
      farmer_id: this.farmerId,
    }
    return shoppingCart;
  }
  setCurrentCart(cart){
    this.currentCart = cart;
  
  
  }
 
}
