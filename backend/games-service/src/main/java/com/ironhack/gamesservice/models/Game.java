package com.ironhack.gamesservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Game {

    private Long id;
    private String name;
    private String htmlDescription;
    private String releaseDate;
    private String backgroundImageUrl;
    private String screenshot1Url;
    private String screenshot2Url;
    private String screenshot3Url;
    private String screenshot4Url;
    private String screenshot5Url;
    private String screenshot6Url;
}
