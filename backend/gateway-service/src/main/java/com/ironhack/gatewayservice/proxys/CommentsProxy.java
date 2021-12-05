package com.ironhack.gatewayservice.proxys;


import com.ironhack.gatewayservice.models.Comment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "COMMENTS-SERVICE")
public interface CommentsProxy {

    @GetMapping("/api/comments")
    List<Comment> getComments();

    @GetMapping("/api/comments/username/{username}")
    List<Comment> getUserComments(@PathVariable(name = "username") String username);

    @GetMapping("/api/comments/{gameId}")
    List<Comment> getGameComments(@PathVariable(name = "gameId") Long gameId);

    @PostMapping("/api/comments")
    void createComment(@RequestBody Comment comment);

    @DeleteMapping("/api/comments/{id}")
    void deleteComment(@PathVariable(name = "id") Long id);

    @DeleteMapping("/api/comments/username/{username}")
    void deleteUserComments(@PathVariable(name = "username") String username);

    @PutMapping("/api/comments/{id}")
    void updateComment(@PathVariable(name = "id") Long id, @RequestBody Comment comment);
}
