import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg: any = '';
  constructor(private services: UserService, private router: Router) {}

  ngOnInit() {}

  registerUser() {
    this.services.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received ');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('exception occured');
        this.msg="*Email already exists";
       
      }
    );
  }
}
