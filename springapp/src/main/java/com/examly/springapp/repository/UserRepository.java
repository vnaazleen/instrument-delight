package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserModel, String> {

    public UserModel findByUsername(String username);

}