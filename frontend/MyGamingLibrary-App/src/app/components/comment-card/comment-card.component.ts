import { Component, Input, OnInit } from '@angular/core';
import { GameComment } from 'src/app/models/game-comment.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() gameComment!: GameComment;

  constructor() { }

  ngOnInit(): void {
  }

}
