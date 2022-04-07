package com.examly.springapp.controller;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.TokenResponseModel;
import com.examly.springapp.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    private TokenService jwtService;

    @PostMapping({"/login"})
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public TokenResponseModel createJwtToken(@RequestBody LoginModel jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }

}

