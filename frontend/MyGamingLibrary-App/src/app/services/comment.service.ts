import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameComment, GameCommentDTO } from '../models/game-comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly baseUrl: string = "http://localhost:8000/api/comments"

  constructor(
    private http: HttpClient
  ) { }


  getCommentsByGameId(gameId: number): Observable<GameComment[]> {
    return this.http.get<GameComment[]>(this.baseUrl + "/" + gameId);
  }

  postComment(gameCommentDTO: GameCommentDTO): Observable<any> {
    return this.http.post(this.baseUrl, gameCommentDTO);
  }


}
