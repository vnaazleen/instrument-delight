package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long OrderID;
    private String ProductName;
    private int quantity;
    private double price;
    private String userId;
    private double Totalprice;
    public String Status;

    public OrderModel() {
    }

    public OrderModel(String userId, Long OrderID, String productName, int quantity, double price,double Totalprice,String Status) {
        this.userId = userId;
    	this.OrderID = OrderID;
        ProductName = productName;
        this.quantity = quantity;
        this.price = price;
        this.Totalprice=Totalprice;
        this.Status=Status;
    }

    
    public void setUserId(String userid) {
    	this.userId=userid;
    }

    public String getUserId()
    {
    	return userId;
    }

    public Long getOrderID() {
        return OrderID;
    }

    public void setOrderID(Long OrderID) {
        this.OrderID = OrderID;
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
    public double getTotalPrice() {
        return Totalprice;
    }

    public void setTotalPrice(double Totalprice ) {
        this.Totalprice = Totalprice;
    }
    
    public String getStatus() {
        return Status;
    }
    
    public void setStatus(String Status ) {
        this.Status = Status;
    }
    
}




