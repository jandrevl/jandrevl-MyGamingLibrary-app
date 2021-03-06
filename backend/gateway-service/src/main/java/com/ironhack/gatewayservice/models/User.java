package com.ironhack.gatewayservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class User {

    private Long id;
    private String name;
    private String username;
    private String password;
    private Status status;
    private Platform favouritePlatform;
    private Role role;




}
