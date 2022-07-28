import { Component, Input, OnInit } from '@angular/core';
import { Game, GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  lastPlayedGame?: Game | null;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.lastPlayedGame.subscribe(game => this.lastPlayedGame = game);
  }

}
