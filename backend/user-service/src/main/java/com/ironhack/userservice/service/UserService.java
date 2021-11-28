package com.ironhack.userservice.service;

import com.ironhack.userservice.models.User;
import com.ironhack.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findUserById(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public User findUserByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public void deleteUserById(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public void deleteUserByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public void updateUserById(Long id, User user) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        User updatableUser = optionalUser.get();
        updateUser(user, updatableUser);
    }

    public void updateUserByUsername(String username, User user) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if(optionalUser.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        User updatableUser = optionalUser.get();
        updateUser(user, updatableUser);
    }

    private void updateUser(User user, User updatableUser) {
        updatableUser.setUsername(user.getUsername());
        updatableUser.setName(user.getName());
        updatableUser.setFavouritePlatform(user.getFavouritePlatform());
        updatableUser.setPassword(user.getPassword());
        updatableUser.setStatus(user.getStatus());
        userRepository.save(updatableUser);
    }


}
