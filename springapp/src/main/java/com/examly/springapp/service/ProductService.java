package com.examly.springapp.service;

import com.examly.springapp.model.ProductModel;

import java.util.List;

public interface ProductService {
    ProductModel saveProduct(ProductModel product);

    List<ProductModel> getAllProducts();

    ProductModel getProductById(Long id);

    String deleteProduct(Long id);

    ProductModel editProduct(ProductModel data);
}
