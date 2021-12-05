package com.ironhack.gatewayservice;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.codec.ServerCodecConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//@Configuration
public class GatewayConfigFile {



//    @Bean
//    public RouteLocator gatewayRouter(RouteLocatorBuilder builder) {
//        return builder
//                .routes()
//                .route(p -> p.path("/api/games/**")
//                .uri("lb://games-service"))
//                .route(p -> p.path("/api/users/**")
//                .uri("lb://USER-SERVICE"))
//                .route(p -> p.path("/api/comments/**")
//                .uri("lb://COMMENTS-SERVICE"))
//                .build();
//    }
}
