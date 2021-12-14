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
  
  

  constructor(
    private router: Router,
    private gameDetailsAuxService: GameDetailsAuxService,
    private commentService: CommentService,
    private dialog: MatDialog
    
  ) {
    this.game = this.gameDetailsAuxService.game;
    this.screenshots = this.game.screenshots;
   }
  


  ngOnInit() {
    console.log(this.game.name);
    console.log(this.game.detail);
    this.reloadCommentsList();
  }

  submitComment() {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(currentUser.status === Status.FROZEN) {
      this.dialog.open(FrozenUserDialogComponent)
      return;
    }
    
    let gameCommentDTO: GameCommentDTO = {
      gameId: this.game.id,
      username: currentUser.username,
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

  

}
