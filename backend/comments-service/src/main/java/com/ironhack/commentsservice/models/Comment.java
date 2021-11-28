package com.ironhack.commentsservice.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long gameId;
    private String username;
    private LocalDate date;
    private String comment;

    public Comment(Long gameId, String username, String comment) {
        this.gameId = gameId;
        this.username = username;
        this.comment = comment;
        this.date = LocalDate.now();
    }
}
