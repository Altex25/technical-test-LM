package com.example.product.service;

import com.example.product.dao.ProductDao;
import com.example.product.entity.Product;
import com.example.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository  productRepository;

    private final ProductDao productDao;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductDao productDao) {
        this.productRepository = productRepository;
        this.productDao = productDao;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public long createProduct(Product product) {
        return productDao.insert(product);
    }
}
