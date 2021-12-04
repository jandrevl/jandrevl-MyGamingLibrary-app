package com.ironhack.commentsservice.service;

import com.ironhack.commentsservice.models.Comment;
import com.ironhack.commentsservice.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public void updateCommentById(Long id, Comment comment) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        if(optionalComment.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Comment updatableComment = optionalComment.get();
        updateComment(comment, updatableComment);
    }

    private void updateComment(Comment comment, Comment updatableComment) {
        updatableComment.setComment(comment.getComment());
        commentRepository.save(updatableComment);
    }

    public void deleteAllUserComments(String username) {
        List<Comment> userComments = commentRepository.findByUsername(username);
        for(Comment comment : userComments) {
            commentRepository.delete(comment);
        }
    }
}
