import { OrderService } from './../../services/order.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product = new Product()
  id!: number
  userId!: string
  
  constructor(private _router: Router, private _pservice: ProductService, private _uasevice: UserAuthService, private _cservice: CartService,private _oservice: OrderService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this._uasevice.getUser()
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this._pservice.fetchProductById(this.id).subscribe(
      data => {
        console.log("Product " + this.id + " is received")
        this.product = data
      },
      error => console.log(error)
    )
  }

  addToCart() {
    this._cservice.addCartItem(this.userId, this.product.quantity, this.id).subscribe(
      data => {
        console.log("Product " + this.id + " is added to cart")
      },
      error => console.log(error)
    )

    this._router.navigate(["/cart/" + this.userId])
    .then(() => {
      window.location.reload();
    });
  }
  PlaceOrder(){
    this._oservice.placeOrder(this.userId,this.product.quantity,this.id).subscribe(
      data =>{
        console.log("Product " + this.id + " is added to orders")
      },
      error => console.log(error)
    )
    this._router.navigate(["/myorders/" + this.userId])
    .then(() => {
      window.location.reload();
    });
  }
}
