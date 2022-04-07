package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class SignupController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/saveUser"})
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public UserModel saveUser(@RequestBody UserModel user)throws Exception {
        String tempUsername=user.getUsername();
        if(tempUsername !=null && !" ".equals(tempUsername)){
            UserModel userobj=userService.fetchUserByUsername(tempUsername);
            if(userobj !=null) {
                throw new Exception("User with this "+tempUsername+" is Already Exist");
            }
        }
        UserModel userObj=null;
        userObj=userService.saveUser(user);
        return userObj;
    }

    @GetMapping({"/forAdmin"})
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }


    @GetMapping("/user/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public UserModel fetchById(@PathVariable("id") String username) {
        return userService.fetchUserByUsername(username);
    }

}

