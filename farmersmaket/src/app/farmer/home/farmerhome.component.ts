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
  farmerId: any;
  constructor(
    private farmerProductService: FarmerProductService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.farmerId = this.authenticationService.getUserAccount()._id;
    this.farmerProductService.fetchProducts(this.farmerId)
    .subscribe( p => {
      this.products = p.name;
      this.farmerProductService.setProducts(this.products);
    });
  }

}
