package com.examly.springapp.model;
import javax.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
public class UserModel {

    @Id
    private String username;
    private String name;
    private String mobilenumber;
    private String password;
    private boolean active;



    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<RoleModel> roleModel;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getName() {
        return name;
    }
    public boolean isActive() {
        return active;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password= password;
    }

    public Set<RoleModel> getRole() {
        return roleModel;
    }

    public void setRole(Set<RoleModel> role) {
        this.roleModel = role;
    }

	
}

