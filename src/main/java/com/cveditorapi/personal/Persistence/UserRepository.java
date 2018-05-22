package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.UserModel.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
