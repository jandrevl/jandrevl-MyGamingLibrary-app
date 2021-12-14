package com.ironhack.userservice.models;


import com.ironhack.userservice.enums.Platform;
import com.ironhack.userservice.enums.Role;
import com.ironhack.userservice.enums.Status;
import com.ironhack.userservice.repository.UserRepository;
import com.ironhack.userservice.utils.PasswordUtil;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
//@Setter
@Entity
public class User {

//    @Autowired
//    @Transient
//    private UserRepository userRepository;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Enumerated(EnumType.STRING)
    @Column(name = "favourite_platform")
    @Nullable
    private Platform favouritePlatform;
    @Enumerated(EnumType.STRING)
    private Role role;


    public User(String name, String username, String password, Platform favouritePlatform, Status status, Role role) {
        this.name = name;
        setUsername(username);
        setPassword(password);
        this.favouritePlatform = favouritePlatform;
        this.status = status;
        this.role=role;

    }



    public void setUsername(String username) {
//        List<User> userList = userRepository.findAll();
//        for (User user : userList) {
//            if (username == user.getUsername()) {
//                throw new IllegalArgumentException("Username already exists");
//            }
//        }
        this.username = username;
    }

    public void setPassword(String password) {
//        String encryptedPassword = PasswordUtil.encryptPassword(password);
//        this.password = encryptedPassword;
        this.password = password;
    }

//    public void setPasswordWithoutEncryption(String password) {
//        this.password = password;
//    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setFavouritePlatform(@Nullable Platform favouritePlatform) {
        this.favouritePlatform = favouritePlatform;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}

