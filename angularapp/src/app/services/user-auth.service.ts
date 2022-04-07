import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));

  }
  public setUser(user:String){
    localStorage.setItem("user",JSON.stringify(user));
  }
  public getUser(){
    return JSON.parse(localStorage.getItem('user')||"");
  }
  public getRoles():[]{
    return JSON.parse(localStorage.getItem('roles')||"");//doubt
  }
  public getToken():string{
    return localStorage.getItem('jwtToken')||"";//doubt
  }
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken() && this.getUser ;

  }
}
