import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private _uaservice: UserAuthService, private router: Router) { }

  ngOnInit(): void {
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
