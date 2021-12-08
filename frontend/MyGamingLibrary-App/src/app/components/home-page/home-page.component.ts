import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  random8GameId: number[] = [];
  game!: Game

  answer!: any

  invalidAnswer = { detail: "Not found."};

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    for(let i = 0; i < 8; i++) {
      this.random8GameId.push(this.getRandomNumber());
      
    }

  }

  getRandomNumber(): number {
    let randomId = Math.floor(Math.random() * 700000) + 1;
    return randomId;
  }

}
