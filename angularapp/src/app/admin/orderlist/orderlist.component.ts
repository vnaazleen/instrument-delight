import { Orders } from './../../model/Orders';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  _adminorders!: Orders[]
 // userId!: string

  constructor(private _osevice: OrderService,private _uasevice: UserAuthService, private _router: Router) { }

  ngOnInit(): void {
   // this.userId = this._uasevice.getUser()
    this._osevice.getUserProducts().subscribe(
      data => {
        this._adminorders = data;
        console.log(data)
        console.log("Admin orders received")
      },
      error => console.log(error)
      
    )
  }

}
