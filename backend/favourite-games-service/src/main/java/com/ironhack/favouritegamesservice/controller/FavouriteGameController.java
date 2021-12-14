package com.ironhack.favouritegamesservice.controller;


import com.ironhack.favouritegamesservice.models.FavouriteGame;
import com.ironhack.favouritegamesservice.repository.FavouriteGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favouritegames")
public class FavouriteGameController {

    @Autowired
    private FavouriteGameRepository favouriteGameRepository;

    @GetMapping("/{username}")
    public List<FavouriteGame> getFavouritesByUsername(@PathVariable(name = "username") String username) {
        return favouriteGameRepository.findByUsername(username);
    }

    @PostMapping("")
    public void addToFavourites(@RequestBody FavouriteGame favouriteGame) {
        favouriteGameRepository.save(favouriteGame);
    }
}
