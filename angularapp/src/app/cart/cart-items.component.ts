import { OrderService } from '../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  _cartItems!: CartItem[]
  userId!: string

  constructor(private _csevice: CartService,private _oservice: OrderService, private _uasevice: UserAuthService, private _router: Router) { }

  ngOnInit(): void {
    this.userId = this._uasevice.getUser()
    this._csevice.fetchCartItems(this.userId).subscribe(
      data => {
        this._cartItems = data;
        console.log("Cart items recieved")
      },
      error => console.log(error)
    )

  }

  deleteCartItem(id: number) {
    console.log(id + " " + this.userId)
    this._csevice.deleteCartItem(this.userId, id).subscribe(
      data => {
        console.log(data)
      },
      error => console.log(error)
    )

    location.reload(); 
  }
  saveProduct(uid: string) {
    console.log(uid)
    this._oservice.saveProduct(uid).subscribe(
      data => {
        console.log(data)
      },
      error => console.log(error)
    )
    this._router.navigate(["/myorders/"+uid])
    .then(() => {
      window.location.reload();
    });
  }

}
