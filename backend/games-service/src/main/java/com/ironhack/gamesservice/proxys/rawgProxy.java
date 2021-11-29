package com.ironhack.gamesservice.proxys;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "https://api.rawg.io/api/games")
public interface rawgProxy {

    String API_KEY = "86f26c0874994ee69db0e0aaf0e82e70";

    @GetMapping("/{id}?key=" + API_KEY)
    String getGameDetailsById(@PathVariable(name = "id") Long id);

    @GetMapping("/{id}/screenshots?key=" + API_KEY)
    String getGameScreenshots(@PathVariable(name = "id") Long id);

}
