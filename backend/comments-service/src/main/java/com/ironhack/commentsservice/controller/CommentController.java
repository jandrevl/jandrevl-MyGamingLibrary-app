package com.ironhack.commentsservice.controller;

import com.ironhack.commentsservice.models.Comment;
import com.ironhack.commentsservice.repository.CommentRepository;
import com.ironhack.commentsservice.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private CommentService commentService;

    @GetMapping("")
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }

    @GetMapping("/username/{username}")
    public List<Comment> getUserComments(@PathVariable(name = "username") String username) {
        return commentRepository.findByUsername(username);
    }

    @GetMapping("/{gameId}")
    public List<Comment> getGameComments(@PathVariable(name = "gameId") Long gameId) {
        return commentRepository.findByGameId(gameId);
    }

    @PostMapping("")
    public void createComment(@RequestBody Comment comment) {
        commentRepository.save(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable(name = "id") Long id) {
        commentRepository.delete(commentRepository.findById(id).get());
    }

    @DeleteMapping("/username/{username}")
    public void deleteUserComments(@PathVariable(name = "username") String username) {
        commentService.deleteAllUserComments(username);
    }

    @PutMapping("/{id}")
    public void updateComment(@PathVariable(name = "id") Long id, @RequestBody Comment comment) {
        commentService.updateCommentById(id, comment);
    }

}
