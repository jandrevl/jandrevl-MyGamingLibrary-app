import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { DialogRole, MatDialog } from '@angular/material/dialog';
import { LoginErrorDialogComponent } from '../components/dialog-components/login-error-dialog/login-error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private dialog: MatDialog,
    ) { }


  login(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username + ":" + password)});
    return this.userService.getUserByUsernameOnLogin(username, headers).subscribe(user => {
      if (user) {
        user.authdata = window.btoa(username + ':' + password);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedIn.next(true);
      }
      console.log(sessionStorage.getItem('currentUser'));
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)
      console.log("from authentication service, current user role: " + currentUser.role);
      return user;
    },
    err => {
      console.log("From authentication service, login incorrect" + err);
      this.dialog.open(LoginErrorDialogComponent);
      
    })

  }

  
  logout() {

    sessionStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  


}
