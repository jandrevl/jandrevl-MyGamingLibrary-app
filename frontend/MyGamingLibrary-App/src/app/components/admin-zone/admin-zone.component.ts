import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { Platform, Role, Status, User } from './../../models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserNotFoundDialogComponent } from '../dialog-components/user-not-found-dialog/user-not-found-dialog.component';

@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.css']
})
export class AdminZoneComponent implements OnInit {

  @ViewChild('searchUserForm')
  searchUserForm!: NgForm;
  searchSubmitted: boolean = false;
  user!: User;
  userId: number = 0;
  




  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { 
    // this.user = new User(0, '', '', '', Status.ACTIVE, Platform.OTHER, Role.USER);
  }

  ngOnInit(): void {
  }

  async searchUsername() {
    try{
    this.user = await this.userService.getUserByUsername(this.searchUserForm.value.searchUsername).toPromise();
    } catch(e) {
      this.dialog.open(UserNotFoundDialogComponent);
      return
    }
    this.searchSubmitted = true;
    this.searchUserForm.resetForm();
    console.log(this.user);

  }

  

}
