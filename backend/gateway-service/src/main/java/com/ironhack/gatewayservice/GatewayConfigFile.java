package com.ironhack.gatewayservice;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfigFile {

    @Bean
    public RouteLocator gatewayRouter(RouteLocatorBuilder builder) {
        return builder
                .routes()
                .route(p -> p.path("/games/**")
                .uri("lb://GAMES-SERVICE"))
                .route(p -> p.path("/users/**")
                .uri("lb://USER-SERVICE"))
                .route(p -> p.path("/comments/**")
                .uri("lb://COMMENTS-SERVICE"))
                .build();
    }
}
