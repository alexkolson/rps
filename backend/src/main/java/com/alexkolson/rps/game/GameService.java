package com.alexkolson.rps.game;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class GameService {

    private static final List<String> GAME_MOVES = List.of("Rock", "Paper", "Scissors");

    private static final List<String> RESULTS = List.of("Tie", "Win", "Loss");
    private final GameRepository repository;

    public GameEntity play(PlayRequest request) {
        log.info("Game started...");
        log.info("Player move is: {}", request.getMove());
        String playerMove = request.getMove();
        if (!GAME_MOVES.contains(playerMove)) {
            log.error("Player move is not one of the valid moves!");
            throw new RuntimeException("invalid move");
        }

        List<String> moves = new ArrayList<>(GAME_MOVES);
        Collections.shuffle(moves);
        String computerMove = moves.get(0);
        log.info("Computer move is: {}", computerMove);

        String result = ermittleErgebnis(playerMove, computerMove);
        log.info("The player has achieved a {} against the computer", result);

        GameEntity game = GameEntity
                .builder()
                .move(playerMove)
                .computerMove(computerMove)
                .result(result)
                .build();

        return repository.save(game);
    }
    public List<GameEntity> getAllGames() {
        return repository.findAll();
    }

    // A german method name, just for fun :) Of course it is not so cool to mix german and english method
    // names, and I wouldn't do it in a real application.
    public String ermittleErgebnis(String playerMove, String computerMove) {
        return RESULTS.get(Math.floorMod((GAME_MOVES.indexOf(playerMove) - GAME_MOVES.indexOf(computerMove)), GAME_MOVES.size()));
    }
}
