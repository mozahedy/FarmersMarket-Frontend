import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {    
    this.signupForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      type: ['Select User Type', this.typeValidator],
    });
  }

  ngOnInit(): void {}
  
  onSignUp() {
    const typeOfAccount = this.signupForm.value.type;
      const account = {
        name:{
          firstname: this.signupForm.value.firstName,
          lastname: this.signupForm.value.lastName,
        },
        email:this.signupForm.value.email,
        phone: this.signupForm.value.phone,
        password: this.signupForm.value.password,
        address:{
          street: this.signupForm.value.street,
          city: this.signupForm.value.city,
          state: this.signupForm.value.state,
          zip: parseInt(this.signupForm.value.zip)
        }
      };
      // console.log(typeOfAccount,account);  
      this.authenticationService.signUp(account, typeOfAccount);  
      setTimeout(() => {
        const acc = this.authenticationService.getUserAccount()
        if(!acc){
          console.log('not successfull');
          console.log(acc);
        } else{
          console.log('singupsuccessfull');
          this.router.navigate(['/home/signin']);
        }
      }, 1000);
  }

  typeValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Select User Type') {
      return { example: true };
    }
    return null;
  }
}

