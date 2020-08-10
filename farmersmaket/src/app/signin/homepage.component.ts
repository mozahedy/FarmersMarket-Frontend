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
  selector: 'app-hompage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  signinForm: FormGroup;
  error: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.signinForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      type: ['Select User Type', this.typeValidator],
    });    
  }

  ngOnInit(): void {}

  onSubmit() {
    const account = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password,
    };
    const typeOfAccount = this.signinForm.value.type;
    this.authenticationService.signIn(account, typeOfAccount);
    setTimeout(()=>{
      console.log()
      // this.router.navigate();
    },1000);
  }

  typeValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Select User Type') {
      return { example: true };
    }
    return null;
  }
}
