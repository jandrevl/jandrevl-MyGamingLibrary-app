import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-added-favourites-dialog',
  templateUrl: './added-favourites-dialog.component.html',
  styleUrls: ['./added-favourites-dialog.component.css']
})
export class AddedFavouritesDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
