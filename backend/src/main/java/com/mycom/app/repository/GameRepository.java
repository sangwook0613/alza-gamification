package com.mycom.app.repository;

import com.mycom.app.domain.entity.Game;
import com.mycom.app.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {
}
