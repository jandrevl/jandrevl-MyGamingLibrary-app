import { Game } from './../models/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsAuxService {

  game!: Game;

  constructor() { }
}
