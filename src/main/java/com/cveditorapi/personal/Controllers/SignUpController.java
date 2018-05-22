package com.cveditorapi.personal.Controllers;



import com.cveditorapi.personal.Model.UserModel.Authority;
import com.cveditorapi.personal.Model.UserModel.AuthorityName;
import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Services.UserJPAService;
import com.cveditorapi.personal.TokenAuthorization.JwtUser;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.Temporal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;

@RestController
@RequestMapping("register")
public class SignUpController {

    private UserJPAService service;

    @Autowired
    public SignUpController(UserJPAService service) {
        this.service=service;
    }

    @PostMapping
    @CrossOrigin /*SOOOO fucking important*/
    @ResponseBody
    public String registerUser(@RequestBody User newUser){
        /*TODO turn this to logging*/
        System.out.println("Started registration method");
        newUser.setLastPasswordResetDate(Date.from(Instant.now()));
        newUser.setEnabled(true);
        Authority user = new Authority();
        user.setName(AuthorityName.ROLE_USER);
        user.setId((Integer.toUnsignedLong(1)));
        newUser.setAuthorities(Arrays.asList(new Authority()));
        newUser.getAuthorities().iterator().next().setName(AuthorityName.ROLE_USER);
        System.out.println("received request to register: "+newUser.toString());
        /*TODO catch non unique email exception*/
        this.service.registerUser(newUser);
        return "{\"success\":1}";
    }
}
