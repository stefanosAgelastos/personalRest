package com.cveditorapi.personal.Controllers;

import com.cveditorapi.personal.Model.Personal;
import com.cveditorapi.personal.Services.PersonalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personal")
public class PersonalController {


    private final
    PersonalService service;

    @Autowired
    public PersonalController(@Qualifier("JPA") PersonalService service) {
        this.service = service;
    }

    @GetMapping()
    @ResponseBody
    //todo I nedd to undestand this better and find a better solution
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Personal> getAll() {
        System.out.println("getAll method evoked");
        return this.service.getAll();
    }

    @PutMapping
    @ResponseBody
    @CrossOrigin
    public Personal update(@RequestBody Personal toUpdate) {
        System.out.println("Received for updating: " + toUpdate.toString());
        return this.service.update(toUpdate);
    }

    @PostMapping
    @ResponseBody
    @CrossOrigin
    public Personal addNew(@RequestBody Personal toAdd) {
        return this.service.addNew(toAdd);
    }

    @DeleteMapping
    @ResponseBody
    @CrossOrigin
    public Personal delete(@RequestBody Personal toDelete) {
        this.service.delete(toDelete);
        //todo is this ok?
        return null;
    }
}
