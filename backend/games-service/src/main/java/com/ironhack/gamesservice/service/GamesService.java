package com.ironhack.gamesservice.service;

import com.ironhack.gamesservice.models.Game;
import com.ironhack.gamesservice.proxys.RawgProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GamesService {

    @Autowired
    private RawgProxy rawgProxy;

    public Game getGame(Long id) {
        String gameDetails = rawgProxy.getGameDetailsById(id);



    }
}
