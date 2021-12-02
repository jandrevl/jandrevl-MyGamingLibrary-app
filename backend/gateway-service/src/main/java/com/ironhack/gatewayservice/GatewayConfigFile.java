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
                .route(p -> p.path("/api/games/**")
                .uri("lb://games-service"))
                .route(p -> p.path("/api/users/**")
                .uri("lb://USER-SERVICE"))
                .route(p -> p.path("/api/comments/**")
                .uri("lb://COMMENTS-SERVICE"))
                .build();
    }
}
