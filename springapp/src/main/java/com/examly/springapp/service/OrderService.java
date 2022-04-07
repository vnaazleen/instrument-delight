package com.examly.springapp.service;
import com.examly.springapp.model.OrderModel;

import java.util.List;

public interface OrderService {
    OrderModel placeOrder(int quantity,String username, Long id);
    
    List<OrderModel> showOrders(String id);

    List<OrderModel> saveProduct(String id);
    
    List<OrderModel> getUserOrders();

}
