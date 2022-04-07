import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product = new Product()

  constructor(private _router: Router, private _service: ProductService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this._service.fetchProductById(id).subscribe(
      data => {
        console.log("Product " + id + " is received")
        this.product = data
      },
      error => console.log(error)
    )
  }

  goToAllProducts() {
    this._router.navigate(["/admin"])
  }

  updateProduct() {
    this._service.editProduct(this.product).subscribe
    (
      data => {
        console.log("Product " + this.product.productId + " edited succesfully")
        this.goToAllProducts()
      },
      error => console.log(error)
    )
  }
}
