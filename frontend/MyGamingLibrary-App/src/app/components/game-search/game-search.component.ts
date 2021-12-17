import { GamesService } from 'src/app/services/games.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  @ViewChild('searchForm')
  searchForm!: NgForm;
  downloading: boolean = false;
  searchResultGameArray: Game[] = [];

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.downloading = true;
    this.gamesService.getGamesBySearch(this.searchForm.value.searchName).subscribe(result => {
      this.downloading = false;
      this.searchResultGameArray = result;

      })
      
  }

}
