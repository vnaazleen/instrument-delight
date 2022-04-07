package com.examly.springapp.service;

import com.examly.springapp.model.ProductModel;
import com.examly.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImplementation implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductModel saveProduct(ProductModel product) {
        return productRepository.save(product);
    }

    @Override
    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ProductModel getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public String deleteProduct(Long id) {
        productRepository.deleteById(id);
        return "Product " + id + " deleted successfully";
    }

    @Override
    public ProductModel editProduct(ProductModel data) {
        Long id = data.getProductId();
        //System.out.println("\n\n" + id + "\n\n");
        ProductModel product = productRepository.findById(id).get();

        if(Objects.nonNull(data.getProductName()) && !"".equals(data.getProductName())) {
            product.setProductName(data.getProductName());
        }

        if(Objects.nonNull(data.getImageUrl()) && !"".equals(data.getImageUrl())) {
            product.setImageUrl(data.getImageUrl());
        }

        if(Objects.nonNull(data.getDescription()) && !"".equals(data.getDescription())) {
            product.setDescription(data.getDescription());
        }

        if(Objects.nonNull(data.getPrice())) {
            product.setPrice(data.getPrice());
        }

        if(Objects.nonNull(data.getQuantity())) {
            product.setQuantity(data.getQuantity());
        }

        return productRepository.save(product);
    }


}
