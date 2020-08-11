import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token: string;
  private responseMessage: any;
  private userAccount: any;
  baseUrl = config.RestUrl;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }
  signIn(account, typeOfAccount: string) {
    this.http
      .post<{  account: object, message: string ,token:string}>(
        this.baseUrl + '/'+ typeOfAccount + '/signin',
        account
      )
      .subscribe((response) => {        
        this.token = response.token;
        this.responseMessage = response.message;
        this.userAccount = response.account;
      });
    
  }

  signUp(account, typeOfAccount: string) {
    this.http
      .post<{data: object}>( this.baseUrl + '/'+ typeOfAccount + '/signup',account)
      .subscribe((response) => {
        this.userAccount = response.data;        
      });
    
  }
  getUserAccount() {
    return this.userAccount;
  }
}