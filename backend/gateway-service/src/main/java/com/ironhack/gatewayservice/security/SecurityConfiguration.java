package com.ironhack.gatewayservice.security;


import com.ironhack.gatewayservice.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpMethod;
import org.springframework.http.codec.ServerCodecConfigurer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    CustomUserDetailsService customUserDetailsService;

    @Autowired
    PasswordEncoder encoder;


    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ServerCodecConfigurer serverCodecConfigurer() {
        return ServerCodecConfigurer.create();
    }



    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(encoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.httpBasic();
        http.csrf().disable();
        http.authorizeRequests()
                .mvcMatchers(HttpMethod.GET, "/api/users/**").hasRole("ADMIN")
                .mvcMatchers(HttpMethod.DELETE, "/api/users/**").hasRole("ADMIN")
                .mvcMatchers(HttpMethod.DELETE, "/api/comments/**").hasRole("ADMIN")
                .mvcMatchers(HttpMethod.PUT, "/api/users/**").hasAnyRole("ADMIN", "USER")
                .mvcMatchers(HttpMethod.POST, "/api/comments/").hasAnyRole("ADMIN", "USER")
                .mvcMatchers(HttpMethod.PUT, "/api/comments/**").hasAnyRole("ADMIN", "USER")
                .anyRequest().permitAll();
    }
}
