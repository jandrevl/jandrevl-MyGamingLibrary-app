import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Platform, Role, Status, User, UserDTO } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css'],
  
})
export class AdminUserDetailsComponent implements OnInit, OnChanges{

  @Input() user!: User;

  userDetailsForm: FormGroup;
  favouritePlatform: FormControl;
  name: FormControl;
  password: FormControl;
  role: FormControl;
  status: FormControl;
  username: FormControl;
  Platform = Platform;
  Role = Role;
  Status = Status;





  constructor(
    private userService: UserService,
  ) {
    // this.user = new User(0, 'teste', 'teste', '', Status.ACTIVE, Platform.OTHER, Role.USER);

    this.name = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.minLength(8));
    this.status = new FormControl('', Validators.required);
    this.role = new FormControl('', Validators.required);
    this.favouritePlatform = new FormControl('', Validators.required);

    this.userDetailsForm = new FormGroup(
      {
        name: this.name,
        username: this.username,
        password:this.password,
        status: this.status,
        role: this.role,
        favouritePlatform: this.favouritePlatform
      });
    

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
    this.userDetailsForm.reset({
      name: this.user.name,
      username: this.user.username,
      status: this.user.status,
      role: this.user.role,
      favouritePlatform: this.user.favouritePlatform,
      password: this.user.password
    })
    console.log("From ngOnChanges, user agora é: " + this.user);
  }

  ngOnInit(): void {
    // console.log("Mensagem do child: o User do Parent é: " + this.user.name);
    // this.name = new FormControl(this.user.name, Validators.required);
    // this.userDetailsForm.reset({name: this.user.name
    //   name: this.user.name
    //   username: this.user.username,
    //   password: this.user.password,
    //   favouritePlatform: this.user.favouritePlatform,
    //   role: this.user.role,
    //   status: this.user.status
    // });
    // console.log("this.userDetailsForm.value.name no child é agora: " + this.userDetailsForm.value.name);
    
  
  }

  

  submitUpdateUser():void {
    let userDTO: UserDTO = this.createUserDTO();
    this.userService.updateUserByUsername(this.user.username, userDTO).subscribe(result => {
      console.log(result)
    });

  }

  createUserDTO(): UserDTO {
    let userDTO: UserDTO = {
      favouritePlatform: this.favouritePlatform.value,
      name: this.name.value,
      password: this.password.value,
      role: this.role.value,
      status: this.status.value,
      username: this.username.value
    }
    console.log("userDTO Created: " + JSON.stringify(userDTO))

    return userDTO;
  }

}
