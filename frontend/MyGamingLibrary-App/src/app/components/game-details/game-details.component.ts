import { CommentService } from './../../services/comment.service';
import { AuthenticationService } from './../../services/authentication.service';
import { GameDetailsAuxService } from './../../services/game-details-aux.service';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { GameComment } from 'src/app/models/game-comment.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  @ViewChild('commentForm')
  commentForm!: NgForm;
  game: Game;
  id: number = 0;
  gameString: string = '';
  screenshots: string[];
  comments: GameComment[] = []  
  
  

  constructor(
    private router: Router,
    private gameDetailsAuxService: GameDetailsAuxService,
    private commentService: CommentService
    
  ) {
    this.game = this.gameDetailsAuxService.game;
    this.screenshots = this.game.screenshots;
    this.commentService.getCommentsByGameId(this.game.id).subscribe(
      result => {this.comments = result}
    )
   }
  


  ngOnInit() {
    console.log(this.game.name);
    console.log(this.game.detail);
    // this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  submitComment() {

  }

  isLoggedIn(): boolean {
    if(sessionStorage.getItem('currentUser')) { return true }
     return false;
  }

}
