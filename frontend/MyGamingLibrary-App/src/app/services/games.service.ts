import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  game!: Game;
  readonly baseUrl = "http://localhost:8000/api"

  constructor(private http: HttpClient) { }

  getGameById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/games/" + id);
  }

  getGamesBySearch(searchString: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + "/games/search/" + searchString);
  }


}
