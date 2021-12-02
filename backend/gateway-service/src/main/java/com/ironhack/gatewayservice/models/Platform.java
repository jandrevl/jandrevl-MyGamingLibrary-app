package com.ironhack.gatewayservice.models;

public enum Platform {
    PC("PC"),
    XBOX ("XBOX Series X"),
    PS5("Playstation 5"),
    SWITCH("Nintendo Switch"),
    PS4("Playstation 4"),
    XBOXONE("XBOX One"),
    PS3("Playstation 3"),
    XBOX360("XBOX 360"),
    WIIU("Wii U"),
    WII("Wii"),
    MAC("Mac"),
    NIN3DS("Nintendo 3DS"),
    PSP("PlayStation Portable"),
    PSV("PlayStation Vita"),
    DS("Nintendo DS"),
    OTHER("Other");

    private final String platformName;


    Platform(String platformName) {
        this.platformName = platformName;
    }

    public String getPlatformName() {
        return platformName;
    }


}
