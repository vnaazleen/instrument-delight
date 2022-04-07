package com.examly.springapp.controller;

import com.examly.springapp.model.CartModel;
import com.examly.springapp.request.CartRequest;
import com.examly.springapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/home/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public CartModel addToCart(@RequestBody CartRequest cartRequest, @PathVariable Long id) {
        return cartService.addToCart(cartRequest.getQuantity(),cartRequest.getUsername(), id);
    }

    @GetMapping("/cart/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public List<CartModel> showCart(@PathVariable("id") String id) {
        return cartService.showCart(id);
    }

    @DeleteMapping("/cart/{username}/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public String deleteCartItem(@PathVariable("username") String username, @PathVariable("id") Long cartItemId) {
        // Todo: change to del specific user's cart item only not all the cart items which have id
        return cartService.deleteCartItem(cartItemId);
    
    }
}
