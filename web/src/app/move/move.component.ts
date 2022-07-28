import { Component, Input, OnInit } from '@angular/core';
import { Game, GameService } from '../game/game.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {
  @Input() move!: string;
  @Input() image!: string;

  constructor(private gameService: GameService) { }

  playGame() {
    this
      .gameService
      .play(this.move)
      .subscribe((game) => this.gameHandler(game));
  }

  gameHandler(game: Game) {
    this.gameService.lastPlayedGame.next(game);
  }

  ngOnInit(): void {
  }

}
