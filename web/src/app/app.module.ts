import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { MoveComponent } from './move/move.component';
import { GameService } from './game/game.service';
import { ContentComponent } from './content/content.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    MoveComponent,
    ContentComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    AgChartsAngularModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
