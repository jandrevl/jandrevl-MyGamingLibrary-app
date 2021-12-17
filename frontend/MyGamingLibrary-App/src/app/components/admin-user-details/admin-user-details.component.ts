import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Platform, Role, Status, User, UserDTO } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserDialogComponent } from '../dialog-components/delete-user-dialog/delete-user-dialog.component';
import { UserDeletedDialogComponent } from '../dialog-components/user-deleted-dialog/user-deleted-dialog.component';
import { UserUpdatedDialogComponent } from '../dialog-components/user-updated-dialog/user-updated-dialog.component';

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
  confirmDeleteUser: boolean = false;





  constructor(
    private userService: UserService,
    public dialog: MatDialog,
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
    
  
  }

  

  submitUpdateUser():void {
    let userDTO: UserDTO = this.createUserDTO();
    this.userService.updateUserByUsername(this.user.username, userDTO).subscribe(result => {
      console.log(result);
    });
    this.dialog.open(UserUpdatedDialogComponent);

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

  onClickDeleteUser(): void {
    this.confirmDeleteUser = false;
    this.openConfirmDeleteDialog();
    console.log("From admin user details: this.confirmDeleteUser is: " + this.confirmDeleteUser)

    if (this.confirmDeleteUser){
    
    } else {return}
  }

  openConfirmDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data:{username: this.user.username,
            confirmDelete: this.confirmDeleteUser}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.confirmDeleteUser = result.confirmDelete;
      console.log(result);
      console.log("from admin user details, after dialog, this.confirmdeleteduser is: " + this.confirmDeleteUser)
      if(this.confirmDeleteUser) {
        this.deleteUser();
      }
    })

  }

  deleteUser(): void {
    this.userService.deleteUserByUsername(this.user.username).subscribe(
      result => {
        console.log(result);
        this.dialog.open(UserDeletedDialogComponent);
        this.userDetailsForm.reset();
      })
  }

}
