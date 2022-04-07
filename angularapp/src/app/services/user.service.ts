import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(private http: HttpClient,
    private userAuthService: UserAuthService) { }

  public registerUserFromRemote(user:User):Observable<any>{
    return  this.http.post<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/saveUser",user,{headers:this.requestHeader});//Doubt
    }
    public loginUserFromRemote(user:User):Observable<any>{
      return  this.http.post<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/login",user,{headers:this.requestHeader})
      }
      public fetchUserByUsername(username:String):Observable<any>{
        return  this.http.get<any>("https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/user/"+username,{headers:this.requestHeader});//Doubt
        }
      public roleMatch(allowedRoles:any): boolean {
        let isMatch = false;
        const userRoles: any = this.userAuthService.getRoles();
    
        if (userRoles != null && userRoles) {
          for (let i = 0; i < userRoles.length; i++) {
            for (let j = 0; j < allowedRoles.length; j++) {
              if (userRoles[i].roleName === allowedRoles[j]) {
                isMatch = true;
                return isMatch;
              } else {
                return isMatch;
              }
            }
          }
        }
        return isMatch;
        
      }

}
