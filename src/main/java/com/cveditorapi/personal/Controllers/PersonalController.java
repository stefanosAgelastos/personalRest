package com.cveditorapi.personal.Controllers;

import com.cveditorapi.personal.Model.Detail;
import com.cveditorapi.personal.Model.Personal;
import com.cveditorapi.personal.Services.DetailService;
import com.cveditorapi.personal.Services.PersonalJPAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personal")
public class PersonalController extends AbstractDetailController{

    @Autowired
    public PersonalController(PersonalJPAService service) {
        super(service);
    }
}
