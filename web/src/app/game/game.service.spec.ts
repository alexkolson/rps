import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


import { Game, GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let testController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
    });
    service = TestBed.inject(GameService);
    testController = TestBed.inject(HttpTestingController);
  });

  it('send the correct request to play a game', () => {
    const gameResponse: Game = {
      id: 1,
      move: 'scissors',
      computerMove: 'rock'
    }

    service.play('scissors').subscribe();
    const req = testController.expectOne(`${service.host}/games`);

    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual({ move: 'scissors' });

    req.flush(gameResponse);

    testController.verify();
  });

  it('should send the correct request to get game statistics', () => {
    const response: Game[] = [];

    service.getAllGames().subscribe();
    const req = testController.expectOne(`${service.host}/games`);

    expect(req.request.method).toBe('GET');

    req.flush(response);
    testController.verify();
  });
});