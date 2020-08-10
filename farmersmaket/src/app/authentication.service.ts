import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestUrl } from './config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token: string;
  private responseMessage: any;
  baseUrl = RestUrl;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }
  signIn(account, typeOfAccount: string) {
    this.http
      .post<{ token: string }>(this.baseUrl.baseUrl + typeOfAccount, account)
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        this.responseMessage = response;
      });
    return this.responseMessage;
  }

  signUp(account, typeOfAccount: string) {
    this.http
      .post(this.baseUrl + typeOfAccount, account)
      .subscribe((response) => {
        console.log(response);
        this.responseMessage = response;
      });
      return this.responseMessage;
  }
}
