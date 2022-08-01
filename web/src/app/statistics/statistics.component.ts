import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { Game, GameService } from '../game/game.service';

interface GameStats {
  [index: string]: number;
  win: number;
  loss: number;
  tie: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  gameStats: Game[];
  chartOpts: AgCartesianChartOptions

  constructor(private gameService: GameService) {
    this.gameStats = [];
    this.chartOpts = {
      type: 'column',
      data: this.getChartData(),
      title: {
        text: 'Game Results',
      },
      series: [
        {
          type: 'column',
          xKey: 'result',
          yKey: 'count',
        }
      ],
      theme: {
        baseTheme: 'ag-material-dark'
      }
    };
  };

  getChartOptions() {
    return {
      ...this.chartOpts,
      data: this.getChartData()
    };
  }

  getChartData() {
    const initialGameStats: GameStats = {
      win: 0,
      loss: 0,
      tie: 0
    };

    const gameStats = this.gameStats.reduce((acc, game) => {
      acc[game.result?.toLowerCase()!]++;
      return acc;
    }, initialGameStats);

    return Object.entries(gameStats).map(([result, count]) => ({ result, count }));
  }

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe((games) => {
      this.gameStats = games;
      this.chartOpts = this.getChartOptions();
      console.log(this.chartOpts);
    })
  }

}
