import { Component, OnInit } from '@angular/core';
import { Game, GameService } from '../game/game.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  gameStats: string;

  constructor(private gameService: GameService) {
    this.gameStats = '';
   }

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe((games) => this.gameStats = JSON.stringify(games, null, 4))
  }

}
