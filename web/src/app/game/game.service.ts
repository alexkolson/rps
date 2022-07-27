import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';

export interface Game {
  id?: number;
  move: string;
  computerMove?: string;
  result?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  host = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  play(move: string): Observable<Game> {
    const game: Game = {
      move
    };
    return this.httpClient.post<Game>(`${this.host}/games`, game).pipe(catchError(this.handleError))
  }

  getAllGames(): Observable<Game[]> {
    return this
      .httpClient
      .get<Game[]>(`${this.host}/games`)
      .pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    if (err.status === 0) {
      console.error('Some sort of network error occured');
    } else {
      console.error('Failed to play a game, the server says:', err);
    }

    return throwError(() => new Error('Could not play a game! Check logs for details'));
  }
}
