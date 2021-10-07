package com.mycom.app.repository;

import com.mycom.app.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<User, String> {

    User findByUserId(String userId);

    User findByUserIdAndPassword(String userId, String password);

}
