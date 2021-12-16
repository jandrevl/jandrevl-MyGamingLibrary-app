import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {username: string, confirmDelete: boolean}
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.data.confirmDelete = false;
    this.dialogRef.close({confirmDelete: false});

  }

  onYesClick() {
    this.data.confirmDelete = true;
    console.log("From delete user dialog: confirm delete is " + this.data.confirmDelete)
    this.dialogRef.close({confirmDelete: true});
  }

}
