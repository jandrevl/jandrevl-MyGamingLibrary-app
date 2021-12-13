import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { Platform, Role, Status, UserDTO } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UnmatchingPasswordsDialogComponent } from '../unmatching-passwords-dialog/unmatching-passwords-dialog.component';
import { UserCreatedDialogComponent } from '../user-created-dialog/user-created-dialog.component';
import { UserDuplicatedDialogComponent } from '../user-duplicated-dialog/user-duplicated-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  favouritePlatform: FormControl;
  name: FormControl;
  password: FormControl;
  passwordConfirmation: FormControl;
  username: FormControl;
  Platform = Platform;


  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.name = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.passwordConfirmation = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.username = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.favouritePlatform = new FormControl('', [Validators.required]);

    this.signupForm = new FormGroup(
      {
        name: this.name,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
        username: this.username,
        favouritePlatform: this.favouritePlatform
      });


  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log("password: " + this.password.value);
    console.log("confirmation: " + this.passwordConfirmation.value);
    if (this.password.value !== this.passwordConfirmation.value) {
      this.openUnmatchingPasswordsDialog();

    } else {
      console.log("passwords match");
      let userDTO = this.createUserDTO();
      this.userService.createUser(userDTO).subscribe(
        result => {
          console.log(result);
          this.openUserCreatedDialog();
        },
        err => {
          console.log("Something went wrong... Username already exists! " + err);
          this.openDuplicatedUserDialog();
        })
    }
  }

  openUnmatchingPasswordsDialog() {
    this.dialog.open(UnmatchingPasswordsDialogComponent);
    this.password.setValue('');
    this.passwordConfirmation.setValue('');
  }

  openUserCreatedDialog() {
    this.dialog.open(UserCreatedDialogComponent);
    this.password.setValue('');
    this.passwordConfirmation.setValue('');
    this.name.setValue('');
    this.username.setValue('');
    this.favouritePlatform.setValue('');
  }

  openDuplicatedUserDialog() {
    this.dialog.open(UserDuplicatedDialogComponent);
  }

  createUserDTO(): UserDTO {
    let userDTO: UserDTO = {
      favouritePlatform: this.favouritePlatform.value,
      name: this.name.value,
      password: this.password.value,
      role: Role.USER,
      status: Status.ACTIVE,
      username: this.username.value
    }
    return userDTO;
  }

}
