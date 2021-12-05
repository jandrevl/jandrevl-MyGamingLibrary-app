package com.ironhack.userservice.proxys;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "COMMENTS-SERVICE")
public interface CommentsProxy {

    @DeleteMapping("/api/comments/username/{username}")
    void deleteComments(@PathVariable(name = "username") String username);
}
