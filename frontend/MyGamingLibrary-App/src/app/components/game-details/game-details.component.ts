import { FavouriteGamesService } from './../../services/favourite-games.service';
import { FavouriteGame, FavouriteGameDTO } from './../../models/favourite-game.model';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from './../../services/comment.service';
import { AuthenticationService } from './../../services/authentication.service';
import { GameDetailsAuxService } from './../../services/game-details-aux.service';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { GameComment, GameCommentDTO } from 'src/app/models/game-comment.model';
import { Status } from 'src/app/models/user.model';
import { FrozenUserDialogComponent } from '../dialog-components/frozen-user-dialog/frozen-user-dialog.component';
import { PublishedCommentDialogComponent } from '../dialog-components/published-comment-dialog/published-comment-dialog.component';
import { AddedFavouritesDialogComponent } from '../dialog-components/added-favourites-dialog/added-favourites-dialog.component';
import { GameAlreadyFavouriteDialogComponent } from '../dialog-components/game-already-favourite-dialog/game-already-favourite-dialog.component';

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
  comments!: Observable<GameComment[]>
  currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
  userFavourites!: FavouriteGame[]

  
  

  constructor(
    private router: Router,
    private gameDetailsAuxService: GameDetailsAuxService,
    private commentService: CommentService,
    private dialog: MatDialog,
    private favouriteGamesService: FavouriteGamesService
    
  ) {
    this.game = this.gameDetailsAuxService.game;
    this.screenshots = this.game.screenshots;
   }
  


  ngOnInit() {
    console.log(this.game.name);
    console.log(this.game.detail);
    this.reloadCommentsList();
    if (this.currentUser){
    this.favouriteGamesService.getFavouriteGamesByUsername(this.currentUser.username).subscribe(
      result => {
        this.userFavourites = result
      }
    )
    }
  }

  submitComment() {
    
    if(this.currentUser.status === Status.FROZEN) {
      this.dialog.open(FrozenUserDialogComponent)
      return;
    }
    
    let gameCommentDTO: GameCommentDTO = {
      gameId: this.game.id,
      username: this.currentUser.username,
      date: new Date(),
      comment: this.commentForm.value.commentText
    }
    this.commentService.postComment(gameCommentDTO).subscribe(result => {
      console.log(result)
      this.reloadCommentsList()
    })
    this.commentForm.reset();
    this.dialog.open(PublishedCommentDialogComponent);

  }


  reloadCommentsList() {
    this.comments = this.commentService.getCommentsByGameId(this.game.id);
  }

  isLoggedIn(): boolean {
    if(sessionStorage.getItem('currentUser')) { return true }
     return false;
  }

  addToFavourites() {
    console.log("begin addToFavourites");
    if(this.currentUser.status === Status.FROZEN) {
      this.dialog.open(FrozenUserDialogComponent)
      return;
    }

    console.log("user is not frozen")
    for (let favourite of this.userFavourites) {
      if(favourite.gameId === this.game.id) {
      this.dialog.open(GameAlreadyFavouriteDialogComponent, {
        data: {gameName: this.game.name}
      });
      return;
    }
  }
    console.log("game is not in favourites already")
    let favouriteGameDTO: FavouriteGameDTO = {
      gameId: this.game.id,
      username:this.currentUser.username
    }

    this.favouriteGamesService.addToFavourites(favouriteGameDTO).subscribe(result => {
      console.log(result);
    });

    this.dialog.open(AddedFavouritesDialogComponent, {
      data: {gameName: this.game.name}
    });


  }

  

}
