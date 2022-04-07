import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username !: string
  isLoggedin: boolean = false
  constructor(private _uaservice: UserAuthService, private router: Router,) { }

  ngOnInit(): void {
    this.username = this._uaservice.getUser()
    this.isLoggedin = (this.username != "" && this.username !="admin@gmail.com")
  }

  logOut(): void {
    this._uaservice.clear()
    this.router.navigate(['/login'])
    .then(() => {
      console.log("Logged out")
      window.location.reload();
    })
  }
  
}
