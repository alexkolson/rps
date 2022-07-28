import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: '', redirectTo: 'game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
