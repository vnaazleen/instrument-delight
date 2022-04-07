package com.examly.springapp.service;

import com.examly.springapp.model.CartModel;
import com.examly.springapp.model.ProductModel;
import com.examly.springapp.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartServiceImplementation implements CartService {

    @Autowired
    private ProductService productService;

    @Autowired
    private CartRepository cartRepository;

    @Override
    public CartModel addToCart(int quantity,String username, Long id) {
        ProductModel product = productService.getProductById(id);
        if(product == null) {
            return null;
        }
        CartModel cartItem = new CartModel();
        cartItem.setProductName(product.getProductName());
        cartItem.setQuantity(quantity);
        cartItem.setPrice(quantity * product.getPrice());
        cartItem.setUserId(username);

        return cartRepository.save(cartItem);
    }

    @Override
    public List<CartModel> showCart(String id) {
        return cartRepository.findByUserId(id);
    }

    @Override
    public String deleteCartItem(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
        return "Item " + cartItemId + " deleted successfully";
    }
}



