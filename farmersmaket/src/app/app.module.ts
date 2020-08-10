import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomepageComponent} from './signin/homepage.component';
import {AuthenticationInterceptor} from './authentication.interceptor';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SignupComponent,
        
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([           
      {path:'home', component:HomepageComponent},
      {path:'home/signup', component:SignupComponent},

      {
        path: 'customer',
        loadChildren: () =>
          import('./customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: 'farmer',
        loadChildren: () =>
          import('./farmer/farmer.module').then(
            (m) => m.FarmerModule
          ),
      },
      {path:'', redirectTo:'home',pathMatch:'full'}
    ])

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthenticationInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
