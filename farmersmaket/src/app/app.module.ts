import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomepageComponent} from './homepage/homepage.component';
// import {AuthenticationInterceptor} from './authentication.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
        
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'home', component:HomepageComponent},
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
    ])

  ],
  // providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthenticationInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
