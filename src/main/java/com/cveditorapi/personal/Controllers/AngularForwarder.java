package com.cveditorapi.personal.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class AngularForwarder {
    @RequestMapping("/angular/**")
    @CrossOrigin
    public String someOtherPage(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("forwarding");
        return "forward:/angular/index.html";
    }
}