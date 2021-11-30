package com.ironhack.gamesservice.service;

import com.ironhack.gamesservice.models.Game;
import com.ironhack.gamesservice.proxys.RawgProxy;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class GamesService {

    @Autowired
    private RawgProxy rawgProxy;

    public Game getGame(Long id) {
        Game game = new Game();
        String gameDetails = rawgProxy.getGameDetailsById(id);
        JSONObject details = new JSONObject(gameDetails);
        if (details.has("Detail")) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        game.setId(id);
        game.setName(details.getString("name"));
        game.setHtmlDescription(details.getString("description"));
        game.setReleaseDate(details.getString("released"));
        game.setBackgroundImageUrl(details.getString("background_image"));

        String gameScreenshots = rawgProxy.getGameScreenshots(id);
        List<String> screenshots = new ArrayList<>();
        JSONObject screenshotsJSON = new JSONObject(gameScreenshots);
        JSONArray screenshotsJSONArray = screenshotsJSON.getJSONArray("results");
        for(int i = 0; i < screenshotsJSONArray.length(); i++) {
            screenshots.add(screenshotsJSONArray.getJSONObject(i).getString("image"));
        }
        game.setScreenshots(screenshots);

        return game;
    }
}
