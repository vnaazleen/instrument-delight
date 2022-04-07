import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product = new Product()

  constructor(private _router: Router, private _service: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this._service.addProduct(this.product).subscribe
    (
      data => {
        console.log("Product " + this.product.productId + " added!") 
        this._router.navigate(["/admin"])
      },
      error => console.log(error)
    )
  }

}
