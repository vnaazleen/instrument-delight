import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  fetchOrders(id: string): Observable<any> {
    return this._http.get<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/myorders/"+ id)
  }
  placeOrder(username: string,quantity:number, id: number): Observable<any> {
    return this._http.post<any>(`https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/product/${id}`,{username, quantity})
  }
  saveProduct(uid: string): Observable<any> {
    return this._http.post<any>(`https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/saveOrder/${uid}`,{uid})
  }
  getUserProducts(): Observable<any>{
    return this._http.get<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/orders")
  }
}
