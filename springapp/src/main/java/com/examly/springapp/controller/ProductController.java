package com.examly.springapp.controller;

import com.examly.springapp.model.ProductModel;
import com.examly.springapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/admin")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io")
    public ProductModel productSave(@RequestBody ProductModel product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/products")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io")
    public List<ProductModel> getProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io")
    public ProductModel productEditData(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/products/{id}")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io")
    public String productDelete(@PathVariable("id") Long id) {
        return productService.deleteProduct(id);
    }

    @PutMapping("/products")
    @CrossOrigin(origins = "https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io")
    public ProductModel productEditSave(@RequestBody ProductModel data) {
        return productService.editProduct(data);
    }
//    https://8081-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io
}