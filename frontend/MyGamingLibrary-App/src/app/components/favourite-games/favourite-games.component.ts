import { FavouriteGamesService } from './../../services/favourite-games.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavouriteGame } from 'src/app/models/favourite-game.model';

@Component({
  selector: 'app-favourite-games',
  templateUrl: './favourite-games.component.html',
  styleUrls: ['./favourite-games.component.css']
})
export class FavouriteGamesComponent implements OnInit {

  favouriteGames!: Observable<FavouriteGame[]>
  currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)
  constructor(
    private favouriteGamesService: FavouriteGamesService
  ) { }

  ngOnInit(): void {
    this.updateFavouriteGames()
  }

  updateFavouriteGames() {
    // let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)
    this.favouriteGames = this.favouriteGamesService.getFavouriteGamesByUsername(this.currentUser.username)
  }

}
