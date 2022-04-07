import { OrderService } from '../services/order.service';
import { Orders } from '../model/Orders';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  _order!: Orders[]
  userId!: string
  constructor(private _osevice: OrderService,private _uasevice: UserAuthService, private _router: Router) { }

  ngOnInit(): void {
    this.userId = this._uasevice.getUser()
    this._osevice.fetchOrders(this.userId).subscribe(
      data => {
        this._order = data;
        console.log("Order items recieved")
      },
      error => console.log(error)
    )
  }
}
