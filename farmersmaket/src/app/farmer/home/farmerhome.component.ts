import { Component, OnInit } from '@angular/core';
import { FarmerProductService } from './farmer-product.service';
import { Observable, throwError, of } from 'rxjs';


@Component({
  selector: 'app-homme',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerHomeComponent implements OnInit {
  products: any;
  constructor(private farmerProductService: FarmerProductService) { }

  ngOnInit(): void {
    this.farmerProductService.fetchProducts()
    .subscribe( p => {
      this.products = p.name;
      this.farmerProductService.setProducts(this.products);
    });
  }

}
