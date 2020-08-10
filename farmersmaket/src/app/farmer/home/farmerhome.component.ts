import { Component, OnInit } from '@angular/core';
import { FarmerProductService } from './farmer-product.service';
import { Observable, throwError, of } from 'rxjs';

import * as _ from 'lodash';

interface Product {
  _id: string;
  name: string;
  category: string;
  unit: string;
  unit_price: number;
  inventory: number;
  image: number;
}

@Component({
  selector: 'app-homme',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerHomeComponent implements OnInit {
  products: any;
  constructor(private farmerProductService: FarmerProductService) { }

  ngOnInit(): void {
     this.farmerProductService.getProducts()
     .subscribe( p => this.products = p.name);
  }

}
