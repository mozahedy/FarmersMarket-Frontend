import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFarmersService {
 listOfFarmers: any

  constructor() { }


  getListOfFarmers(){
    return this.listOfFarmers;
  }
}
