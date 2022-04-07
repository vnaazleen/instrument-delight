import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  _productList !: Product[];
  constructor(private _service: ProductService, private _route: Router) { }

  ngOnInit(): void {
    this._service.fetchProductList().subscribe(
      data=>{
        this._productList = data;
        console.log("Response recieved")
        console.log(data)
      },
      error=>console.log("Exception occured")
    )
  }

}
