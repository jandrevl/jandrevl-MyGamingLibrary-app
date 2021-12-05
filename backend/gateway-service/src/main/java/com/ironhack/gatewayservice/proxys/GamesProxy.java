package com.ironhack.gatewayservice.proxys;


import com.ironhack.gatewayservice.models.Game;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "GAMES-SERVICE")
public interface GamesProxy {

    @GetMapping("/api/games/{id}")
    Game getGameById(@PathVariable(name = "id") Long id);

    @GetMapping("/api/games/search/{searchString}")
    List<Game> searchGameByString(@PathVariable(name = "searchString") String searchString);
}
