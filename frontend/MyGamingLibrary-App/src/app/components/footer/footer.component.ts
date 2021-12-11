import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>

  

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;


  //   const obs = new Observable((observer) => {
  //   observer.next(sessionStorage.getItem('currentUser'));
  // })

  //   obs.subscribe((val) => {
  //     if (val !== null) {
  //       this.visibility = true;
  //     } else {this.visibility = false}
  //   })

    // sessionStorage.observe('currentUser').subscribe((newValue: boolean) => {
    //   this.visibility = newValue
    // })

    // if (sessionStorage.getItem('currentUser')) {
    //     this.visibility = true;
    //   } else { this.visibility = false }
  
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  // isVisible(visible: boolean): void {
  //   this.visibility = visible;
  // }

  // isVisible(): Observable<boolean> {
  //   return this.authenticationService.isLoggedIn
  //     .pipe(
  //       map((isLoggedIn: boolean) => {
  //         if(!isLoggedIn) {
  //           return false;
  //         }
  //         return true;
  //       })
  //     )
  // }

}
