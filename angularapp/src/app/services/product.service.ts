import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  fetchProductList(): Observable<any> {
    return this._http.get<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products")
  }

  fetchProductById(id: Number): Observable<any> {
    return this._http.get<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products/" + id)
  }

  addProduct(product: Product): Observable<any> {
    return this._http.post<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products", product)
  }

  editProduct(product: Product): Observable<any> {
    return this._http.post<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products", product)
  }

  deleteProductById(id: number): Observable<any> {
    return this._http.delete<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products/" + id)
  }

}


//https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products