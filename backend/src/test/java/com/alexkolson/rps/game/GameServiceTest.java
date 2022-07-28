package com.alexkolson.rps.game;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
public class GameServiceTest {
    @MockBean GameRepository repository;
    @InjectMocks
    private GameService service;

    @Test
    void play_RejectsInvalidMoves() {
        String invalidMove = "Lizard";
        PlayRequest req = PlayRequest.builder().move(invalidMove).build();

        Exception e = assertThrows(RuntimeException.class, () -> {
            service.play(req);
        });

        String expectedMessage = "invalid move";

        String actualMessage = e.getMessage();

        assertEquals(expectedMessage, actualMessage);
    }

    @Test
    void ermittleErgebnis_correctlyCalculatesGameResult() {
        List<String> moves = List.of("Rock", "Paper", "Scissors");

        for (String move: moves) {
            int winningMoveIdx = (moves.indexOf(move) + 1) % moves.size();
            assertEquals("Win", service.ermittleErgebnis(moves.get(winningMoveIdx), move));
            assertEquals("Tie", service.ermittleErgebnis(move, move));
            assertEquals("Loss", service.ermittleErgebnis(move, moves.get(winningMoveIdx)));
        }
    }
}
