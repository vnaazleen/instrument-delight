package com.examly.springapp.service;


import com.examly.springapp.model.RoleModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.RoleRepository;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        RoleModel adminRoleModel = new RoleModel();
        adminRoleModel.setRoleName("Admin");
        adminRoleModel.setRoleDescription("Admin role");
        roleRepository.save(adminRoleModel);

        RoleModel userRoleModel = new RoleModel();
        userRoleModel.setRoleName("User");
        userRoleModel.setRoleDescription("Default role for newly created record");
        roleRepository.save(userRoleModel);

        UserModel adminUser = new UserModel();
        adminUser.setUsername("admin@gmail.com");
        adminUser.setPassword(getEncodedPassword("admin"));
        adminUser.setName("admin");
        adminUser.setMobilenumber("987654321");
        Set<RoleModel> adminRoleModels = new HashSet<>();
        adminRoleModels.add(adminRoleModel);
        adminUser.setRole(adminRoleModels);
        userRepository.save(adminUser);

    }

    public UserModel saveUser(UserModel user) {
        RoleModel roleModel = roleRepository.findById("User").get();
        Set<RoleModel> userRoleModels = new HashSet<>();
        userRoleModels.add(roleModel);
        user.setRole(userRoleModels);
        user.setPassword(getEncodedPassword(user.getPassword()));

        return userRepository.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public UserModel fetchUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}


