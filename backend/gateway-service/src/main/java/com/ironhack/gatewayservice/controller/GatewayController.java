package com.ironhack.gatewayservice.controller;


import com.ironhack.gatewayservice.models.Comment;
import com.ironhack.gatewayservice.models.Game;
import com.ironhack.gatewayservice.models.User;
import com.ironhack.gatewayservice.proxys.CommentsProxy;
import com.ironhack.gatewayservice.proxys.GamesProxy;
import com.ironhack.gatewayservice.proxys.UserProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
public class GatewayController {

    @Autowired
    private UserProxy userProxy;
    @Autowired
    private CommentsProxy commentsProxy;
    @Autowired
    private GamesProxy gamesProxy;


    @GetMapping("/api/users/{id}")
    public User getUserById(@PathVariable(name = "id") Long id) {
        return userProxy.getUserById(id);
    }

    @GetMapping("/api/users/username/{username}")
    public User getUserByUsername(@PathVariable(name = "username") String username){
        return userProxy.getUserByUsername(username);
    }

    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        return userProxy.getAllUsers();
    }

    @PostMapping("/api/users")
    public void createUser(@RequestBody User user) {
        userProxy.createUser(user);
    }

    @DeleteMapping("/api/users/{id}")
    public void deleteUserById(@PathVariable(name = "id") Long id) {
        userProxy.deleteUserById(id);
    }

    @DeleteMapping("/api/users/username/{username}")
    public void deleteUserByUsername(@PathVariable(name = "username") String username) {
        userProxy.deleteUserByUsername(username);
    }

    @PutMapping("/api/users/{id}")
    public void updateUserById(@PathVariable(name = "id") Long id, @RequestBody User user) {
        userProxy.updateUserById(id, user);
    }

    @PutMapping("/api/users/username/{username}")
    public void updateUserByUsername(@PathVariable(name = "username") String username, @RequestBody User user) {
        userProxy.updateUserByUsername(username, user);
    }


    @GetMapping("/api/comments")
    public List<Comment> getComments() {
        return commentsProxy.getComments();
    }

    @GetMapping("/api/comments/username/{username}")
    public List<Comment> getUserComments(@PathVariable(name = "username") String username) {
        return commentsProxy.getUserComments(username);
    }

    @GetMapping("/api/comments/{gameId}")
    public List<Comment> getGameComments(@PathVariable(name = "gameId") Long gameId) {
        return commentsProxy.getGameComments(gameId);
    }

    @PostMapping("/api/comments")
    public void createComment(@RequestBody Comment comment) {
        commentsProxy.createComment(comment);
    }

    @DeleteMapping("/api/comments/{id}")
    public void deleteComment(@PathVariable(name = "id") Long id) {
        commentsProxy.deleteComment(id);
    }

    @DeleteMapping("/api/comments/username/{username}")
    public void deleteUserComments(@PathVariable(name = "username") String username) {
        commentsProxy.deleteUserComments(username);
    }

    @PutMapping("/api/comments/{id}")
    public void updateComment(@PathVariable(name = "id") Long id, @RequestBody Comment comment) {
        commentsProxy.updateComment(id, comment);
    }

    @GetMapping("/api/games/{id}")
    public Game getGameById(@PathVariable(name = "id") Long id) {
        return gamesProxy.getGameById(id);
    }

    @GetMapping("/api/games/search/{searchString}")
    public List<Game> searchGameByString(@PathVariable(name = "searchString") String searchString) {
        return gamesProxy.searchGameByString(searchString);
    }









}
