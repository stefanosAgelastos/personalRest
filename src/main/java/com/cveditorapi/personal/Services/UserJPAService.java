package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.Contact;
import com.cveditorapi.personal.Model.Personal;
import com.cveditorapi.personal.Model.UserModel.Authority;
import com.cveditorapi.personal.Model.UserModel.AuthorityName;
import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Persistence.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;

@Service("UserJPAService")
public class UserJPAService {

    private UserRepository repo;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    AuthorityJPAService authorityJPAService;
    @Autowired
    PersonalJPAService pService;
    @Autowired
    ContactJPAService cService;

    @Autowired
    public UserJPAService(UserRepository repo, AuthorityJPAService authorityJPAService) {
        this.repo = repo;
        this.authorityJPAService = authorityJPAService;
    }

    public void registerUser(User newUser) {
        logger.info("Started registration method");
        newUser.setLastPasswordResetDate(Date.from(Instant.now()));
        newUser.setEnabled(true);
        newUser.setAuthorities(new ArrayList<Authority>());
        newUser.getAuthorities().add(authorityJPAService.getAdminAuthority());
        newUser.getAuthorities().add(authorityJPAService.getUserAuthority());
        logger.info("received request to register: "+newUser.toString());
        /*TODO catch  unique email exception*/
        String encodedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPassword);
        this.repo.flush();
        newUser = this.repo.saveAndFlush(newUser);

        /*Adding some details for convenience of the user*/
        Personal name = new Personal(0, "First Name", newUser.getFirstname(), newUser);
        this.pService.addNew(name);
        Personal surname = new Personal(0, "Last Name", newUser.getLastname(), newUser);
        this.pService.addNew(surname);
        Contact email = new Contact(0, "email", newUser.getEmail(), newUser);
        this.cService.addNew(email);


    }

    public User findByUserName(String username){
        return this.repo.findByUsername(username);
    }
}
