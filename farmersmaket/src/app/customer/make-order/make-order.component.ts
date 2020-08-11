import { Component, OnInit } from '@angular/core';
import {GetFarmersService} from '../services/get-farmers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  private cartItems: any;
  private customer : any;

  constructor(private farmerService: GetFarmersService, private router: Router) { }

  ngOnInit(): void {
  }



}
