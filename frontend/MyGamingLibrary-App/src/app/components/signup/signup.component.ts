import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';

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
  username:FormControl;

  constructor(
    private UserService: UserService
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
      }, 
      [CustomValidator.checkPassword]);


   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
