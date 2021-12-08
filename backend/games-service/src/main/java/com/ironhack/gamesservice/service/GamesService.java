package com.ironhack.gamesservice.service;

import com.ironhack.gamesservice.models.Game;
import com.ironhack.gamesservice.proxys.RawgProxy;
import feign.FeignException;
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
        String gameDetails;
        JSONObject details;
        int count = 0;
        int maxTries = 1;
        while(true) {
            try {
                gameDetails = rawgProxy.getGameDetailsById(id);
                System.out.println(gameDetails);
                break;
            } catch (RuntimeException e) {
                id = id++;
                if (++count == maxTries) throw e;
            }
        }
        System.out.println(gameDetails);
        details = new JSONObject(gameDetails);

        game.setId(id);
        game.setName(details.getString("name"));
        game.setHtmlDescription(details.getString("description"));
        if(details.isNull("released")) {
            game.setReleaseDate("Not available");
        } else {
            game.setReleaseDate(details.getString("released"));
        }
        if(details.isNull("background_image")) {
            game.setBackgroundImageUrl("src/main/resources/images/image_not_available.png");
        } else {
            game.setBackgroundImageUrl(details.getString("background_image"));
        }

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

    public List<Game> searchByString(String searchString) {

        List<Game> searchResultList = new ArrayList<>();

        JSONObject searchResultJSON = new JSONObject(rawgProxy.getStringSearch(searchString));

        JSONArray searchResultJSONArray = searchResultJSON.getJSONArray("results");

        int numberOfResults;
        if(searchResultJSONArray.length() > 10) {
            numberOfResults = 10;
        } else {
            numberOfResults = searchResultJSONArray.length();
        }

        for (int i = 0; i < numberOfResults; i++) {
            Long gameId = searchResultJSONArray.getJSONObject(i).getLong("id");
            searchResultList.add(getGame(gameId));
        }

        return searchResultList;
    }
}
