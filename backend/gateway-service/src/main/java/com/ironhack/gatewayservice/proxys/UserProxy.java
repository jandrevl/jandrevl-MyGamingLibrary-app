package com.ironhack.gatewayservice.proxys;

import com.ironhack.gatewayservice.models.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "USER-SERVICE")
public interface UserProxy {

    @GetMapping("/api/users/{id}")
    User getUserById(@PathVariable(name = "id") Long id);

    @GetMapping("/api/users/username/{username}")
    User getUserByUsername(@PathVariable(name = "username") String username);

    @GetMapping("/api/users")
    List<User> getAllUsers();

    @PostMapping("/api/users")
    void createUser(@RequestBody User user);

    @DeleteMapping("/api/users/{id}")
    void deleteUserById(@PathVariable(name = "id") Long id);

    @DeleteMapping("/api/users/username/{username}")
    void deleteUserByUsername(@PathVariable(name = "username") String username);

    @PutMapping("/api/users/{id}")
    void updateUserById(@PathVariable(name = "id") Long id, @RequestBody User user);

    @PutMapping("/api/users/username/{username}")
    void updateUserByUsername(@PathVariable(name = "username") String username, @RequestBody User user);

}
