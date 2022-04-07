import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { CartItemsComponent } from './cart/cart-items.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './user-order/orders.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './home/userprofile/userprofile.component';

const routes: Routes = [

  { path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: "home", component: HomePageComponent ,canActivate:[AuthGuard], data:{roles:['User']}},
      { path: "product/:id", component: ProductdetailsComponent,canActivate:[AuthGuard], data:{roles:['User']} },
      { path: "cart/:id", component: CartItemsComponent ,canActivate:[AuthGuard], data:{roles:['User']}},
      { path: 'myorders/:id', component: OrdersComponent,canActivate:[AuthGuard], data:{roles:['User']}},
      {path : 'user/:id',component:UserprofileComponent,canActivate:[AuthGuard], data:{roles:['User']}},
    ]
  },
  {
    path: "admin",
    component: AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']},
    children: [
      { path: "", component: DashboardComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
      { path: "addProduct", component: AddproductComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
      { path: "productEdit/:id", component: ProductEditComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
      { path: "orders", component: OrderlistComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
