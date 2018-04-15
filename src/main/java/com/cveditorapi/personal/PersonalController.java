package com.cveditorapi.personal;

import com.cveditorapi.personal.Model.Personal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class PersonalController {

    private ArrayList<Personal> allPersonals = new ArrayList(Arrays.asList(new Personal(1,"name","Stefanos")
            , new Personal(2,"gender","fluid")
            , new Personal(3, "dob","06/07/1987")));

    @GetMapping("/getAll")
    @ResponseBody
    //todo I nedd to undestand this better and find a better solution
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Personal> getAll(){
        System.out.println("getAll method evoked");
        return this.allPersonals;
    }
}
