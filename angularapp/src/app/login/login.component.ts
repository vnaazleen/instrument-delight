import { UserAuthService } from '../services/user-auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private UserAuthService:UserAuthService
    
  ) {

    this.UserAuthService.clear();
  }

  ngOnInit(): void {
   
  }
  loginUser() {
    this.userService.loginUserFromRemote(this.user).subscribe(
      (response) => {
        console.log(response.jwtToken);
        console.log(response.user.role);
        this.UserAuthService.setRoles(response.user.role);
        this.UserAuthService.setToken(response.jwtToken);
        this.UserAuthService.setUser(response.user.username);
       const role= response.user.role[0].roleName;
       console.log(role);
       if(role==='User'){
         this.router.navigate(['/home'])
         .then(() => {
          window.location.reload();
        });
       }
       else{
        this.router.navigate(['/admin']);
       }
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Please enter valid emailID or Password';
      }
    );
  }
  public isLoggedIn(){
    let a:any;
    this.user.active=false;
    a =this.UserAuthService.isLoggedIn();
     if(a===true){
      this.user.active=true;
     }
  }

  public logout(){
    this.user.active=false;
    this.router.navigate(['/login'])
   return this.UserAuthService.clear();
      
  }
    
}
