package com.ironhack.gatewayservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FavouriteGame {


    private Long id;
    private Long gameId;
    private String username;


}
