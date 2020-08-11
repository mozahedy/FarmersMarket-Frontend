import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-home',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerHomeComponent implements OnInit {

  farmerList: any;
  farmerId: any;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
