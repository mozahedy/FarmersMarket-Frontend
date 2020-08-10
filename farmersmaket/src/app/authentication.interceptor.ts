// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import {AuthenticationService} from './authentication.service'

// @Injectable()
// export class AuthenticationInterceptor implements HttpInterceptor {

//   constructor(private authenticationService: AuthenticationService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     const authToken = this.authenticationService.getToken();
//     const authRequest = request.clone({
//       headers:request.headers.set("Authorization","Bearer"+authToken)
//     });
//     return next.handle(request);
//   }
// }
