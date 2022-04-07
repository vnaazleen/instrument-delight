import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  deleteProduct(id: number) {
    this._service.deleteProductById(id).subscribe(
      data => {
        console.log(data)
        this._route.navigate([''])
      },
      error => console.log(error)
    )

    location.reload(); 
  }

  goToAddProduct() {
    this._route.navigate(['/admin/addProduct'])
  }

  goToEditProduct(id: number) {
    this._route.navigate(['/admin/productEdit', id])
  }

}
