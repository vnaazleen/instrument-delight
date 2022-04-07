import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CorouselComponent } from './home/corousel/corousel.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { ProductsComponent } from './home/products/products.component';
import { CartItemsComponent } from './cart/cart-items.component';
import { OrdersComponent } from './user-order/orders.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { UserprofileComponent } from './home/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    DashboardComponent,
    ProductEditComponent,
    AdminComponent,
    AdminNavComponent,
    HomeComponent,
    HomePageComponent,
    CorouselComponent,
    NavbarComponent,
    ProductdetailsComponent,
    ProductsComponent,
    CartItemsComponent,
    OrdersComponent,
    SignupComponent,
    LoginComponent,
    OrderlistComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
