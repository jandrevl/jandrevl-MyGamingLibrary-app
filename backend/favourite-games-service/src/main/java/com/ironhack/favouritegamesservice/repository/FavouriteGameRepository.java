package com.ironhack.favouritegamesservice.repository;


import com.ironhack.favouritegamesservice.models.FavouriteGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteGameRepository extends JpaRepository<FavouriteGame, Long> {

    List<FavouriteGame> findByUsername(String username);

}
