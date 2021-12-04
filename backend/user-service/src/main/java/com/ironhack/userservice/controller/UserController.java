package com.ironhack.userservice.controller;

import com.ironhack.userservice.models.User;
import com.ironhack.userservice.repository.UserRepository;
import com.ironhack.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable(name = "id") Long id) {
        return userService.findUserById(id);
    }

    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable(name = "username") String username) {
        return userService.findUserByUsername(username);
    }

    @PostMapping("")
    public void createUser(@RequestBody User user) {
        if(userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("User Already Exists");
        }
        userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable(name = "id") Long id) {
        userService.deleteUserById(id);
    }

    @DeleteMapping("/username/{username}")
    public void deleteUserByUsername(@PathVariable(name = "username") String username) {
        userService.deleteUserByUsername(username);
    }

    @PutMapping("/{id}")
    public void updateUserById(@PathVariable(name = "id") Long id, @RequestBody User user) {
        userService.updateUserById(id, user);
    }

    @PutMapping("/username/{username}")
    public void updateUserByUsername(@PathVariable(name = "username") String username, @RequestBody User user) {
        userService.updateUserByUsername(username, user);
    }


}
