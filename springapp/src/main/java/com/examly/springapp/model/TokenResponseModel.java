package com.examly.springapp.model;


public class TokenResponseModel {

    private UserModel user;
    private String jwtToken;

    public TokenResponseModel(UserModel user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
