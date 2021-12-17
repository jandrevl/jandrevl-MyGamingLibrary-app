import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!: NgForm


  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password);
    console.log("from login component: user storage has: " + sessionStorage.getItem('currentUser'));
    this.loginForm.reset();
    // if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    // }
    

  }

}
