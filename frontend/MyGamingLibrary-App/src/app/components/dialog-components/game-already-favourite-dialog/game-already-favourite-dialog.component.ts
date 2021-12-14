import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-already-favourite-dialog',
  templateUrl: './game-already-favourite-dialog.component.html',
  styleUrls: ['./game-already-favourite-dialog.component.css']
})
export class GameAlreadyFavouriteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
