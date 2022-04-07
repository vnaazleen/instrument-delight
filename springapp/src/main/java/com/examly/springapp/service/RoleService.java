package com.examly.springapp.service;

import com.examly.springapp.model.RoleModel;
import com.examly.springapp.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public RoleModel createNewRole(RoleModel roleModel) {
        return roleRepository.save(roleModel);
    }
}
