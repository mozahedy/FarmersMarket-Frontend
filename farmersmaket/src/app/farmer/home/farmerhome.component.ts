import { Component, OnInit } from '@angular/core';
import { FarmerProductService } from './farmer-product.service';
import { Observable, throwError, of } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-homme',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerHomeComponent implements OnInit {
  products: any;
  farmer: any;
  constructor(
    private farmerProductService: FarmerProductService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.farmer = this.authenticationService.getUserAccount();
    console.log(this.farmer);
    this.farmerProductService.fetchProducts()
    .subscribe( p => {
      this.products = p.name;
      this.farmerProductService.setProducts(this.products);
    });
  }

}
