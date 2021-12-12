import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() gameId!: number;

  @Input()game: Game

  obtained = {detail: "Notfound."}

  constructor(
    private gamesService: GamesService
  ) {
    // Game object instantiated just for testing purposes
    this.game = new Game(
      3498,
      "Grand Theft Auto V",
      "Open world huge game of excellence",
      "2010-01-01",
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      ["https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
        "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"]
    )
  }

  ngOnInit(): void {
    // let id = this.gameId;
    // do {
      if (this.gameId) {
    this.gamesService.getGameById(this.gameId)
      .subscribe(
        result => {
          this.game = result;
        });
      }
      //   id = id++;
      // } while (this.game.detail === "Not found.")
      
  }



}
