import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFarmersService {
 listOfFarmers: any;
 selectedFarmer: any;
  constructor() { }


  getListOfFarmers(){
    return this.listOfFarmers;
  }
}
