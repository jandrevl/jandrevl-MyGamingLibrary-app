package com.ironhack.gatewayservice.proxys;


import com.ironhack.gatewayservice.models.FavouriteGame;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "FAVOURITE-GAMES-SERVICE")
public interface FavouriteGameProxy {

    @GetMapping("/api/favouritegames/{username}")
    List<FavouriteGame> getFavouritesByUsername(@PathVariable(name = "username") String username);

    @PostMapping("/api/favouritegames")
    void addGameToFavourites(@RequestBody FavouriteGame favouriteGame);
}

