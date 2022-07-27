import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {
  @Input() title?: string;
  @Input() image?: string;

  constructor(gameService: GameService) { }

  ngOnInit(): void {
  }

}
