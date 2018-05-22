package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Persistence.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("UserJPAService")
public class UserJPAService {

    private UserRepository repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserJPAService(UserRepository repo) {
        this.repo = repo;
    }

    public void registerUser(User newUser) {
        String encodedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPassword);
        this.repo.saveAndFlush(newUser);
    }

    public User findByUserName(String username){
        return this.repo.findByUsername(username);
    }
}
