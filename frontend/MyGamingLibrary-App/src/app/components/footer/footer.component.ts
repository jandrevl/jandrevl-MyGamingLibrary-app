import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>
  user!: User;

  

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  isCurrentUser(): boolean {
    if(sessionStorage.getItem('currentUser')) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser')!)
      return true;
    } else return false;
  }



  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
