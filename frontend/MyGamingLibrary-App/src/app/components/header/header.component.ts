import { AuthenticationService } from './../../services/authentication.service';
import { Role } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  



  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {

    this.isLoggedIn$ = this.authenticationService.isLoggedIn;

  }

  isUserAdmin(): boolean {
        if (sessionStorage.getItem('currentUser')) {
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)
      if (currentUser.role === "ADMIN") {
         return true;
      }
    } return false
  }

  
}
