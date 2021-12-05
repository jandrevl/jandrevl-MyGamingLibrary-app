package com.ironhack.gatewayservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Comment {


    private Long id;
    private Long gameId;
    private String username;
    private LocalDate date;
    private String comment;


}
