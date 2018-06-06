package com.cveditorapi.personal.Controllers;

import com.cveditorapi.personal.Model.Contact;
import com.cveditorapi.personal.Model.Detail;
import com.cveditorapi.personal.Model.Personal;
import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Services.ContactJPAService;
import com.cveditorapi.personal.Services.DetailService;
import com.cveditorapi.personal.Services.PersonalJPAService;
import com.cveditorapi.personal.Services.UserJPAService;
import com.cveditorapi.personal.TokenAuthorization.JwtTokenUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public abstract class AbstractDetailController {

    /*Authorization related beans*/
    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    @Qualifier("UserJPAService")
    private UserJPAService userService;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());


    /*Model related bean*/
    private final
    DetailService service;

    private HttpServletRequest request;

    public AbstractDetailController( DetailService service) {
        this.service = service;
    }

    /*
    * Convert Detail instance to instance of Personal or Contact
    * depending on the instance of the service that's injected
    * todo: ask Faisal if this is the right way to do this
    * */
    private Detail typeConvertAndUserAssignment(Detail toConvert){
        toConvert.setUser(getAuthenticatedUser());
        if(this.service instanceof PersonalJPAService){
            logger.info("..converting to personal..");
            return new Personal(toConvert.getId(), toConvert.getLabel(),toConvert.getValue(), getAuthenticatedUser());
        }else if(this.service instanceof ContactJPAService){
            logger.info("..converting to contact..");
            return new Contact(toConvert.getId(), toConvert.getLabel(),toConvert.getValue(), getAuthenticatedUser());
        }else{
            return null;
        }
    }

    @GetMapping()
    //todo I nedd to undestand this better and find a better solution
    @CrossOrigin(origins = "http://localhost:4200")
    @PreAuthorize("hasRole('USER')")
    public List<Detail> getAll(HttpServletRequest request) {
        this.request = request;
        logger.info("getAll method evoked");
        return this.service.getAll(getAuthenticatedUser());
    }

    @PutMapping
    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    public Detail update( HttpServletRequest request, @RequestBody Detail toUpdate) {
        /*convert Detail instance to the right domain type*/
        this.request = request;
        toUpdate = typeConvertAndUserAssignment(toUpdate);
        logger.info("Received for updating: " + toUpdate.toString());
        return this.service.update(toUpdate);
    }

    @PostMapping
    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    public Detail addNew(HttpServletRequest request, @RequestBody Detail toAdd) {
        this.request = request;
        /*convert Detail instance to the right domain type*/
        toAdd = typeConvertAndUserAssignment(toAdd);
        logger.info("Adding new: "+toAdd);
        return this.service.addNew(toAdd);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Void> delete(HttpServletRequest request, @PathVariable("id") int id) {
        this.request = request;
        Detail toDelete = this.service.getOne(id);
        if(toDelete.getUser().equals(this.getAuthenticatedUser())){
            logger.info("deleting detail with id "+ id + ".");
            this.service.delete(id);
            //todo is this ok?
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.badRequest().build();
    }

    public User getAuthenticatedUser() {
        String token = this.request.getHeader(tokenHeader).substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        User user = userService.findByUserName(username);
        return user;
    }
}
