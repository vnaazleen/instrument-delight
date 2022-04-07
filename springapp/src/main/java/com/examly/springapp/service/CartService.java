package com.examly.springapp.service;



import com.examly.springapp.model.CartModel;

import java.util.List;

public interface CartService {
    CartModel addToCart(int quantity,String username, Long id);
    
    List<CartModel> showCart(String id);

	String deleteCartItem(Long cartItemId);
}


