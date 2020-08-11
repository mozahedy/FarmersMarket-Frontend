import { Component, OnInit } from '@angular/core';
import {GetFarmersService} from '../services/get-farmers.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-home',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerHomeComponent implements OnInit {

  farmersList: any[];
  fetchFarmers$: any;
  farmerId: any;

  constructor(private getFarmersService: GetFarmersService, private router: Router) { 

  }

  selectFarmer(e){

    this. getFarmersService.putFarmerId(e);
    this.router.navigate(['/customers/shopping/buy'])
  }

  ngOnInit(): void {
    this.fetchFarmers$ = this.getFarmersService.fetchFarmers();
    this.fetchFarmers$.subscribe((res: any) => { 
      this.farmersList = res.data;

    })
        
  }

}
