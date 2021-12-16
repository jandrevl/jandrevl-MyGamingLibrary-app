import { UserService } from './../../services/user.service';
import { Platform, Role, Status, User } from './../../models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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
  ) { 
    // this.user = new User(0, '', '', '', Status.ACTIVE, Platform.OTHER, Role.USER);
  }

  ngOnInit(): void {
  }

  async searchUsername() {
    this.user = await this.userService.getUserByUsername(this.searchUserForm.value.searchUsername).toPromise();
    this.searchSubmitted = true;
    this.searchUserForm.resetForm();
    console.log(this.user);

  }

  

}
