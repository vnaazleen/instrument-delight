package com.examly.springapp.repository;

import com.examly.springapp.model.CartModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartModel, Long> {
    public List<CartModel> findByUserId(String id);
}
