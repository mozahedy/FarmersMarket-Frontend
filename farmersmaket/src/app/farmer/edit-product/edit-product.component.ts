import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { EditProductService } from './edit-product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { FarmerProductService } from '../home/farmer-product.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  img: File;
  farmerId: any;
  fd = new FormData();
  products: any;
  singleProduct: any;
  editForm: FormGroup;
  result: string;
  image: string;

  constructor(
    private fb: FormBuilder,
    private editProductService: EditProductService,
    private farmerProductService: FarmerProductService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.farmerId = this.farmerId = this.authenticationService.getUserAccount()._id;
    const id: Observable<string> = this.route.params.pipe(map(p => p.id));
    id.subscribe( id => {
      this.products = this.farmerProductService.getProducts();
      this.singleProduct = this.products.find(pr => pr._id === id);
    });
    if(!this.singleProduct)
      this.router.navigateByUrl('/farmer');

    this.editForm = this.fb.group({
      _id: [this.singleProduct._id],
      name: [this.singleProduct.name, Validators.required],
      category: [ this.singleProduct.category, Validators.required],
      unit: [this.singleProduct.unit, Validators.required],
      unit_price: [this.singleProduct.unit_price, Validators.required],
      inventory: [this.singleProduct.inventory, Validators.required],
      image: [this.singleProduct.image]
    });
    this.image = this.singleProduct.image;
  }

   // Function for handling form when it is submited
   onSubmit(): void {
    this.result = this.editProductService.editProduct(this.editForm.value, this.farmerId)
                  .subscribe(res => {
                    if ( res.status === 'ok' ){
                      this.router.navigateByUrl('/farmers');
                    } else{
                      alert('Error in editing product. Please try again.');
                    }
                  });
  }

  removeProduct(): void {
    this.result = this.editProductService.removeProduct(this.singleProduct, this.farmerId)
                  .subscribe(res => {
                    if ( res.status === 'ok' ){
                      this.router.navigateByUrl('/farmers');
                    } else{
                      alert('Error in removing product. Please try again.');
                    }
                  });
  }


  onFileSelect(event): void {
    this.img = event.target.files[0] as File;
    this.fd.append('image', this.img, this.img.name);
  }
}
