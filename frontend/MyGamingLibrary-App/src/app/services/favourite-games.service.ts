import { FavouriteGameDTO } from './../models/favourite-game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavouriteGame } from '../models/favourite-game.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteGamesService {

  readonly baseUrl: string = "http://localhost:8000/api/favouritegames"


  constructor(
    private http: HttpClient
  ) { }

  getFavouriteGamesByUsername(username: string): Observable<FavouriteGame[]> {
    return this.http.get<FavouriteGame[]>(this.baseUrl + "/" + username);
  }

  addToFavourites(favouriteGameDTO: FavouriteGameDTO): Observable<any> {
    return this.http.post(this.baseUrl, favouriteGameDTO);
  }

}
