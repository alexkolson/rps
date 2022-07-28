package com.alexkolson.rps.game;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/games")
@RequiredArgsConstructor
public class GameController {
    private final GameService service;

    @PostMapping
    public GameEntity play(@RequestBody PlayRequest request) {
        return service.play(request);
    }

    @GetMapping
    public List<GameEntity> getAllGames() {
        return service.getAllGames();
    }
}
