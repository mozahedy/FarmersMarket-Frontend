import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { AddProductService } from './add-product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  img: File;
  farmerId: any;
  fd = new FormData();
  profileForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    unit: ['', Validators.required],
    unit_price: ['', Validators.required],
    inventory: ['', Validators.required],
    image: [ File, Validators.required]
  });
  result: string;
  constructor(
    private fb: FormBuilder,
    private addProductService: AddProductService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }
 // Function for handling form when it is submited
  onSubmit(): void {
    this.farmerId = this.farmerId = this.authenticationService.getUserAccount()._id;
     this.result = this.addProductService.uploadProductImage(this.fd)
                  .subscribe(res => {
                     if ( res.status === 'ok' ) {
                      this.profileForm.controls['image'].setValue(res.image);
                      this.addProductService.addProduct(this.profileForm.value, this.authenticationService.getUserAccount()._id)
                        .subscribe(response => {
                          if ( res.status === 'ok' ){
                            this.router.navigateByUrl('/farmers');
                          } else {
                            alert('Error in adding product. Please try again.');
                          }
                        });
                    } else {
                      alert('Error in adding product image. Please try again.');
                   } 
                  }); 
  }

  onFileSelect(event): void {
    this.img = event.target.files[0] as File;
    this.fd.append('image', this.img, this.img.name);
  }

}
