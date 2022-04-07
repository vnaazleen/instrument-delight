import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userDetails!:User;
userId:any;
  constructor(private _uasevice: UserAuthService, private _router: Router, private _userservice:UserService) { }

  ngOnInit(): void {
    this.userId = this._uasevice.getUser()
    console.log( this.userId);
    this._userservice.fetchUserByUsername(this.userId).subscribe(

      data => {
        this.userDetails= data;
        console.log( this.userDetails);
        console.log("UserDetails Recieved")
      },
      error => console.log(error)
    )

  }



}
