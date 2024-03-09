package com.major.pmsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.major.pmsbackend.service.UserService;

@Controller
public class LoginController {
    @Autowired
    UserService userServices;
    @GetMapping(value="/login")
    public String login() {
        return "login";
    }
    @PostMapping(value="/login")
    public String welcome(ModelMap model,@RequestParam String email, @RequestParam String password) {
        if(userServices.validateUser(email, password)) {
            return "welcome";
        }
        
        return "error";
    }
    
}
