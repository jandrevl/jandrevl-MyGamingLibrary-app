package com.ironhack.gamesservice.proxys;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "RAWG-API", url = "https://api.rawg.io/api/games")
public interface RawgProxy {

//    String API_KEY = "86f26c0874994ee69db0e0aaf0e82e70";
    String API_KEY = "f05f15b7d95f40b6b7f473441d25342b";

    @GetMapping("/{id}?key=" + API_KEY)
    String getGameDetailsById(@PathVariable(name = "id") Long id);

    @GetMapping("/{id}/screenshots?key=" + API_KEY)
    String getGameScreenshots(@PathVariable(name = "id") Long id);

    @GetMapping("?search={searchString}&key=" + API_KEY)
    String getStringSearch(@PathVariable(name = "searchString") String searchString);

}
