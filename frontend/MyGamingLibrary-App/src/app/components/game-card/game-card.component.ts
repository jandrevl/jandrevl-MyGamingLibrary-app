import { GameDetailsAuxService } from './../../services/game-details-aux.service';
import { Router } from '@angular/router';
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
    private gamesService: GamesService,
    private router: Router,
    private gameDetailsAuxService: GameDetailsAuxService
  ) {
    // Game object instantiated just for testing purposes
    this.game = new Game(
      3498,
      "Grand Theft Auto V",
      "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>",
      "2010-01-01",
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      ["https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
        "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"]
    )
  }

  ngOnInit(): void {
      if (this.gameId) {
    this.gamesService.getGameById(this.gameId)
      .subscribe(
        result => {
          this.game = result;
        });
      }
      
  }

  gameDetails(game: Game) {
    this.gameDetailsAuxService.game = this.game
    this.router.navigate(['gamedetails']);
  }



}
