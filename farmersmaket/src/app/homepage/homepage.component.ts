import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,FormControl,} from '@angular/forms'
import {AuthenticationService} from '../authentication.service'
import { Observable } from "rxjs";

@Component({
  selector: 'app-hompage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  signinForm: FormGroup;
  error:string = null;

  constructor(private formBuilder:FormBuilder, private authenticationService: AuthenticationService) {
    this.signinForm = formBuilder.group({
      email:["", [Validators.required,Validators.email]],
      password: ["", Validators.required],
      type: [""]
    });
    console.log("signup page loaded")
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const account = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    }
    const typeOfAccount = this.signinForm.value.type;
    console.log(account,typeOfAccount);
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promise;
  }

}
