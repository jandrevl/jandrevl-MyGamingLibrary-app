package com.ironhack.gamesservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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
    private List<String> screenshots;
}
