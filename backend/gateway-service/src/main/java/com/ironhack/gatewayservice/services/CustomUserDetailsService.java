package com.ironhack.gatewayservice.services;

import com.ironhack.gatewayservice.models.User;
import com.ironhack.gatewayservice.proxys.UserProxy;
import com.ironhack.gatewayservice.security.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserProxy userProxy;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = Optional.ofNullable(userProxy.getUserByUsername(username));

        if(!user.isPresent()) {
            throw new UsernameNotFoundException("User does not exist");
        }
        CustomUserDetails customUserDetails = new CustomUserDetails(user.get());

        return customUserDetails;
    }
}
