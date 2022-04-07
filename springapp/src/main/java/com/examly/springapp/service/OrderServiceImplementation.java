package com.examly.springapp.service;
import com.examly.springapp.model.CartModel;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.model.ProductModel;
import com.examly.springapp.repository.CartRepository;
import com.examly.springapp.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.Window;
import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService {

    @Autowired
    private ProductService productService;
    
    @Autowired
    private CartService cartService;

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private CartRepository cartRepository;

    @Override
    public OrderModel placeOrder(int quantity,String username, Long id) {
        ProductModel product = productService.getProductById(id);
        if(product == null) {
            return null;
        }

        OrderModel order = new OrderModel();
        order.setProductName(product.getProductName());
        order.setQuantity(quantity);
        order.setPrice(product.getPrice());
        order.setTotalPrice(quantity * product.getPrice());
        order.setUserId(username);
        order.setStatus("Order Placed successfully");

        return orderRepository.save(order);
    }

    @Override
    public List<OrderModel> showOrders(String id) {
        return orderRepository.findByUserId(id);
    }
    
    @Override
    public List<OrderModel> saveProduct(String username) {
         OrderModel order = new OrderModel();
         for(CartModel items : cartRepository.findByUserId(username)) {
         	//placeOrder(items.getQuantity(),items.getCartItemID());
        	  order.setOrderID(2L);
              order.setProductName(items.getProductName());
              order.setQuantity(items.getQuantity());
              order.setPrice(items.getPrice());
              order.setTotalPrice(items.getQuantity() * items.getPrice());
              order.setUserId(username);
              order.setStatus("Order Placed successfully");
              orderRepository.save(order);
              cartRepository.deleteById(items.getCartItemID());
         }
         
         return orderRepository.findByUserId(username);

     
     }
    
    @Override
    public List<OrderModel> getUserOrders() {
    	return orderRepository.findAll();
    }

}
