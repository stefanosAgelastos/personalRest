package com.cveditorapi.personal.Controllers;

import com.cveditorapi.personal.Services.ContactJPAService;
import com.cveditorapi.personal.Services.DetailService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
@Api(tags = {"contact cards"})
public class ContactController extends AbstractDetailController{

    @Autowired
    public ContactController(ContactJPAService service) {
        super(service);
    }
}
