package com.ironhack.gamesservice.controller;


import com.ironhack.gamesservice.proxys.RawgProxy;
import com.ironhack.gamesservice.service.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/games")
public class GameServiceController {

    @Autowired
    private RawgProxy rawgProxy;
    @Autowired
    private GamesService gamesService;

//    @GetMapping("/{id}")
//    public String getGameDetailsJSONById(@PathVariable(name = "id") Long id) {
//        return rawgProxy.getGameScreenshots(id);
//    }

}
