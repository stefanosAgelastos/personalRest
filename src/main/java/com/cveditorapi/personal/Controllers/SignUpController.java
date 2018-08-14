package com.cveditorapi.personal.Controllers;



import com.cveditorapi.personal.Model.RestErrorInfo;
import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Services.UserJPAService;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.UniqueConstraint;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

@RestController
@RequestMapping("register")
@Api(tags = {"sign up"})
public class SignUpController {

    private UserJPAService service;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());


    @Autowired
    public SignUpController(UserJPAService service) {
        this.service=service;
    }

    @PostMapping
    @CrossOrigin /*SOOOO fucking important*/
    @ResponseBody
    public Object registerUser(@Valid @RequestBody User newUser){
        try{
        this.service.registerUser(newUser);
        return "{\"success\":1}";
        } catch (Exception e) {
            if(e.getMessage().contains("EMAIL")){
                return new RestErrorInfo(e, "email already used");
            } else if(e.getMessage().contains("propertyPath=firstname")){
                return new RestErrorInfo(e, "first name must be between 4-50 chars");
            } else if(e.getMessage().contains("propertyPath=lastname")){
                return new RestErrorInfo(e, "last name must be between 4-50 chars");
            } else if(e.getMessage().contains("USERNAME")){
                return new RestErrorInfo(e, "username already taken");
            }
            return new RestErrorInfo(e, "some error");
        }
    }
}
