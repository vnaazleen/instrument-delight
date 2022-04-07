package com.examly.springapp.repository;
import com.examly.springapp.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {
    public List<OrderModel> findByUserId(String id);
}
