package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CartModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cartItemID;
    private String ProductName;
    private int quantity;
    private double price;
    private String userId;

    public CartModel() {
    }

    public CartModel(String userId, Long cartItemID, String productName, int quantity, double price) {
        this.userId = userId;
    	this.cartItemID = cartItemID;
        ProductName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    
    public void setUserId(String userid) {
    	this.userId=userid;
    }

    public String getUserId()
    {
    	return userId;
    }

    public Long getCartItemID() {
        return cartItemID;
    }

    public void setCartItemID(Long cartItemID) {
        this.cartItemID = cartItemID;
    }

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String productName) {
        ProductName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}



