package com.ironhack.gatewayservice.proxys;

import com.ironhack.gatewayservice.models.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "USER-SERVICE", url = "localhost:8100")
public interface UserProxy {

    @GetMapping("/api/users/{id}")
    User getUserById(@PathVariable(name = "id") Long id);

    @GetMapping("/api/users/username/{username}")
    User getUserByUsername(@PathVariable(name = "username") String username);

    @GetMapping("")
    List<User> getAllUsers();
}
